import * as fs from 'fs';
import { Stats } from 'fs';
import { globSync } from 'glob';
import * as md5File from 'md5-file';
import nock from 'nock';
import { URL } from 'url';
import { calculate } from '../../helper/crc32c';
import { getConfig } from '../../parser';
import { GcpObject, ObjectListQuery } from '../../types/gcloud.interface';
import { getMetadata, saveMetadata } from '../metadata';

export async function list(bucket: string, query?: ObjectListQuery): Promise<Array<GcpObject>> {
  const config = getConfig();
  const bucketPath = (config.storageDir.endsWith('/') ? config.storageDir : config.storageDir + '/') + bucket + '/';
  const pathGlob = `${bucketPath}${query?.prefix ? query.prefix + '/' : ''}**/*`;
  const files = globSync(pathGlob)
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
    md5Hash: Buffer.from(md5File.sync(localFilePath)).toString('base64'),
    crc32c: await calculate(localFilePath),
    ...metadata
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
    .reply(function (uri: string, body: nock.Body, cb) {
      const [bucket, fileName] = extractFromUri(uri, [4, 6]);
      const decodedFileName = decodeURIComponent(fileName);
      const bucketPath = (config.storageDir.endsWith('/') ? config.storageDir : config.storageDir + '/') + bucket + '/';

      const completeFilePath = bucketPath + decodedFileName;
      const req = this.req;
      const parsedUri = new URL(req.path, 'https://storage.googleapis.com');

      if (!fs.existsSync(bucketPath)) {
        cb(null, [
          404,
          {
            error: {
              code: 404,
              message: 'The specified bucket does not exist.',
              errors: [
                {
                  message: 'The specified bucket does not exist.',
                  domain: 'global',
                  reason: 'notFound'
                }
              ]
            }
          }
        ]);
      } else if (!fs.existsSync(completeFilePath)) {
        cb(null, [
          404,
          {
            error: {
              code: 404,
              message: `No such object: ${bucket}/${decodedFileName}`,
              errors: [
                {
                  message: `No such object: ${bucket}/${decodedFileName}`,
                  domain: 'global',
                  reason: 'notFound'
                }
              ]
            }
          }
        ]);
      } else if (parsedUri.searchParams.get('alt') === 'media') {
        // ?alt=media indicates that the file should be returned as a stream
        calculate(completeFilePath).then((crc32cString: string) => {
          cb(null, [
            200,
            fs.readFileSync(completeFilePath),
            {
              // ?alt=media indicates that the file should be returned as a stream, if not, the meatadata are requested and no crc32c has to be calculated
              'x-goog-hash': `crc32c=0000${crc32cString}`
            }
          ]);
        });
      } else {
        getFileAsGcpObject(bucket, completeFilePath).then((obj: GcpObject) => {
          cb(null, [
            200,
            obj,
            {
              'x-goog-hash': `crc32c=`
            }
          ]);
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
      const bucketPath = (config.storageDir.endsWith('/') ? config.storageDir : config.storageDir + '/') + bucket + '/';

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
