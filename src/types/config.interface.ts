import { Provider } from './provider.enum';
import { TriggerEvent } from './trigger-event.enum';
import { TriggerType } from './trigger-type.enum';

export interface ServiceConfig {
  name: string;
  path: string;
  entryPoint: string;
  triggerType: TriggerType;
  triggerConfig?: BucketFunctionConfig | PubSubFunctionConfig;
  envVars: { [key: string]: string };
}

export interface BucketFunctionConfig {
  events: Array<TriggerEvent>;
  targetBucket: string;
}

export interface PubSubFunctionConfig {
  topic: string;
}

export interface Config {
  storageDir: string;
  httpProxyPort?: number;
  grpcProxyPort?: number;
  loglevel: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
  provider: ProviderConfig;
  services: Array<ServiceConfig>;
  extensions?: Array<string>;
}

export interface ProviderConfig {
  name: Provider;
  project: string;
}
