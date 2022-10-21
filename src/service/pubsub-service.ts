import { PubSubFunctionConfig } from '../types/config.interface';
import { PubSubServiceEvent } from '../types/service-event.interface';
import { Service } from './service.abstract';
import path from 'path';
import { spawn } from 'child_process';

export class PubSubService extends Service<PubSubServiceEvent, void> {
  public async exec(event: PubSubServiceEvent): Promise<void> {
    const args: Array<string> = [
      './lib/service/bootloader.js',
      '--event',
      JSON.stringify(event),
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
  public canBeExecuted(event: PubSubServiceEvent): boolean {
    console.log(`${(<PubSubFunctionConfig>this.serviceConfig.triggerConfig).topic} === ${event.topic}`);
    return (<PubSubFunctionConfig>this.serviceConfig.triggerConfig).topic === event.topic;
  }
}
