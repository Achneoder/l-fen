import { mockEndpoints } from '../api/gcloud/pubsub.api';
import { ServiceConfig } from '../types/config.interface';
import { Event } from '../types/service-event.interface';

export abstract class Service<T extends Event, R> {
  private static pubSubPublisherInitiated = false;
  constructor(protected readonly serviceConfig: ServiceConfig) {
    if (!Service.pubSubPublisherInitiated) {
      Service.pubSubPublisherInitiated = true;
      mockEndpoints();
    }
  }

  public abstract exec(event: T): Promise<R>;

  public abstract canBeExecuted(event: T): boolean;
}
