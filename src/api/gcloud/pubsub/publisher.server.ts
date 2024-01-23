import { grpc } from 'google-gax';
import { Logger } from '../../../helper/logger';
import { PubSubService } from '../../../service/pubsub-service';
import { ServiceCollection } from '../../../service/service-collection';
import * as google_protobuf_empty_pb from '../../../types/protos/google/protobuf/empty_pb';
import { IPublisherServer } from '../../../types/protos/google/pubsub/v1/pubsub_grpc_pb';
import {
  DeleteTopicRequest,
  DetachSubscriptionRequest,
  DetachSubscriptionResponse,
  GetTopicRequest,
  ListTopicSnapshotsRequest,
  ListTopicSnapshotsResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  ListTopicSubscriptionsRequest,
  ListTopicSubscriptionsResponse,
  PublishRequest,
  PublishResponse,
  PubsubMessage,
  Topic,
  UpdateTopicRequest
} from '../../../types/protos/google/pubsub/v1/pubsub_pb';
import { PubSubServiceEvent } from '../../../types/service-event.interface';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';

export class PublisherServer implements IPublisherServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

  publish(call: ServerUnaryCall<PublishRequest, PublishResponse>, callback: sendUnaryData<PublishResponse>): void {
    const logger = Logger.getLogger();

    const topic = call.request.getTopic();
    const messages = call.request.getMessagesList();
    const serviceEvents: Array<PubSubServiceEvent> = messages.map((message: PubsubMessage) => {
      return {
        topic: topic.split('/topics/').pop(),
        data: Buffer.from(message.getData_asU8()).toString('base64')
      };
    });

    serviceEvents.forEach((event: PubSubServiceEvent) => {
      ServiceCollection.pubSubServices
        .filter((service: PubSubService) => service.canBeExecuted(event))
        .forEach((service: PubSubService) =>
          service.exec(event).catch((err) => logger.error(err, { label: 'PublisherServer:publish' }))
        );
    });

    messages.forEach((message: PubsubMessage) => {
      const buffer = Buffer.from(message.getData_asU8());
      logger.verbose(`got message on topic %s: %s`, topic, buffer.toString(), { label: 'PublisherServer:publish' });
    });
    const response = new PublishResponse();
    callback(null, response);
  }

  createTopic(call: ServerUnaryCall<Topic, Topic>, callback: sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  updateTopic(call: ServerUnaryCall<UpdateTopicRequest, Topic>, callback: sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  getTopic(call: ServerUnaryCall<GetTopicRequest, Topic>, callback: sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  listTopics(
    call: ServerUnaryCall<ListTopicsRequest, ListTopicsResponse>,
    callback: sendUnaryData<ListTopicsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  listTopicSubscriptions(
    call: ServerUnaryCall<ListTopicSubscriptionsRequest, ListTopicSubscriptionsResponse>,
    callback: sendUnaryData<ListTopicSubscriptionsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  listTopicSnapshots(
    call: ServerUnaryCall<ListTopicSnapshotsRequest, ListTopicSnapshotsResponse>,
    callback: sendUnaryData<ListTopicSnapshotsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  deleteTopic(
    call: ServerUnaryCall<DeleteTopicRequest, google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<google_protobuf_empty_pb.Empty>
  ) {
    throw new Error('not yet implemented');
  }

  detachSubscription(
    call: ServerUnaryCall<DetachSubscriptionRequest, DetachSubscriptionResponse>,
    callback: sendUnaryData<DetachSubscriptionResponse>
  ) {
    throw new Error('not yet implemented');
  }
}
