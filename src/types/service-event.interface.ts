import { TriggerEvent } from './trigger-event.enum';

export interface Event {
  [key: string]: unknown;
}

export interface BucketServiceEvent extends Event {
  bucket: string;
  name: string;
  eventType: TriggerEvent;
}

export interface HttpServiceRequest extends Event {
  headers: Record<string, string>;
  body: Record<string, unknown>;
  query: Record<string, string>;
  url: string;
  method: string;
}
export interface HttpServiceResponse extends Event {
  headers: Record<string, string>;
  body: Record<string, unknown>;
  status: number;
}
