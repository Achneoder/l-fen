import * as yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {BootloaderArgs} from "../types/bootloader-args.interface";
import {Config} from "../types/config.interface";
import {parseConfig} from "../parser";
import {list, nockEndoints} from "../api/gcloud/bucket.api";
import {BucketEvent} from "../types/gcloud.interface";

const nock = require('nock');
export let config: Config;

async function bootService() {
  nock.recorder.rec();

  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;

  config  = parseConfig(argv.config);


  const event: BucketEvent = JSON.parse(argv.event);

  // list(event.bucket, {prefix: event.name.split('/')[0]});
  nockEndoints();
  const file = require(argv.path);
  const entryPoint = file[argv.entryPoint];
  await entryPoint(event);
  return argv;
}

bootService().then((args: BootloaderArgs) => {
  console.log('executed', args);
});