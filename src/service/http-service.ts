import { spawn } from 'child_process';
import path from 'path';
import { Logger } from '../helper/logger';
import { HttpServiceRequest, HttpServiceResponse } from '../types/service-event.interface';
import { Service } from './service.abstract';
import { v4 } from 'uuid';

export class HttpService extends Service<HttpServiceRequest, HttpServiceResponse> {
  private readonly logs: Record<string, Array<string>> = {};

  public exec(event: HttpServiceRequest): Promise<HttpServiceResponse> {
    const functionUid = v4();
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
        this.addToLog(functionUid, data.toString());
        if (this.isHttpResponse(data.toString())) {
          spawnedProcess.kill();
        }
      });
      spawnedProcess.stderr.on('data', (data) => this.addToLog(functionUid, data.toString()));
      spawnedProcess.on('close', () => {
        logger.info('-- function %s closed --', this.serviceConfig.name, { label: 'HttpService:exec' });
        const lastLog = this.logs[functionUid]?.find((log: string) => {
          try {
            return this.isHttpResponse(log);
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

  private addToLog(uid: string, log: string): void {
    if (this.logs[uid]) {
      this.logs[uid] = [];
    }
    this.logs[uid].push(log);
  }

  private isHttpResponse(log: string | HttpServiceResponse): boolean {
    if (typeof log === 'string') {
      try {
        const parsedLog = JSON.parse(log);
        return parsedLog.isFunctionResponse;
      } catch (error) {
        return false;
      }
    } else {
      return log.isFunctionResponse;
    }
  }

  public canBeExecuted(event: HttpServiceRequest): boolean {
    // checks if the first path segment matches the services name
    return event.url.startsWith('/' + this.serviceConfig.name);
  }
}
