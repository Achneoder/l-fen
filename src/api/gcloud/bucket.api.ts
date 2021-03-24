import {ObjectListQuery} from "../../types/gcloud.interface";
import {config} from "../../service/bootloader";
import * as glob from 'glob';
import * as fs from 'fs';
import {Stats} from "fs";
const nock = require('nock');

export function list(bucket: string, query?: ObjectListQuery) {
  const bucketPath = (config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/') + bucket + '/';
  const pathGlob = `${bucketPath}${query?.prefix ? query.prefix + '/' : ''}**/*`;
  const files = glob.sync(pathGlob)
    .map((file: string) => {
      const stats: Stats = fs.statSync(file);
      const fileName = file.replace(bucketPath, '');
      return {
        kind: "storage#object",
        id: fileName,
        selfLink: file,
        name: fileName,
        bucket,
        timeCreated: stats.birthtime.toISOString(),
        updated: stats.mtime.toISOString(),
        size: stats.size
      }
    });
  console.log(files);
  return files;
}


export function nockEndoints() {
  nock('https://storage.googleapis.com:443', {"encodedQueryParams":true})
    .get(/\/storage\/v1\/b\/[^\/]+\/o/)
    .query(true)
    .reply(200, function (uri: string) {
      const bucket = uri.replace('/storage/v1/b/', '').slice(0, -2);
      //@ts-ignore
      const files = list(bucket, this.req.query);
      return {
        kind: "storage#objects",
        items: files
      };
    });
}