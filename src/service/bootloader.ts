import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BootloaderArgs } from '../types/bootloader-args.interface';
import { ServiceConfig } from '../types/config.interface';
import { getConfig } from '../parser';
import { mockEndoints as mockBucketEndpoints } from '../api/gcloud/bucket.api';
import { BucketEvent } from '../types/gcloud.interface';
import { Provider } from '../types/provider.enum';
import { TriggerType } from '../types/trigger-type.enum';
import { HttpServiceRequest } from '../types/service-event.interface';
import { Request } from 'express';
import { FunctionResponse, FunctionResponseCallback } from '../helper/function-response';
import { FunctionRequest } from '../helper/function-request';

async function bootService() {
  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;
  console.log('executing with args', JSON.stringify(argv));

  const config = getConfig(argv.config);
  const serviceConfig = config.services.find((service: ServiceConfig) => service.name === argv.name);
  // mock all endpoints used by google-cloud
  mockBucketEndpoints();

  if (serviceConfig.triggerType === TriggerType.BUCKET) {
    await bootBucketService(argv, serviceConfig);
  }
}

async function bootHttpService(argv: BootloaderArgs, serviceConfig: ServiceConfig): Promise<void> {
  const event: HttpServiceRequest = JSON.parse(argv.event);
  const responseCallback: FunctionResponseCallback = (response: FunctionResponse) => {
    console.log(
      JSON.stringify({
        headers: response.headers,
        body: response.body,
        status: response.status
      })
    );
  };

  const functionRequest = new FunctionRequest(event);
  const functionResponse = new FunctionResponse(responseCallback);

  const file = require(argv.path);
  const entryPoint = file[argv.entryPoint];

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (serviceConfig.provider === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './assets/gcp_service_account.json';
  }

  await entryPoint(functionRequest, functionResponse);
}

async function bootBucketService(argv: BootloaderArgs, serviceConfig: ServiceConfig): Promise<unknown> {
  const event: BucketEvent = JSON.parse(argv.event);

  const file = require(argv.path);
  const entryPoint = file[argv.entryPoint];

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (serviceConfig.provider === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './assets/gcp_service_account.json';
  }
  // to make sure that bootBucketService returns a Promise, we call await on the entryPoint, even if it does not return a Promise
  return await entryPoint(event);
}

bootService().catch((err) => {
  console.error(err);
});
