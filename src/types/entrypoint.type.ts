import { BucketEvent, PubSubEvent } from './gcloud.interface';
import core from 'express-serve-static-core';

export type BucketFunctionHandler = (data: BucketEvent) => Promise<void>;
export type HttpFunctionHandler = core.Express;
export type PubSubFunctionHandler = (event: PubSubEvent) => Promise<void>;
