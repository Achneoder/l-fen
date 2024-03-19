import { CRC32C } from '@google-cloud/storage';

/**
 * Calculate the CRC32C string for a file.
 * @param filePath
 * @returns
 */
export function calculate(filePath: string): Promise<string> {
  return CRC32C.fromFile(filePath).then((crc: CRC32C) => crc.toString());
}
