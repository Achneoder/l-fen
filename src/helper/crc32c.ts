const crc = require('fast-crc32c');
import * as fs from 'fs';

/**
 * Calculate the CRC32C string for a file.
 * @param filePath
 * @returns
 */
export function calculate(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let crc32c;
    fs.createReadStream(filePath)
      .on('error', (err) => reject(err))
      .on('data', function (chunk) {
        crc32c = crc.calculate(chunk, crc32c || 0);
      })
      .on('end', function () {
        resolve(Buffer.from([crc32c]).toString('base64'));
      });
  });
}
