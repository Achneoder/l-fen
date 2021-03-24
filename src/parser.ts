import * as fs from 'fs';
import {Config} from "./types/config.interface";

/**
 *
 * @param file
 */
export function parseConfig(file = '.fenrc.json'): Config {
    return JSON.parse(fs.readFileSync(file).toString())
}