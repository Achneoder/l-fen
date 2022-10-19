import { PubSubServiceEvent } from '../types/service-event.interface';
import { Service } from './service.abstract';

export class PubSubService extends Service<PubSubServiceEvent, void> {
  public exec(event: PubSubServiceEvent): Promise<void> {
    throw new Error('not yet implemented.');
  }
  public canBeExecuted(event: PubSubServiceEvent): boolean {
    throw new Error('not yet implemented.');
  }
}
