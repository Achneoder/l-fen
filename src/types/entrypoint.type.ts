import core from 'express-serve-static-core';
import { BucketEvent, PubSubEvent } from './gcloud.interface';

export type BucketFunctionHandler = (data: BucketEvent) => Promise<void>;
export type HttpFunctionHandler = core.Express;
export type PubSubFunctionHandler = (event: PubSubEvent) => Promise<void>;
