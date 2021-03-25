import * as fs from 'fs';
import {Config} from "./types/config.interface";

let config: Config;

/**
 *
 * @param file
 * @param forceReload
 */
export function getConfig(file = '.fenrc.json', forceReload = false): Config {
  if (!config || forceReload) {
    config = JSON.parse(fs.readFileSync(file).toString())
  }
  return config;
}