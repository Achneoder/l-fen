import { spawn } from 'child_process';
import path, { parse } from 'path';
import { Logger } from '../helper/logger';
import { HttpServiceRequest, HttpServiceResponse } from '../types/service-event.interface';
import { Service } from './service.abstract';

export class HttpService extends Service<HttpServiceRequest, HttpServiceResponse> {
  private readonly logs: Array<string> = [];

  public exec(event: HttpServiceRequest): Promise<HttpServiceResponse> {
    const logger = Logger.getLogger();
    return new Promise((resolve, reject) => {
      const args: Array<string> = [
        `${__dirname}/bootloader.js`,
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
        const lastLog = this.logs.find((log: string) => {
          try {
            const parsedLog = JSON.parse(log);
            return parsedLog.isFunctionResponse;
          } catch (error) {
            return false;
          }
        });
        if (lastLog) {
          const response: HttpServiceResponse = JSON.parse(lastLog);
          resolve(response);
        } else {
          reject(`${this.serviceConfig.name} failed - no response`);
        }
      });
    });
  }

  public canBeExecuted(event: HttpServiceRequest): boolean {
    // checks if the first path segment matches the services name
    return event.url.startsWith('/' + this.serviceConfig.name);
  }
}
