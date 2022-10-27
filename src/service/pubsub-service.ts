import { spawn } from 'child_process';
import path from 'path';
import { Logger } from '../helper/logger';
import { PubSubFunctionConfig } from '../types/config.interface';
import { PubSubServiceEvent } from '../types/service-event.interface';
import { Service } from './service.abstract';

export class PubSubService extends Service<PubSubServiceEvent, void> {
  public async exec(event: PubSubServiceEvent): Promise<void> {
    const logger = Logger.getLogger();

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
    logger.info(`-- executing %s --`, this.serviceConfig.name, { label: 'PubSubService:exec' });
    spawn('node', args, {
      env: {
        ...process.env,
        ...this.serviceConfig.envVars
      }
    })
      .stdout.on('data', (data) => logger.verbose(data.toString(), { label: 'PubSubService:exec' }))
      .on('error', (err) => logger.error(err));
  }

  public canBeExecuted(event: PubSubServiceEvent): boolean {
    Logger.getLogger().debug(`${(<PubSubFunctionConfig>this.serviceConfig.triggerConfig).topic} === ${event.topic}`);
    return (<PubSubFunctionConfig>this.serviceConfig.triggerConfig).topic === event.topic;
  }
}
