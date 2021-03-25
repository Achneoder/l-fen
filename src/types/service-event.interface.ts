import { TriggerEvent } from './trigger-event.enum';

export interface Event {
  [key: string]: unknown;
}

export interface BucketServiceEvent extends Event {
  bucket: string;
  name: string;
  eventType: TriggerEvent;
}
