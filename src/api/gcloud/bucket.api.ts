import { GcpObject, ObjectListQuery } from '../../types/gcloud.interface';
import { config } from '../../service/bootloader';
import * as glob from 'glob';
import * as fs from 'fs';
import { Stats } from 'fs';
import nock from 'nock';
import { getMetadata, saveMetadata } from '../metadata';
import { URL } from 'url';
import * as md5File from 'md5-file';
import { calculate } from '../../helper/crc32c';

export async function list(bucket: string, query?: ObjectListQuery): Promise<Array<GcpObject>> {
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
  // mock listing files
  // see https://cloud.google.com/storage/docs/json_api/v1/objects/list
  nock('https://storage.googleapis.com', { encodedQueryParams: true })
    .persist()
    .get(/^\/storage\/v1\/b\/[^/]+\/o$/)
    .query(true)
    .reply(200, function (uri: string, body: nock.Body, cb) {
      const bucket = uri.replace('/storage/v1/b/', '').split('?')[0].slice(0, -2);
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
      // returns the patrh containing bucket and filename: ":bucket/o/:filename"
      const bucketAndFilename = uri.replace('/storage/v1/b/', '').split('?')[0];
      const bucket = bucketAndFilename.split('/o/')[0];
      const fileName = decodeURIComponent(bucketAndFilename.split('/o/')[1]);
      const bucketPath =
        (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';

      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      // ?alt=media indicates that the file should be returned as a stream
      if (parsedUri.searchParams.get('alt') === 'media') {
        cb(null, fs.readFileSync(bucketPath + fileName));
      } else {
        getFileAsGcpObject(bucket, bucketPath + fileName).then((obj: GcpObject) => {
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
      // returns the patrh containing bucket and filename: ":bucket/o/:filename"
      const bucketAndFilename = uri.replace('/upload/storage/v1/b/', '').split('?')[0];
      const bucket = bucketAndFilename.split('/o')[0];
      console.log('::::::::::::::::::::::::::::::::::::::::::::::::');

      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      const fileName = decodeURIComponent(parsedUri.searchParams.get('name'));
      const uploadType = parsedUri.searchParams.get('uploadType');
      const uploadId = parsedUri.searchParams.get('upload_id');
      const location = `https://storage.googleapis.com${this.req.path}&upload_id=${encodeURIComponent(fileName)}`;
      console.log('location', location);
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
      // returns the patrh containing bucket and filename: ":bucket/o/:filename"
      const bucketAndFilename = uri.replace('/upload/storage/v1/b/', '').split('?')[0];
      const bucket = bucketAndFilename.split('/o')[0];
      const bucketPath =
        (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';

      const parsedUri = new URL(this.req.path, 'https://storage.googleapis.com');
      const fileName = decodeURIComponent(parsedUri.searchParams.get('name'));
      const uploadType = parsedUri.searchParams.get('uploadType');
      const uploadId = parsedUri.searchParams.get('upload_id');
      console.log('upload to', bucket + '/' + fileName);
      if (uploadType === 'resumable' && uploadId) {
        console.log(body);
        const filePath = bucketPath + fileName;
        const splitPath = filePath.split('/');
        splitPath.pop();
        fs.mkdirSync(splitPath.join('/'), { recursive: true });
        fs.writeFileSync(filePath, typeof body === 'string' ? body : JSON.stringify(body));
        getFileAsGcpObject(bucket, filePath).then((obj: GcpObject) => cb(null, obj));
      }
    });

  // mock the auth api
  nock('https://www.googleapis.com', { encodedQueryParams: true })
    .persist()
    .post('/oauth2/v4/token', () => true)
    .reply(200, () => {
      return {};
    });

  // nock.recorder.rec();
}
