import chokidar from 'chokidar';
import express, { Request, Response } from 'express';
import fs from 'fs';
import { resolve } from 'path';
import { fenMetadataFolder } from './api/metadata';
import { Logger } from './helper/logger';
import { getConfig } from './parser';
import { BucketService } from './service/bucket-service';
import { HttpService } from './service/http-service';
import { PubSubService } from './service/pubsub-service';
import { ServiceCollection } from './service/service-collection';
import { ServiceConfig } from './types/config.interface';
import { Provider } from './types/provider.enum';
import { BucketServiceEvent, HttpServiceRequest, HttpServiceResponse } from './types/service-event.interface';
import { TriggerEvent } from './types/trigger-event.enum';
import { TriggerType } from './types/trigger-type.enum';

function exec() {
  const logger = Logger.getLogger();
  const config = getConfig();

  if (config.provider.name === Provider.GCP) {
    const serviceAccountFile = require('../assets/gcp_service_account.json');
    fs.mkdirSync('./.fen', { recursive: true });
    fs.writeFileSync(
      '.fen/gcp_service_account.json',
      JSON.stringify({ ...serviceAccountFile, project_id: config.provider.project })
    );
  }

  const bucketServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.BUCKET)
    .map((service: ServiceConfig) => new BucketService(service, config.grpcProxyPort));

  const httpServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.HTTP)
    .map((service: ServiceConfig) => new HttpService(service, config.grpcProxyPort));

  const pubSubServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.PUBSUB)
    .map((service: ServiceConfig) => new PubSubService(service, config.grpcProxyPort));

  ServiceCollection.bucketServices.push(...bucketServices);
  ServiceCollection.httpServices.push(...httpServices);
  ServiceCollection.pubSubServices.push(...pubSubServices);

  if (bucketServices.length) {
    // Initialize watcher.
    logger.info('------- initializing file watcher in dir %s -------', config.storageDir, { label: 'exec' });
    const watcher = chokidar.watch(config.storageDir, {
      ignored: `${config.storageDir}/${fenMetadataFolder}/**/*`,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: true
    });
    watcher.on('add', (path: string) => {
      if (process.platform === 'win32') {
        path = path.replace(/\\/g, '/');
      }
      logger.debug('filewrite detected for file %s', path, { label: 'exec' });
      const event: BucketServiceEvent = createBucketServiceEvent(path, config.storageDir, TriggerEvent.WRITE);
      bucketServices
        .filter((service: BucketService) => service.canBeExecuted(event))
        .forEach((service: BucketService) => service.exec(event).catch((err) => logger.error(err, { label: 'exec' })));
    });
    // .on('change', path => log(`File ${path} has been changed`))
    // .on('unlink', path => log(`File ${path} has been removed`));
  }

  if (httpServices.length) {
    const app = express();
    const port = config.httpProxyPort || 8080;
    const bodyParser = require('body-parser');
    logger.verbose('starting fen proxy on http://localhost:%s', port, { label: 'exec' });

    app.use(bodyParser.json());
    app.use((req: Request, res: Response) => {
      const path = '/' + req.url.split('/').slice(2).join('/');
      const serviceRequest: HttpServiceRequest = {
        body: req.body,
        headers: req.headers as Record<string, string>,
        method: req.method,
        query: req.query as Record<string, string>,
        url: req.url,
        //FIXME: separate path from url
        path
      };
      const targetHttpFunction = httpServices.filter((service: HttpService) => service.canBeExecuted(serviceRequest));
      if (!targetHttpFunction.length) {
        logger.error('no endpoint function defined for %s - path %s', req.url, serviceRequest.path, { label: 'exec' });
      } else if (targetHttpFunction.length > 1) {
        logger.error('more than one endpoint functions defined for %s', req.url, { label: 'exec' });
      } else {
        targetHttpFunction[0]
          .exec(serviceRequest)
          .then((response: HttpServiceResponse) => {
            const expressResponse = res.status(response.status);
            Object.entries(response.headers).forEach(([header, value]) => expressResponse.setHeader(header, value));
            expressResponse.send(response.body);
          })
          .catch((err) => {
            logger.error(err, { label: 'exec' });
          });
      }
    });

    app.listen(port, () => {
      logger.info('------- http proxy listening on http://localhost:%s -------', port, { label: 'exec' });
    });
  }
}

function createBucketServiceEvent(
  fileEventsPath: string,
  storageDir: string,
  eventType: TriggerEvent
): BucketServiceEvent {
  if (process.platform === 'win32') {
    fileEventsPath = fileEventsPath.replace(/\\/g, '/');
  }
  const resolvedFilePath = resolve(fileEventsPath);
  const resolvedstorageDir = resolve(storageDir);

  fileEventsPath = resolvedFilePath.split(resolvedstorageDir).pop();
  return {
    bucket: fileEventsPath.split('/')[1],
    name: fileEventsPath.split('/').slice(2).join('/'),
    eventType
  };
}

exec();
