import { TriggerType } from './trigger-type.enum';
import { Provider } from './provider.enum';
import { TriggerEvent } from './trigger-event.enum';

export interface ServiceConfig {
  name: string;
  path: string;
  entryPoint: string;
  triggerType: TriggerType;
  triggerConfig?: BucketFunctionConfig;
  envVars: { [key: string]: string };
}

export interface BucketFunctionConfig {
  events: Array<TriggerEvent>;
  targetBucket: string;
}

export interface Config {
  bucketLocation: string;
  port: number;
  provider: ProviderConfig;
  services: Array<ServiceConfig>;
}

export interface ProviderConfig {
  name: Provider;
  project: string;
}
