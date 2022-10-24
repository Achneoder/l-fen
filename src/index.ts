import { getConfig } from './parser';
import chokidar from 'chokidar';
import { fenMetadataFolder } from './api/metadata';
import { ServiceConfig } from './types/config.interface';
import { TriggerType } from './types/trigger-type.enum';
import { BucketService } from './service/bucket-service';
import { BucketServiceEvent, HttpServiceRequest, HttpServiceResponse } from './types/service-event.interface';
import { TriggerEvent } from './types/trigger-event.enum';
import { HttpService } from './service/http-service';
import express, { Request, Response } from 'express';
import { Provider } from './types/provider.enum';
import fs from 'fs';
import { PubSubService } from './service/pubsub-service';
import { ServiceCollection } from './service/service-collection';
import { Logger } from './helper/logger';

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
    .map((service: ServiceConfig) => new BucketService(service));

  const httpServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.HTTP)
    .map((service: ServiceConfig) => new HttpService(service));

  const pubSubServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.PUBSUB)
    .map((service: ServiceConfig) => new PubSubService(service));

  ServiceCollection.bucketServices.push(...bucketServices);
  ServiceCollection.httpServices.push(...httpServices);
  ServiceCollection.pubSubServices.push(...pubSubServices);

  if (bucketServices.length) {
    // Initialize watcher.
    logger.info('------- initializing file watcher in dir %s -------', config.bucketLocation, { label: 'exec' });
    const watcher = chokidar.watch(config.bucketLocation, {
      ignored: `${config.bucketLocation}/${fenMetadataFolder}/**/*`,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: true
    });
    watcher.on('add', (path: string) => {
      logger.verbose('filewrite detected in bucket', path, { label: 'exec' });
      if (process.platform === 'win32') {
        path = path.replace(/\\/g, '/');
      }
      const event: BucketServiceEvent = {
        bucket: path.split('/')[1],
        name: path.split('/').slice(2).join('/'),
        eventType: TriggerEvent.WRITE
      };
      bucketServices
        .filter((service: BucketService) => service.canBeExecuted(event))
        .forEach((service: BucketService) => service.exec(event).catch((err) => logger.error(err, { label: 'exec' })));
    });
    // .on('change', path => log(`File ${path} has been changed`))
    // .on('unlink', path => log(`File ${path} has been removed`));
  }

  if (httpServices.length) {
    const app = express();
    const port = config.port;
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

exec();
