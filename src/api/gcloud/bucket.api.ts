import { GcpObject, ObjectListQuery } from '../../types/gcloud.interface';
import * as glob from 'glob';
import * as fs from 'fs';
import { Stats } from 'fs';
import nock from 'nock';
import { getMetadata, saveMetadata } from '../metadata';
import { URL } from 'url';
import * as md5File from 'md5-file';
import { calculate } from '../../helper/crc32c';
import { getConfig } from '../../parser';

export async function list(bucket: string, query?: ObjectListQuery): Promise<Array<GcpObject>> {
  const config = getConfig();
  const bucketPath =
    (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';
  const pathGlob = `${bucketPath}${query?.prefix ? query.prefix + '/' : ''}**/*`;
  const files = glob
    .sync(pathGlob)
    .filter((file: string) => !fs.statSync(file).isDirectory())
    .map((file: string) => getFileAsGcpObject(bucket, file));
  return await Promise.all(files);
}

/**
 * Extract parameters from URI
 * @param uri
 * @param positions
 * @returns
 */
function extractFromUri(uri: string, positions: Array<number>): Array<string> {
  const splitUri = uri.split('?')[0].split('/');
  return positions.map((position: number) => splitUri[position]);
}

/**
 * Based on the bucket and the path to the local file, a mapped {@link GcpObject} is returned.
 *
 * @param bucket Name of the bucket
 * @param localFilePath Complete path of the local file
 * @returns {@link GcpObject}
 */
async function getFileAsGcpObject(bucket: string, localFilePath: string): Promise<GcpObject> {
  const stats: Stats = fs.statSync(localFilePath);
  const fileName = localFilePath.split(bucket).splice(1).join(bucket).slice(1);
  let metadata = {};
  try {
    metadata = { ...metadata, ...getMetadata(bucket, fileName) };
  } catch (err) {
    // no metadata found, which is probably no big deal
  }
  return {
    kind: 'storage#object',
    id: fileName,
    selfLink: 'file://' + localFilePath,
    name: fileName,
    bucket,
    timeCreated: stats.birthtime.toISOString(),
    updated: stats.mtime.toISOString(),
    size: stats.size,
    metadata,
    md5Hash: Buffer.from(md5File.sync(localFilePath)).toString('base64'),
    crc32c: '0000' + (await calculate(localFilePath)) // for some reason, google calls substr(4) on crc32c
  };
}

export function mockEndoints(): void {
  const config = getConfig();
  // mock listing files
  // see https://cloud.google.com/storage/docs/json_api/v1/objects/list
  nock('https://storage.googleapis.com', { encodedQueryParams: true })
    .persist()
    .get(/^\/storage\/v1\/b\/[^/]+\/o$/)
    .query(true)
    .reply(200, function (uri: string, body: nock.Body, cb) {
      const [bucket] = extractFromUri(uri, [4]);
      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      list(bucket, parsedUri.searchParams as ObjectListQuery).then((files: Array<GcpObject>) => {
        cb(null, {
          kind: 'storage#objects',
          items: files
        });
      });
    });

  // mock getting single file
  // see https://cloud.google.com/storage/docs/json_api/v1/objects/get
  nock('https://storage.googleapis.com', { encodedQueryParams: true })
    .persist()
    .get(/^\/storage\/v1\/b\/[^/]+\/o\/[^/]+$/)
    .query(true)
    .reply(200, function (uri: string, body: nock.Body, cb) {
      const [bucket, fileName] = extractFromUri(uri, [4, 6]);
      const decodedFileName = decodeURIComponent(fileName);
      const bucketPath =
        (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';

      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      // ?alt=media indicates that the file should be returned as a stream
      if (parsedUri.searchParams.get('alt') === 'media') {
        cb(null, fs.readFileSync(bucketPath + decodedFileName));
      } else {
        getFileAsGcpObject(bucket, bucketPath + decodedFileName).then((obj: GcpObject) => {
          cb(null, obj);
        });
      }
    });

  // mock storing single file
  // see https://cloud.google.com/storage/docs/json_api/v1/objects/insert
  nock('https://storage.googleapis.com', { encodedQueryParams: true })
    .persist()
    .post(/^\/upload\/storage\/v1\/b\/[^/]+\/o$/)
    .query(true)
    .reply(function (uri: string, body: nock.Body) {
      const [bucket] = extractFromUri(uri, [5]);
      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      const fileName = decodeURIComponent(parsedUri.searchParams.get('name'));
      const uploadType = parsedUri.searchParams.get('uploadType');
      const uploadId = parsedUri.searchParams.get('upload_id');
      const location = `https://storage.googleapis.com${this.req.path}&upload_id=${encodeURIComponent(fileName)}`;
      if (uploadType === 'resumable' && !uploadId) {
        saveMetadata(bucket, fileName, body);
        return [200, {}, { 'X-GUploader-UploadID': parsedUri.searchParams.get('name'), Location: location }];
      }
    });

  nock('https://storage.googleapis.com', { encodedQueryParams: true })
    .persist()
    .put(/^\/upload\/storage\/v1\/b\/[^/]+\/o$/)
    .query(true)
    .reply(200, function (uri: string, body: nock.Body, cb) {
      const [bucket] = extractFromUri(uri, [5]);
      const bucketPath =
        (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';

      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      const fileName = decodeURIComponent(parsedUri.searchParams.get('name'));
      const uploadType = parsedUri.searchParams.get('uploadType');
      const uploadId = parsedUri.searchParams.get('upload_id');
      if (uploadType === 'resumable' && uploadId) {
        const filePath = bucketPath + fileName;
        const splitPath = filePath.split('/');
        splitPath.pop();
        fs.mkdirSync(splitPath.join('/'), { recursive: true });
        fs.writeFileSync(filePath, typeof body === 'string' ? body : JSON.stringify(body));
        getFileAsGcpObject(bucket, filePath).then((obj: GcpObject) => cb(null, obj));
      }
    });
}
