import {getConfig} from "./parser";
import chokidar from 'chokidar';
import {fenMetadataFolder} from "./api/metadata";
import {ServiceConfig} from "./types/config.interface";
import {TriggerType} from "./types/trigger-type.enum";
import {BucketService} from "./service/bucket-service";
import {BucketServiceEvent} from "./types/service-event.interface";
import {TriggerEvent} from "./types/trigger-event.enum";

function exec() {
  const config = getConfig();
  console.log(config);

  const mappedBucketFunctions = config.services.filter((service: ServiceConfig) => service.triggerType === TriggerType.BUCKET)
    .map((service: ServiceConfig) => new BucketService(service));

  if(mappedBucketFunctions.length) {
    // Initialize watcher.
    const watcher = chokidar.watch(config.bucketLocation, {
      ignored: `${config.bucketLocation}/${fenMetadataFolder}/**/*`,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: true
    });
    watcher
      .on('add', (path: string) => {
        console.log(path);
        const event: BucketServiceEvent = {
          bucket: path.split('/')[1],
          name: path.split('/').slice(2).join('/'),
          eventType: TriggerEvent.WRITE
        }
        mappedBucketFunctions.forEach((service: BucketService) => service.exec(event));
      })
      // .on('change', path => log(`File ${path} has been changed`))
      // .on('unlink', path => log(`File ${path} has been removed`));
  }
}

exec();