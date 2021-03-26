import * as fs from 'fs';
import { getConfig } from '../parser';

export const fenMetadataFolder = '.__fen';

function getSanitizedFilePath(bucket: string, fileName: string): string {
  const config = getConfig();
  return `${
    config.bucketLocation.endsWith('/') ? config.bucketLocation : config.bucketLocation + '/'
  }${fenMetadataFolder}/${bucket}/${fileName}`;
}

/**
 * Metadata for files are stored in a special folder in the bucket location.
 * Each metadata file has the same path and name but is located inside this metadata folder and only contains the metadata as json.
 * @param bucket
 * @param fileName
 * @returns
 */
export function getMetadata(bucket: string, fileName: string): Record<string, unknown> {
  const path = getSanitizedFilePath(bucket, fileName);
  return JSON.parse(fs.readFileSync(path).toString());
}

/**
 * Save metadata.
 * @param bucket
 * @param fileName
 * @param content
 */
export function saveMetadata(bucket: string, fileName: string, content: string | Record<string, unknown>): void {
  const path = getSanitizedFilePath(bucket, fileName);
  const splitPath = path.split('/');
  splitPath.pop();
  fs.mkdirSync(splitPath.join('/'), { recursive: true });
  fs.writeFileSync(path, typeof content === 'string' ? content : JSON.stringify(content));
}
