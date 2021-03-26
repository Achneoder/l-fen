import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BootloaderArgs } from '../types/bootloader-args.interface';
import { ServiceConfig } from '../types/config.interface';
import { getConfig } from '../parser';
import { mockEndoints } from '../api/gcloud/bucket.api';
import { BucketEvent } from '../types/gcloud.interface';
import { Provider } from '../types/provider.enum';

async function bootService() {
  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;
  console.log('executing with args', JSON.stringify(argv));

  const config = getConfig(argv.config);
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
  console.log(argv.name, 'finished');
}

bootService().catch((err) => {
  console.error(err);
});
