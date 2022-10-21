import { grpc } from 'google-gax';
import { PubSubService } from '../../../service/pubsub-service';
import { ServiceCollection } from '../../../service/service-collection';
import * as google_protobuf_empty_pb from '../../../types/protos/google/protobuf/empty_pb';
import { IPublisherServer } from '../../../types/protos/google/pubsub/v1/pubsub_grpc_pb';
import {
  PublishRequest,
  PublishResponse,
  UpdateTopicRequest,
  GetTopicRequest,
  ListTopicsRequest,
  ListTopicsResponse,
  ListTopicSubscriptionsRequest,
  ListTopicSubscriptionsResponse,
  ListTopicSnapshotsRequest,
  ListTopicSnapshotsResponse,
  DeleteTopicRequest,
  DetachSubscriptionRequest,
  PubsubMessage,
  Topic,
  DetachSubscriptionResponse
} from '../../../types/protos/google/pubsub/v1/pubsub_pb';
import { PubSubServiceEvent } from '../../../types/service-event.interface';

export class PublisherServer implements IPublisherServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

  publish(
    call: grpc.ServerUnaryCall<PublishRequest, PublishResponse>,
    callback: grpc.sendUnaryData<PublishResponse>
  ): void {
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
        .forEach((service: PubSubService) => service.exec(event).catch((err) => console.error(err)));
    });

    messages.forEach((message: PubsubMessage) => {
      const buffer = Buffer.from(message.getData_asU8());
      console.log(`got message on topic ${topic}: ${buffer.toString()}`);
    });
    const response = new PublishResponse();
    callback(null, response);
  }

  createTopic(call: grpc.ServerUnaryCall<Topic, Topic>, callback: grpc.sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  updateTopic(call: grpc.ServerUnaryCall<UpdateTopicRequest, Topic>, callback: grpc.sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  getTopic(call: grpc.ServerUnaryCall<GetTopicRequest, Topic>, callback: grpc.sendUnaryData<Topic>) {
    throw new Error('not yet implemented');
  }

  listTopics(
    call: grpc.ServerUnaryCall<ListTopicsRequest, ListTopicsResponse>,
    callback: grpc.sendUnaryData<ListTopicsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  listTopicSubscriptions(
    call: grpc.ServerUnaryCall<ListTopicSubscriptionsRequest, ListTopicSubscriptionsResponse>,
    callback: grpc.sendUnaryData<ListTopicSubscriptionsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  listTopicSnapshots(
    call: grpc.ServerUnaryCall<ListTopicSnapshotsRequest, ListTopicSnapshotsResponse>,
    callback: grpc.sendUnaryData<ListTopicSnapshotsResponse>
  ) {
    throw new Error('not yet implemented');
  }

  deleteTopic(
    call: grpc.ServerUnaryCall<DeleteTopicRequest, google_protobuf_empty_pb.Empty>,
    callback: grpc.sendUnaryData<google_protobuf_empty_pb.Empty>
  ) {
    throw new Error('not yet implemented');
  }

  detachSubscription(
    call: grpc.ServerUnaryCall<DetachSubscriptionRequest, DetachSubscriptionResponse>,
    callback: grpc.sendUnaryData<DetachSubscriptionResponse>
  ) {
    throw new Error('not yet implemented');
  }
}
