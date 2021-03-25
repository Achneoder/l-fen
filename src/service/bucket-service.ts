import { Service } from './service.abstract';
import { TriggerType } from '../types/trigger-type.enum';
import { BucketServiceEvent } from '../types/service-event.interface';
import { spawn } from 'child_process';
import { BucketEvent } from '../types/gcloud.interface';

export class BucketService extends Service<BucketServiceEvent> {
  public exec(event: BucketServiceEvent): void {
    if (
      this.serviceConfig.triggerType === TriggerType.BUCKET &&
      (this.serviceConfig.events || []).includes(event.eventType)
    ) {
      const bucketEvent: BucketEvent = { name: event.name, bucket: event.bucket };
      const args: Array<string> = [
        './lib/service/bootloader.js',
        '--event',
        JSON.stringify(bucketEvent),
        '--path',
        this.serviceConfig.path,
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
  }
}
