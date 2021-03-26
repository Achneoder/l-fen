import { Service } from './service.abstract';
import { HttpServiceRequest, HttpServiceResponse } from '../types/service-event.interface';
import { spawn } from 'child_process';
import path from 'path';

export class HttpService extends Service<HttpServiceRequest, HttpServiceResponse> {
  private readonly logs: Array<string> = [];

  public exec(event: HttpServiceRequest): Promise<HttpServiceResponse> {
    return new Promise((resolve, reject) => {
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
      const spawnedProcess = spawn('node', args, {
        env: {
          ...process.env,
          ...this.serviceConfig.envVars
        }
      });
      spawnedProcess.stdout.on('data', (data) => this.logs.push(data.toString()));
      spawnedProcess.stderr.on('data', (data) => this.logs.push(data.toString()));
      spawnedProcess.on('close', () => {
        if (this.logs.length > 0) {
          const response: HttpServiceResponse = JSON.parse(this.logs[this.logs.length - 1]);
          resolve(response);
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
