import { Service } from './service.abstract';
import { HttpServiceRequest, HttpServiceResponse } from '../types/service-event.interface';
import { spawn } from 'child_process';
import path from 'path';
import { Logger } from '../helper/logger';

export class HttpService extends Service<HttpServiceRequest, HttpServiceResponse> {
  private readonly logs: Array<string> = [];

  public exec(event: HttpServiceRequest): Promise<HttpServiceResponse> {
    const logger = Logger.getLogger();
    return new Promise((resolve, reject) => {
      const args: Array<string> = [
        './lib/service/bootloader.js',
        '--event',
        Buffer.from(JSON.stringify(event)).toString('base64'),
        '--base64',
        'true',
        '--path',
        path.resolve(this.serviceConfig.path),
        '--entryPoint',
        this.serviceConfig.entryPoint,
        '--name',
        this.serviceConfig.name
      ];
      logger.info(`-- executing %s --`, this.serviceConfig.name, { label: 'HttpService:exec' });
      const spawnedProcess = spawn('node', args, {
        env: {
          ...process.env,
          ...this.serviceConfig.envVars
        }
      });
      spawnedProcess.stdout.on('data', (data) => {
        logger.verbose(data.toString(), { label: 'HttpService:exec' });
        this.logs.push(data.toString());
      });
      spawnedProcess.stderr.on('data', (data) => this.logs.push(data.toString()));
      spawnedProcess.on('close', () => {
        const lastLog = this.logs[this.logs.length - 1];
        if (this.logs.length > 0) {
          try {
            const response: HttpServiceResponse = JSON.parse(lastLog);
            resolve(response);
          } catch (err) {
            reject(`last log was no JSON: ${lastLog}`);
          }
        } else {
          reject(`${this.serviceConfig.name} failed - no response`);
        }
      });
    });
  }

  public canBeExecuted(event: HttpServiceRequest): boolean {
    return event.url.endsWith(this.serviceConfig.name);
  }
}
