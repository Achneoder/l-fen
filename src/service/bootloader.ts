import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BootloaderArgs } from '../types/bootloader-args.interface';
import { ServiceConfig } from '../types/config.interface';
import { getConfig } from '../parser';
import { mockEndoints as mockBucketEndpoints } from '../api/gcloud/bucket.api';
import { mockEndoints as mockAuthEndpoints } from '../api/gcloud/auth.api';
import { BucketEvent, PubSubEvent } from '../types/gcloud.interface';
import { Provider } from '../types/provider.enum';
import { TriggerType } from '../types/trigger-type.enum';
import { HttpServiceRequest } from '../types/service-event.interface';
import { FunctionRequest } from '../helper/function-request';
import { BucketFunctionHandler, HttpFunctionHandler, PubSubFunctionHandler } from '../types/entrypoint.type';
import request from 'supertest';
import { Logger } from '../helper/logger';

async function bootService() {
  const logger = Logger.getLogger();

  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;
  logger.verbose('executing with args %s', JSON.stringify(argv), { lable: 'bootService' });

  const config = getConfig(argv.config);
  const serviceConfig = config.services.find((service: ServiceConfig) => service.name === argv.name);
  // mock all endpoints used by google-cloud
  mockBucketEndpoints();
  mockAuthEndpoints();

  if (serviceConfig.triggerType === TriggerType.BUCKET) {
    await bootBucketService(argv, serviceConfig);
  }

  if (serviceConfig.triggerType === TriggerType.HTTP) {
    await bootHttpService(argv, serviceConfig);
  }

  if (serviceConfig.triggerType === TriggerType.PUBSUB) {
    await bootPubSubService(argv, serviceConfig);
  }
}

async function bootHttpService(argv: BootloaderArgs, serviceConfig: ServiceConfig): Promise<void> {
  // nock.recorder.rec();

  const event: HttpServiceRequest = JSON.parse(argv.base64 ? Buffer.from(argv.event, 'base64').toString() : argv.event);
  const functionRequest = new FunctionRequest(event);

  const file = require(argv.path);
  const entryPoint: HttpFunctionHandler = file[argv.entryPoint];

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (getConfig().provider.name === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './.fen/gcp_service_account.json';
  }
  const testRequest: request.SuperTest<request.Test> = request(entryPoint);

  let scope: request.Test;
  switch (functionRequest.method.toUpperCase()) {
    case 'GET':
      scope = testRequest.get(event.path).query(functionRequest.query);
      break;
    case 'POST':
      scope = testRequest.post(event.path).send(functionRequest.body);
      break;
    case 'DELETE':
      scope = testRequest.delete(event.path).query(functionRequest.body);
      break;
    case 'PUT':
      scope = testRequest.put(event.path).send(functionRequest.body);
      break;
    case 'PATCH':
      scope = testRequest.patch(event.path).send(functionRequest.body);
      break;
    default:
      throw new Error('HTTP method not yet implemented');
  }
  Object.values(functionRequest.headers).forEach(([headerKey, headerValue]) => {
    scope.set(headerKey, headerValue);
  });

  //@ts-ignore
  const response: request.Response = await scope;
  // we need the plain JSON as a string in stdout, so we use the good ol' console.log
  console.log(
    JSON.stringify({
      headers: response.headers,
      body: response.body,
      status: response.statusCode
    })
  );
}

async function bootBucketService(argv: BootloaderArgs, serviceConfig: ServiceConfig): Promise<unknown> {
  const event: BucketEvent = JSON.parse(argv.base64 ? Buffer.from(argv.event, 'base64').toString() : argv.event);

  const file = require(argv.path);
  const entryPoint: BucketFunctionHandler = file[argv.entryPoint];

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (getConfig().provider.name === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './.fen/gcp_service_account.json';
  }
  // to make sure that bootBucketService returns a Promise, we call await on the entryPoint, even if it does not return a Promise
  return await entryPoint(event);
}

async function bootPubSubService(argv: BootloaderArgs, serviceConfig: ServiceConfig): Promise<unknown> {
  const event: PubSubEvent = JSON.parse(argv.base64 ? Buffer.from(argv.event, 'base64').toString() : argv.event);

  const file = require(argv.path);
  const entryPoint: PubSubFunctionHandler = file[argv.entryPoint];

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };

  if (getConfig().provider.name === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './.fen/gcp_service_account.json';
  }
  // to make sure that bootBucketService returns a Promise, we call await on the entryPoint, even if it does not return a Promise
  return await entryPoint(event);
}

bootService().catch((err) => {
  Logger.getLogger().error(err);
});
