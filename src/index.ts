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

function exec() {
  const config = getConfig();

  const bucketServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.BUCKET)
    .map((service: ServiceConfig) => new BucketService(service));

  const httpServices = config.services
    .filter((service: ServiceConfig) => service.triggerType === TriggerType.HTTP)
    .map((service: ServiceConfig) => new HttpService(service));

  if (bucketServices.length) {
    // Initialize watcher.
    const watcher = chokidar.watch(config.bucketLocation, {
      ignored: `${config.bucketLocation}/${fenMetadataFolder}/**/*`,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: true
    });
    watcher.on('add', (path: string) => {
      const event: BucketServiceEvent = {
        bucket: path.split('/')[1],
        name: path.split('/').slice(2).join('/'),
        eventType: TriggerEvent.WRITE
      };

      bucketServices
        .filter((service: BucketService) => service.canBeExecuted(event))
        .forEach((service: BucketService) => service.exec(event).catch((err) => console.error(err)));
    });
    // .on('change', path => log(`File ${path} has been changed`))
    // .on('unlink', path => log(`File ${path} has been removed`));
  }

  if (httpServices.length) {
    const app = express();
    const port = config.port;

    console.log('starting fen proxy');

    app.use((req: Request, res: Response) => {
      const serviceRequest: HttpServiceRequest = {
        body: req.body,
        headers: req.headers as Record<string, string>,
        method: req.method,
        query: req.query as Record<string, string>,
        url: req.url
      };
      const targetHttpFunction = httpServices.filter((service: HttpService) => service.canBeExecuted(serviceRequest));
      if (!targetHttpFunction.length) {
        console.error(`no endpoint function defined for ${req.url}`);
      } else if (targetHttpFunction.length > 1) {
        console.error(`more then one endpoint functions defined for ${req.url}`);
      } else {
        targetHttpFunction[0]
          .exec(serviceRequest)
          .then((response: HttpServiceResponse) => {
            const expressResponse = res.status(response.status);
            Object.entries(response.headers).forEach(([header, value]) => expressResponse.setHeader(header, value));
            expressResponse.send(response.body);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });

    app.listen(port, () => {
      console.log(`fen listening at http://localhost:${port}`);
    });
  }
}

exec();
