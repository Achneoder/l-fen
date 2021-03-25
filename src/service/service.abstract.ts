import { ServiceConfig } from '../types/config.interface';
import { Event } from '../types/service-event.interface';

export abstract class Service<T extends Event> {
  constructor(protected readonly serviceConfig: ServiceConfig) {}

  public abstract exec(event: T): void;
}
