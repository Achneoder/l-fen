// package: google.pubsub.v1
// file: google/pubsub/v1/pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as google_pubsub_v1_pubsub_pb from '../../../google/pubsub/v1/pubsub_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_pubsub_v1_schema_pb from '../../../google/pubsub/v1/schema_pb';

interface IPublisherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTopic: IPublisherService_ICreateTopic;
  updateTopic: IPublisherService_IUpdateTopic;
  publish: IPublisherService_IPublish;
  getTopic: IPublisherService_IGetTopic;
  listTopics: IPublisherService_IListTopics;
  listTopicSubscriptions: IPublisherService_IListTopicSubscriptions;
  listTopicSnapshots: IPublisherService_IListTopicSnapshots;
  deleteTopic: IPublisherService_IDeleteTopic;
  detachSubscription: IPublisherService_IDetachSubscription;
}

interface IPublisherService_ICreateTopic
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.Topic, google_pubsub_v1_pubsub_pb.Topic> {
  path: '/google.pubsub.v1.Publisher/CreateTopic';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Topic>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Topic>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Topic>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Topic>;
}
interface IPublisherService_IUpdateTopic
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.UpdateTopicRequest, google_pubsub_v1_pubsub_pb.Topic> {
  path: '/google.pubsub.v1.Publisher/UpdateTopic';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.UpdateTopicRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.UpdateTopicRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Topic>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Topic>;
}
interface IPublisherService_IPublish
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.PublishRequest, google_pubsub_v1_pubsub_pb.PublishResponse> {
  path: '/google.pubsub.v1.Publisher/Publish';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.PublishRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.PublishRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.PublishResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.PublishResponse>;
}
interface IPublisherService_IGetTopic
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.GetTopicRequest, google_pubsub_v1_pubsub_pb.Topic> {
  path: '/google.pubsub.v1.Publisher/GetTopic';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.GetTopicRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.GetTopicRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Topic>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Topic>;
}
interface IPublisherService_IListTopics
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicsResponse
  > {
  path: '/google.pubsub.v1.Publisher/ListTopics';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicsRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicsRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicsResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicsResponse>;
}
interface IPublisherService_IListTopicSubscriptions
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
  > {
  path: '/google.pubsub.v1.Publisher/ListTopicSubscriptions';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse>;
}
interface IPublisherService_IListTopicSnapshots
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse
  > {
  path: '/google.pubsub.v1.Publisher/ListTopicSnapshots';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse>;
}
interface IPublisherService_IDeleteTopic
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.DeleteTopicRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Publisher/DeleteTopic';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.DeleteTopicRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.DeleteTopicRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPublisherService_IDetachSubscription
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse
  > {
  path: '/google.pubsub.v1.Publisher/DetachSubscription';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse>;
}

export const PublisherService: IPublisherService;

export interface IPublisherServer extends grpc.UntypedServiceImplementation {
  createTopic: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.Topic, google_pubsub_v1_pubsub_pb.Topic>;
  updateTopic: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.UpdateTopicRequest, google_pubsub_v1_pubsub_pb.Topic>;
  publish: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.PublishRequest, google_pubsub_v1_pubsub_pb.PublishResponse>;
  getTopic: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.GetTopicRequest, google_pubsub_v1_pubsub_pb.Topic>;
  listTopics: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicsResponse
  >;
  listTopicSubscriptions: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
  >;
  listTopicSnapshots: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse
  >;
  deleteTopic: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.DeleteTopicRequest, google_protobuf_empty_pb.Empty>;
  detachSubscription: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse
  >;
}

export interface IPublisherClient {
  createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
  detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
  detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
}

export class PublisherClient extends grpc.Client implements IPublisherClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  public publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  public publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpc.ClientUnaryCall;
  public getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpc.ClientUnaryCall;
  public listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  public listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  public listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpc.ClientUnaryCall;
  public listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
  public detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
  public detachSubscription(
    request: google_pubsub_v1_pubsub_pb.DetachSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.DetachSubscriptionResponse) => void
  ): grpc.ClientUnaryCall;
}

interface ISubscriberService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSubscription: ISubscriberService_ICreateSubscription;
  getSubscription: ISubscriberService_IGetSubscription;
  updateSubscription: ISubscriberService_IUpdateSubscription;
  listSubscriptions: ISubscriberService_IListSubscriptions;
  deleteSubscription: ISubscriberService_IDeleteSubscription;
  modifyAckDeadline: ISubscriberService_IModifyAckDeadline;
  acknowledge: ISubscriberService_IAcknowledge;
  pull: ISubscriberService_IPull;
  streamingPull: ISubscriberService_IStreamingPull;
  modifyPushConfig: ISubscriberService_IModifyPushConfig;
  getSnapshot: ISubscriberService_IGetSnapshot;
  listSnapshots: ISubscriberService_IListSnapshots;
  createSnapshot: ISubscriberService_ICreateSnapshot;
  updateSnapshot: ISubscriberService_IUpdateSnapshot;
  deleteSnapshot: ISubscriberService_IDeleteSnapshot;
  seek: ISubscriberService_ISeek;
}

interface ISubscriberService_ICreateSubscription
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.Subscription, google_pubsub_v1_pubsub_pb.Subscription> {
  path: '/google.pubsub.v1.Subscriber/CreateSubscription';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Subscription>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Subscription>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Subscription>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Subscription>;
}
interface ISubscriberService_IGetSubscription
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.Subscription
  > {
  path: '/google.pubsub.v1.Subscriber/GetSubscription';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.GetSubscriptionRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.GetSubscriptionRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Subscription>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Subscription>;
}
interface ISubscriberService_IUpdateSubscription
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.Subscription
  > {
  path: '/google.pubsub.v1.Subscriber/UpdateSubscription';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Subscription>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Subscription>;
}
interface ISubscriberService_IListSubscriptions
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse
  > {
  path: '/google.pubsub.v1.Subscriber/ListSubscriptions';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse>;
}
interface ISubscriberService_IDeleteSubscription
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Subscriber/DeleteSubscription';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISubscriberService_IModifyAckDeadline
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Subscriber/ModifyAckDeadline';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISubscriberService_IAcknowledge
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.AcknowledgeRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Subscriber/Acknowledge';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.AcknowledgeRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.AcknowledgeRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISubscriberService_IPull
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.PullRequest, google_pubsub_v1_pubsub_pb.PullResponse> {
  path: '/google.pubsub.v1.Subscriber/Pull';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.PullRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.PullRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.PullResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.PullResponse>;
}
interface ISubscriberService_IStreamingPull
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  > {
  path: '/google.pubsub.v1.Subscriber/StreamingPull';
  requestStream: true;
  responseStream: true;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.StreamingPullRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.StreamingPullRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.StreamingPullResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.StreamingPullResponse>;
}
interface ISubscriberService_IModifyPushConfig
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Subscriber/ModifyPushConfig';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISubscriberService_IGetSnapshot
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.GetSnapshotRequest, google_pubsub_v1_pubsub_pb.Snapshot> {
  path: '/google.pubsub.v1.Subscriber/GetSnapshot';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.GetSnapshotRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.GetSnapshotRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Snapshot>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Snapshot>;
}
interface ISubscriberService_IListSnapshots
  extends grpc.MethodDefinition<
    google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    google_pubsub_v1_pubsub_pb.ListSnapshotsResponse
  > {
  path: '/google.pubsub.v1.Subscriber/ListSnapshots';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListSnapshotsRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListSnapshotsRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.ListSnapshotsResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.ListSnapshotsResponse>;
}
interface ISubscriberService_ICreateSnapshot
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.CreateSnapshotRequest, google_pubsub_v1_pubsub_pb.Snapshot> {
  path: '/google.pubsub.v1.Subscriber/CreateSnapshot';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.CreateSnapshotRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.CreateSnapshotRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Snapshot>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Snapshot>;
}
interface ISubscriberService_IUpdateSnapshot
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest, google_pubsub_v1_pubsub_pb.Snapshot> {
  path: '/google.pubsub.v1.Subscriber/UpdateSnapshot';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.Snapshot>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.Snapshot>;
}
interface ISubscriberService_IDeleteSnapshot
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.Subscriber/DeleteSnapshot';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISubscriberService_ISeek
  extends grpc.MethodDefinition<google_pubsub_v1_pubsub_pb.SeekRequest, google_pubsub_v1_pubsub_pb.SeekResponse> {
  path: '/google.pubsub.v1.Subscriber/Seek';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.SeekRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.SeekRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_pubsub_pb.SeekResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_pubsub_pb.SeekResponse>;
}

export const SubscriberService: ISubscriberService;

export interface ISubscriberServer extends grpc.UntypedServiceImplementation {
  createSubscription: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.Subscription,
    google_pubsub_v1_pubsub_pb.Subscription
  >;
  getSubscription: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.Subscription
  >;
  updateSubscription: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    google_pubsub_v1_pubsub_pb.Subscription
  >;
  listSubscriptions: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse
  >;
  deleteSubscription: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    google_protobuf_empty_pb.Empty
  >;
  modifyAckDeadline: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    google_protobuf_empty_pb.Empty
  >;
  acknowledge: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.AcknowledgeRequest, google_protobuf_empty_pb.Empty>;
  pull: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.PullRequest, google_pubsub_v1_pubsub_pb.PullResponse>;
  streamingPull: grpc.handleBidiStreamingCall<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  modifyPushConfig: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    google_protobuf_empty_pb.Empty
  >;
  getSnapshot: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.GetSnapshotRequest, google_pubsub_v1_pubsub_pb.Snapshot>;
  listSnapshots: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    google_pubsub_v1_pubsub_pb.ListSnapshotsResponse
  >;
  createSnapshot: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    google_pubsub_v1_pubsub_pb.Snapshot
  >;
  updateSnapshot: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    google_pubsub_v1_pubsub_pb.Snapshot
  >;
  deleteSnapshot: grpc.handleUnaryCall<
    google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    google_protobuf_empty_pb.Empty
  >;
  seek: grpc.handleUnaryCall<google_pubsub_v1_pubsub_pb.SeekRequest, google_pubsub_v1_pubsub_pb.SeekResponse>;
}

export interface ISubscriberClient {
  createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  streamingPull(): grpc.ClientDuplexStream<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  streamingPull(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  streamingPull(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
  seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
  seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
}

export class SubscriberClient extends grpc.Client implements ISubscriberClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpc.ClientUnaryCall;
  public listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  public listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  public listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpc.ClientUnaryCall;
  public deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  public pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  public pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpc.ClientUnaryCall;
  public streamingPull(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  public streamingPull(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    google_pubsub_v1_pubsub_pb.StreamingPullResponse
  >;
  public modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpc.ClientUnaryCall;
  public createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpc.ClientUnaryCall;
  public deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
  public seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
  public seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpc.ClientUnaryCall;
}
