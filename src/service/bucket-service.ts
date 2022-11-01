import { spawn } from 'child_process';
import path from 'path';
import { Logger } from '../helper/logger';
import { BucketFunctionConfig } from '../types/config.interface';
import { BucketEvent } from '../types/gcloud.interface';
import { BucketServiceEvent } from '../types/service-event.interface';
import { TriggerType } from '../types/trigger-type.enum';
import { Service } from './service.abstract';

export class BucketService extends Service<BucketServiceEvent, void> {
  public async exec(event: BucketServiceEvent): Promise<void> {
    const logger = Logger.getLogger();
    const bucketEvent: BucketEvent = { name: event.name, bucket: event.bucket };
    const args: Array<string> = [
      `${__dirname}/bootloader.js`,
      '--event',
      JSON.stringify(bucketEvent),
      '--path',
      path.resolve(this.serviceConfig.path),
      '--entryPoint',
      this.serviceConfig.entryPoint,
      '--name',
      this.serviceConfig.name
    ];
    logger.info(`-- executing %s --`, this.serviceConfig.name, { label: 'BucketService:exec' });
    spawn('node', args, {
      env: {
        ...process.env,
        ...this.serviceConfig.envVars
      }
    })
      .stdout.on('data', (data) => logger.info(data.toString(), { label: 'BucketService:exec' }))
      .on('error', (err) => logger.error(err));
  }

  public canBeExecuted(event: BucketServiceEvent): boolean {
    const logger = Logger.getLogger();
    const triggerConfig = this.serviceConfig.triggerConfig as BucketFunctionConfig;
    logger.debug(
      '%s: TriggerType.Bucket: %s;  reacts on event %s: %s; listens on bucket %s: %s',
      this.serviceConfig.name,
      this.serviceConfig.triggerType === TriggerType.BUCKET,
      event.eventType,
      (triggerConfig.events || []).includes(event.eventType),
      event.bucket,
      triggerConfig.targetBucket === event.bucket,
      { label: 'BucketService:canBeExecuted' }
    );
    return (
      this.serviceConfig.triggerType === TriggerType.BUCKET &&
      (triggerConfig.events || []).includes(event.eventType) &&
      triggerConfig.targetBucket === event.bucket
    );
  }
}
