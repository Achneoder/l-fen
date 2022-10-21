import { BucketService } from './bucket-service';
import { HttpService } from './http-service';
import { PubSubService } from './pubsub-service';

export class ServiceCollection {
  public static readonly pubSubServices: Array<PubSubService> = [];
  public static readonly httpServices: Array<HttpService> = [];
  public static readonly bucketServices: Array<BucketService> = [];
}
