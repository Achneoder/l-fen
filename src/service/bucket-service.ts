import { Service } from './service.abstract';
import { TriggerType } from '../types/trigger-type.enum';
import { BucketServiceEvent } from '../types/service-event.interface';
import { spawn } from 'child_process';
import { BucketEvent } from '../types/gcloud.interface';
import { BucketFunctionConfig } from '../types/config.interface';
import path from 'path';

export class BucketService extends Service<BucketServiceEvent, void> {
  public async exec(event: BucketServiceEvent): Promise<void> {
    const bucketEvent: BucketEvent = { name: event.name, bucket: event.bucket };
    const args: Array<string> = [
      './lib/service/bootloader.js',
      '--event',
      JSON.stringify(bucketEvent),
      '--path',
      path.resolve(this.serviceConfig.path),
      '--entryPoint',
      this.serviceConfig.entryPoint,
      '--name',
      this.serviceConfig.name
    ];
    console.log(`-- executing ${this.serviceConfig.name} --`);
    spawn('node', args, {
      env: {
        ...process.env,
        ...this.serviceConfig.envVars
      }
    })
      .stdout.on('data', (data) => console.log(data.toString()))
      .on('error', (err) => console.log(err));
  }

  public canBeExecuted(event: BucketServiceEvent): boolean {
    const triggerConfig = this.serviceConfig.triggerConfig as BucketFunctionConfig;
    return (
      this.serviceConfig.triggerType === TriggerType.BUCKET &&
      (triggerConfig.events || []).includes(event.eventType) &&
      triggerConfig.targetBucket === event.bucket
    );
  }
}
