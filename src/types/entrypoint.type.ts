import { BucketEvent } from './gcloud.interface';
import core from 'express-serve-static-core';
import { PubSubServiceEvent } from './service-event.interface';

export type BucketFunctionHandler = (data: BucketEvent) => Promise<void>;
export type HttpFunctionHandler = core.Express;
export type PubSubHandler = (event: Omit<PubSubServiceEvent, 'topic'>) => Promise<void>;
