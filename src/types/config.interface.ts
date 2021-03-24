import {TriggerType} from "./trigger-type.enum";
import {Provider} from "./provider.enum";

export interface ServiceConfig {
    name: string;
    path: string;
    entryPoint: string;
    triggerType: TriggerType;
    provider: Provider;
    envVars: { [key: string]: string }
}

export interface Config {
    bucketLocation: string;
    services: Array<ServiceConfig>
}