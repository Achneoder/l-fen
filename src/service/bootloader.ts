import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BootloaderArgs } from '../types/bootloader-args.interface';
import { Config, ServiceConfig } from '../types/config.interface';
import { parseConfig } from '../parser';
import { mockEndoints } from '../api/gcloud/bucket.api';
import { BucketEvent } from '../types/gcloud.interface';
import { Provider } from '../types/provider.enum';

export let config: Config;

async function bootService() {
  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;

  config = parseConfig(argv.config);
  const event: BucketEvent = JSON.parse(argv.event);

  mockEndoints();

  const file = require(argv.path);
  const entryPoint = file[argv.entryPoint];
  const serviceConfig = config.services.find((service: ServiceConfig) => service.name === argv.name);

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (serviceConfig.provider === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './assets/gcp_service_account.json';
  }
  await entryPoint(event);
  return argv;
}

bootService()
  .then((args: BootloaderArgs) => {
    console.log('executed', args);
  })
  .catch((err) => {
    console.error(err);
  });
