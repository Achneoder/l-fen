import { TriggerType } from './trigger-type.enum';
import { Provider } from './provider.enum';
import { TriggerEvent } from './trigger-event.enum';

export interface ServiceConfig {
  name: string;
  path: string;
  entryPoint: string;
  triggerType: TriggerType;
  provider: Provider;
  envVars: { [key: string]: string };
  events?: Array<TriggerEvent>;
}

export interface Config {
  bucketLocation: string;
  services: Array<ServiceConfig>;
}
