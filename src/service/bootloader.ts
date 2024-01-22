#!/usr/bin/env node

import request from 'supertest';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { mockEndoints as mockAuthEndpoints } from '../api/gcloud/auth.api';
import { mockEndoints as mockBucketEndpoints } from '../api/gcloud/bucket.api';
import { FunctionRequest } from '../helper/function-request';
import { Logger } from '../helper/logger';
import { getConfig } from '../parser';
import { BootloaderArgs } from '../types/bootloader-args.interface';
import { ServiceConfig } from '../types/config.interface';
import { BucketFunctionHandler, PubSubFunctionHandler } from '../types/entrypoint.type';
import { BucketEvent, PubSubEvent } from '../types/gcloud.interface';
import { Provider } from '../types/provider.enum';
import { HttpServiceRequest } from '../types/service-event.interface';
import { TriggerType } from '../types/trigger-type.enum';
import { ExtensionCollector } from './extension-collector';
const express = require('express');
const bodyParser = require('body-parser');

async function bootService() {
  const logger = Logger.getLogger();

  //@ts-ignore
  const argv: BootloaderArgs = yargs(hideBin(process.argv)).argv;
  logger.verbose('executing with args %s', JSON.stringify(argv), { lable: 'bootService' });

  const config = getConfig(argv.config);
  const serviceConfig = config.services.find((service: ServiceConfig) => service.name === argv.name);
  logger.verbose(JSON.stringify(serviceConfig), { label: 'bootService' });
  // mock all endpoints used by google-cloud
  mockBucketEndpoints();
  mockAuthEndpoints();

  // load all extensions
  await new ExtensionCollector(config).executeExtensions();

  logger.debug(`loading service with type ${serviceConfig.triggerType}`, { label: 'bootService' });
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

  const logger = Logger.getLogger();
  const event: HttpServiceRequest = JSON.parse(argv.base64 ? Buffer.from(argv.event, 'base64').toString() : argv.event);
  const functionRequest = new FunctionRequest(event);

  const file = require(argv.path);
  const app = express();
  app.use(bodyParser.json());
  app.use(file[argv.entryPoint]);
  // const entryPoint: HttpFunctionHandler = app;

  process.env = { ...process.env, ...(serviceConfig.envVars || {}) };
  logger.debug('set env vars %s', JSON.stringify(process.env), 'bootHttpService');

  if (getConfig().provider.name === Provider.GCP) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './.fen/gcp_service_account.json';
  }
  logger.debug('preparing http service %s', argv.path, { label: 'bootHttpService' });
  const testRequest: request.SuperTest<request.Test> = request(app);

  let scope: request.Test;
  let requestData: { type: 'QUERY' | 'BODY'; data: Record<string, unknown> };
  switch (functionRequest.method.toUpperCase()) {
    case 'GET':
      scope = testRequest.get(event.path);
      requestData = {
        type: 'QUERY',
        data: functionRequest.query
      };
      break;
    case 'POST':
      scope = testRequest.post(event.path);
      requestData = {
        type: 'BODY',
        data: functionRequest.body
      };
      break;
    case 'DELETE':
      scope = testRequest.delete(event.path);
      requestData = {
        type: 'QUERY',
        data: functionRequest.query
      };
      break;
    case 'PUT':
      scope = testRequest.put(event.path);
      requestData = {
        type: 'BODY',
        data: functionRequest.body
      };
      break;
    case 'PATCH':
      scope = testRequest.patch(event.path);
      requestData = {
        type: 'BODY',
        data: functionRequest.body
      };
      break;
    default:
      throw new Error('HTTP method not yet implemented');
  }
  logger.debug(
    'sending %s request with %s %s',
    functionRequest.method.toUpperCase(),
    requestData.type,
    JSON.stringify(requestData.data),
    { label: 'bootHttpService' }
  );
  Object.values(functionRequest.headers).forEach(([headerKey, headerValue]) => {
    scope.set(headerKey, headerValue);
    logger.debug(
      'set header %s = %s for %s',
      headerKey,
      headerValue,
      `${functionRequest.method.toUpperCase()} ${serviceConfig.name}/${event.path}`
    );
  });

  let response: request.Response;
  if (requestData.type === 'QUERY') {
    response = await scope.query(requestData.data);
  } else {
    response = await scope.send(requestData.data);
  }
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
