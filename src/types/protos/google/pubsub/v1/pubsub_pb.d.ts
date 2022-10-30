// package: google.pubsub.v1
// file: google/pubsub/v1/pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_pubsub_v1_schema_pb from '../../../google/pubsub/v1/schema_pb';

export class MessageStoragePolicy extends jspb.Message {
  clearAllowedPersistenceRegionsList(): void;
  getAllowedPersistenceRegionsList(): Array<string>;
  setAllowedPersistenceRegionsList(value: Array<string>): MessageStoragePolicy;
  addAllowedPersistenceRegions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageStoragePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MessageStoragePolicy): MessageStoragePolicy.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MessageStoragePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageStoragePolicy;
  static deserializeBinaryFromReader(message: MessageStoragePolicy, reader: jspb.BinaryReader): MessageStoragePolicy;
}

export namespace MessageStoragePolicy {
  export type AsObject = {
    allowedPersistenceRegionsList: Array<string>;
  };
}

export class SchemaSettings extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): SchemaSettings;
  getEncoding(): google_pubsub_v1_schema_pb.Encoding;
  setEncoding(value: google_pubsub_v1_schema_pb.Encoding): SchemaSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaSettings.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaSettings): SchemaSettings.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SchemaSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaSettings;
  static deserializeBinaryFromReader(message: SchemaSettings, reader: jspb.BinaryReader): SchemaSettings;
}

export namespace SchemaSettings {
  export type AsObject = {
    schema: string;
    encoding: google_pubsub_v1_schema_pb.Encoding;
  };
}

export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): Topic;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  hasMessageStoragePolicy(): boolean;
  clearMessageStoragePolicy(): void;
  getMessageStoragePolicy(): MessageStoragePolicy | undefined;
  setMessageStoragePolicy(value?: MessageStoragePolicy): Topic;
  getKmsKeyName(): string;
  setKmsKeyName(value: string): Topic;

  hasSchemaSettings(): boolean;
  clearSchemaSettings(): void;
  getSchemaSettings(): SchemaSettings | undefined;
  setSchemaSettings(value?: SchemaSettings): Topic;
  getSatisfiesPzs(): boolean;
  setSatisfiesPzs(value: boolean): Topic;

  hasMessageRetentionDuration(): boolean;
  clearMessageRetentionDuration(): void;
  getMessageRetentionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMessageRetentionDuration(value?: google_protobuf_duration_pb.Duration): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string;

    labelsMap: Array<[string, string]>;
    messageStoragePolicy?: MessageStoragePolicy.AsObject;
    kmsKeyName: string;
    schemaSettings?: SchemaSettings.AsObject;
    satisfiesPzs: boolean;
    messageRetentionDuration?: google_protobuf_duration_pb.Duration.AsObject;
  };
}

export class PubsubMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PubsubMessage;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  getMessageId(): string;
  setMessageId(value: string): PubsubMessage;

  hasPublishTime(): boolean;
  clearPublishTime(): void;
  getPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): PubsubMessage;
  getOrderingKey(): string;
  setOrderingKey(value: string): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubMessage): PubsubMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PubsubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubMessage;
  static deserializeBinaryFromReader(message: PubsubMessage, reader: jspb.BinaryReader): PubsubMessage;
}

export namespace PubsubMessage {
  export type AsObject = {
    data: Uint8Array | string;

    attributesMap: Array<[string, string]>;
    messageId: string;
    publishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    orderingKey: string;
  };
}

export class GetTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): GetTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
  static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
  export type AsObject = {
    topic: string;
  };
}

export class UpdateTopicRequest extends jspb.Message {
  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): Topic | undefined;
  setTopic(value?: Topic): UpdateTopicRequest;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTopicRequest): UpdateTopicRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTopicRequest;
  static deserializeBinaryFromReader(message: UpdateTopicRequest, reader: jspb.BinaryReader): UpdateTopicRequest;
}

export namespace UpdateTopicRequest {
  export type AsObject = {
    topic?: Topic.AsObject;
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
  };
}

export class PublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): PublishRequest;
  clearMessagesList(): void;
  getMessagesList(): Array<PubsubMessage>;
  setMessagesList(value: Array<PubsubMessage>): PublishRequest;
  addMessages(value?: PubsubMessage, index?: number): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    topic: string;
    messagesList: Array<PubsubMessage.AsObject>;
  };
}

export class PublishResponse extends jspb.Message {
  clearMessageIdsList(): void;
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): PublishResponse;
  addMessageIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    messageIdsList: Array<string>;
  };
}

export class ListTopicsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ListTopicsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListTopicsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListTopicsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
  static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
  export type AsObject = {
    project: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListTopicsResponse extends jspb.Message {
  clearTopicsList(): void;
  getTopicsList(): Array<Topic>;
  setTopicsList(value: Array<Topic>): ListTopicsResponse;
  addTopics(value?: Topic, index?: number): Topic;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListTopicsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
  static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
  export type AsObject = {
    topicsList: Array<Topic.AsObject>;
    nextPageToken: string;
  };
}

export class ListTopicSubscriptionsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ListTopicSubscriptionsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListTopicSubscriptionsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListTopicSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsRequest): ListTopicSubscriptionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsRequest;
  static deserializeBinaryFromReader(
    message: ListTopicSubscriptionsRequest,
    reader: jspb.BinaryReader
  ): ListTopicSubscriptionsRequest;
}

export namespace ListTopicSubscriptionsRequest {
  export type AsObject = {
    topic: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListTopicSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<string>;
  setSubscriptionsList(value: Array<string>): ListTopicSubscriptionsResponse;
  addSubscriptions(value: string, index?: number): string;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListTopicSubscriptionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListTopicSubscriptionsResponse
  ): ListTopicSubscriptionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsResponse;
  static deserializeBinaryFromReader(
    message: ListTopicSubscriptionsResponse,
    reader: jspb.BinaryReader
  ): ListTopicSubscriptionsResponse;
}

export namespace ListTopicSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<string>;
    nextPageToken: string;
  };
}

export class ListTopicSnapshotsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ListTopicSnapshotsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListTopicSnapshotsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListTopicSnapshotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSnapshotsRequest): ListTopicSnapshotsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSnapshotsRequest;
  static deserializeBinaryFromReader(
    message: ListTopicSnapshotsRequest,
    reader: jspb.BinaryReader
  ): ListTopicSnapshotsRequest;
}

export namespace ListTopicSnapshotsRequest {
  export type AsObject = {
    topic: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListTopicSnapshotsResponse extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<string>;
  setSnapshotsList(value: Array<string>): ListTopicSnapshotsResponse;
  addSnapshots(value: string, index?: number): string;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListTopicSnapshotsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSnapshotsResponse): ListTopicSnapshotsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListTopicSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSnapshotsResponse;
  static deserializeBinaryFromReader(
    message: ListTopicSnapshotsResponse,
    reader: jspb.BinaryReader
  ): ListTopicSnapshotsResponse;
}

export namespace ListTopicSnapshotsResponse {
  export type AsObject = {
    snapshotsList: Array<string>;
    nextPageToken: string;
  };
}

export class DeleteTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): DeleteTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
  export type AsObject = {
    topic: string;
  };
}

export class DetachSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): DetachSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetachSubscriptionRequest): DetachSubscriptionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DetachSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachSubscriptionRequest;
  static deserializeBinaryFromReader(
    message: DetachSubscriptionRequest,
    reader: jspb.BinaryReader
  ): DetachSubscriptionRequest;
}

export namespace DetachSubscriptionRequest {
  export type AsObject = {
    subscription: string;
  };
}

export class DetachSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetachSubscriptionResponse): DetachSubscriptionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DetachSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachSubscriptionResponse;
  static deserializeBinaryFromReader(
    message: DetachSubscriptionResponse,
    reader: jspb.BinaryReader
  ): DetachSubscriptionResponse;
}

export namespace DetachSubscriptionResponse {
  export type AsObject = {};
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): Subscription;
  getTopic(): string;
  setTopic(value: string): Subscription;

  hasPushConfig(): boolean;
  clearPushConfig(): void;
  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): Subscription;

  hasBigqueryConfig(): boolean;
  clearBigqueryConfig(): void;
  getBigqueryConfig(): BigQueryConfig | undefined;
  setBigqueryConfig(value?: BigQueryConfig): Subscription;
  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): Subscription;
  getRetainAckedMessages(): boolean;
  setRetainAckedMessages(value: boolean): Subscription;

  hasMessageRetentionDuration(): boolean;
  clearMessageRetentionDuration(): void;
  getMessageRetentionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMessageRetentionDuration(value?: google_protobuf_duration_pb.Duration): Subscription;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getEnableMessageOrdering(): boolean;
  setEnableMessageOrdering(value: boolean): Subscription;

  hasExpirationPolicy(): boolean;
  clearExpirationPolicy(): void;
  getExpirationPolicy(): ExpirationPolicy | undefined;
  setExpirationPolicy(value?: ExpirationPolicy): Subscription;
  getFilter(): string;
  setFilter(value: string): Subscription;

  hasDeadLetterPolicy(): boolean;
  clearDeadLetterPolicy(): void;
  getDeadLetterPolicy(): DeadLetterPolicy | undefined;
  setDeadLetterPolicy(value?: DeadLetterPolicy): Subscription;

  hasRetryPolicy(): boolean;
  clearRetryPolicy(): void;
  getRetryPolicy(): RetryPolicy | undefined;
  setRetryPolicy(value?: RetryPolicy): Subscription;
  getDetached(): boolean;
  setDetached(value: boolean): Subscription;
  getEnableExactlyOnceDelivery(): boolean;
  setEnableExactlyOnceDelivery(value: boolean): Subscription;

  hasTopicMessageRetentionDuration(): boolean;
  clearTopicMessageRetentionDuration(): void;
  getTopicMessageRetentionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTopicMessageRetentionDuration(value?: google_protobuf_duration_pb.Duration): Subscription;
  getState(): Subscription.State;
  setState(value: Subscription.State): Subscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    name: string;
    topic: string;
    pushConfig?: PushConfig.AsObject;
    bigqueryConfig?: BigQueryConfig.AsObject;
    ackDeadlineSeconds: number;
    retainAckedMessages: boolean;
    messageRetentionDuration?: google_protobuf_duration_pb.Duration.AsObject;

    labelsMap: Array<[string, string]>;
    enableMessageOrdering: boolean;
    expirationPolicy?: ExpirationPolicy.AsObject;
    filter: string;
    deadLetterPolicy?: DeadLetterPolicy.AsObject;
    retryPolicy?: RetryPolicy.AsObject;
    detached: boolean;
    enableExactlyOnceDelivery: boolean;
    topicMessageRetentionDuration?: google_protobuf_duration_pb.Duration.AsObject;
    state: Subscription.State;
  };

  export enum State {
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    RESOURCE_ERROR = 2
  }
}

export class RetryPolicy extends jspb.Message {
  hasMinimumBackoff(): boolean;
  clearMinimumBackoff(): void;
  getMinimumBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMinimumBackoff(value?: google_protobuf_duration_pb.Duration): RetryPolicy;

  hasMaximumBackoff(): boolean;
  clearMaximumBackoff(): void;
  getMaximumBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMaximumBackoff(value?: google_protobuf_duration_pb.Duration): RetryPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: RetryPolicy): RetryPolicy.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: RetryPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryPolicy;
  static deserializeBinaryFromReader(message: RetryPolicy, reader: jspb.BinaryReader): RetryPolicy;
}

export namespace RetryPolicy {
  export type AsObject = {
    minimumBackoff?: google_protobuf_duration_pb.Duration.AsObject;
    maximumBackoff?: google_protobuf_duration_pb.Duration.AsObject;
  };
}

export class DeadLetterPolicy extends jspb.Message {
  getDeadLetterTopic(): string;
  setDeadLetterTopic(value: string): DeadLetterPolicy;
  getMaxDeliveryAttempts(): number;
  setMaxDeliveryAttempts(value: number): DeadLetterPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeadLetterPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: DeadLetterPolicy): DeadLetterPolicy.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeadLetterPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeadLetterPolicy;
  static deserializeBinaryFromReader(message: DeadLetterPolicy, reader: jspb.BinaryReader): DeadLetterPolicy;
}

export namespace DeadLetterPolicy {
  export type AsObject = {
    deadLetterTopic: string;
    maxDeliveryAttempts: number;
  };
}

export class ExpirationPolicy extends jspb.Message {
  hasTtl(): boolean;
  clearTtl(): void;
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): ExpirationPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpirationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ExpirationPolicy): ExpirationPolicy.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ExpirationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpirationPolicy;
  static deserializeBinaryFromReader(message: ExpirationPolicy, reader: jspb.BinaryReader): ExpirationPolicy;
}

export namespace ExpirationPolicy {
  export type AsObject = {
    ttl?: google_protobuf_duration_pb.Duration.AsObject;
  };
}

export class PushConfig extends jspb.Message {
  getPushEndpoint(): string;
  setPushEndpoint(value: string): PushConfig;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  hasOidcToken(): boolean;
  clearOidcToken(): void;
  getOidcToken(): PushConfig.OidcToken | undefined;
  setOidcToken(value?: PushConfig.OidcToken): PushConfig;

  getAuthenticationMethodCase(): PushConfig.AuthenticationMethodCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PushConfig): PushConfig.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PushConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushConfig;
  static deserializeBinaryFromReader(message: PushConfig, reader: jspb.BinaryReader): PushConfig;
}

export namespace PushConfig {
  export type AsObject = {
    pushEndpoint: string;

    attributesMap: Array<[string, string]>;
    oidcToken?: PushConfig.OidcToken.AsObject;
  };

  export class OidcToken extends jspb.Message {
    getServiceAccountEmail(): string;
    setServiceAccountEmail(value: string): OidcToken;
    getAudience(): string;
    setAudience(value: string): OidcToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OidcToken.AsObject;
    static toObject(includeInstance: boolean, msg: OidcToken): OidcToken.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: OidcToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OidcToken;
    static deserializeBinaryFromReader(message: OidcToken, reader: jspb.BinaryReader): OidcToken;
  }

  export namespace OidcToken {
    export type AsObject = {
      serviceAccountEmail: string;
      audience: string;
    };
  }

  export enum AuthenticationMethodCase {
    AUTHENTICATION_METHOD_NOT_SET = 0,
    OIDC_TOKEN = 3
  }
}

export class BigQueryConfig extends jspb.Message {
  getTable(): string;
  setTable(value: string): BigQueryConfig;
  getUseTopicSchema(): boolean;
  setUseTopicSchema(value: boolean): BigQueryConfig;
  getWriteMetadata(): boolean;
  setWriteMetadata(value: boolean): BigQueryConfig;
  getDropUnknownFields(): boolean;
  setDropUnknownFields(value: boolean): BigQueryConfig;
  getState(): BigQueryConfig.State;
  setState(value: BigQueryConfig.State): BigQueryConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryConfig): BigQueryConfig.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BigQueryConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryConfig;
  static deserializeBinaryFromReader(message: BigQueryConfig, reader: jspb.BinaryReader): BigQueryConfig;
}

export namespace BigQueryConfig {
  export type AsObject = {
    table: string;
    useTopicSchema: boolean;
    writeMetadata: boolean;
    dropUnknownFields: boolean;
    state: BigQueryConfig.State;
  };

  export enum State {
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    PERMISSION_DENIED = 2,
    NOT_FOUND = 3,
    SCHEMA_MISMATCH = 4
  }
}

export class ReceivedMessage extends jspb.Message {
  getAckId(): string;
  setAckId(value: string): ReceivedMessage;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): PubsubMessage | undefined;
  setMessage(value?: PubsubMessage): ReceivedMessage;
  getDeliveryAttempt(): number;
  setDeliveryAttempt(value: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedMessage): ReceivedMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ReceivedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedMessage;
  static deserializeBinaryFromReader(message: ReceivedMessage, reader: jspb.BinaryReader): ReceivedMessage;
}

export namespace ReceivedMessage {
  export type AsObject = {
    ackId: string;
    message?: PubsubMessage.AsObject;
    deliveryAttempt: number;
  };
}

export class GetSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): GetSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(
    message: GetSubscriptionRequest,
    reader: jspb.BinaryReader
  ): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    subscription: string;
  };
}

export class UpdateSubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): UpdateSubscriptionRequest;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(
    message: UpdateSubscriptionRequest,
    reader: jspb.BinaryReader
  ): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    subscription?: Subscription.AsObject;
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
  };
}

export class ListSubscriptionsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ListSubscriptionsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListSubscriptionsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsRequest): ListSubscriptionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsRequest;
  static deserializeBinaryFromReader(
    message: ListSubscriptionsRequest,
    reader: jspb.BinaryReader
  ): ListSubscriptionsRequest;
}

export namespace ListSubscriptionsRequest {
  export type AsObject = {
    project: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): ListSubscriptionsResponse;
  addSubscriptions(value?: Subscription, index?: number): Subscription;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListSubscriptionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
  static deserializeBinaryFromReader(
    message: ListSubscriptionsResponse,
    reader: jspb.BinaryReader
  ): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<Subscription.AsObject>;
    nextPageToken: string;
  };
}

export class DeleteSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): DeleteSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionRequest): DeleteSubscriptionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionRequest;
  static deserializeBinaryFromReader(
    message: DeleteSubscriptionRequest,
    reader: jspb.BinaryReader
  ): DeleteSubscriptionRequest;
}

export namespace DeleteSubscriptionRequest {
  export type AsObject = {
    subscription: string;
  };
}

export class ModifyPushConfigRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): ModifyPushConfigRequest;

  hasPushConfig(): boolean;
  clearPushConfig(): void;
  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): ModifyPushConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPushConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPushConfigRequest): ModifyPushConfigRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ModifyPushConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPushConfigRequest;
  static deserializeBinaryFromReader(
    message: ModifyPushConfigRequest,
    reader: jspb.BinaryReader
  ): ModifyPushConfigRequest;
}

export namespace ModifyPushConfigRequest {
  export type AsObject = {
    subscription: string;
    pushConfig?: PushConfig.AsObject;
  };
}

export class PullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): PullRequest;
  getReturnImmediately(): boolean;
  setReturnImmediately(value: boolean): PullRequest;
  getMaxMessages(): number;
  setMaxMessages(value: number): PullRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequest): PullRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequest;
  static deserializeBinaryFromReader(message: PullRequest, reader: jspb.BinaryReader): PullRequest;
}

export namespace PullRequest {
  export type AsObject = {
    subscription: string;
    returnImmediately: boolean;
    maxMessages: number;
  };
}

export class PullResponse extends jspb.Message {
  clearReceivedMessagesList(): void;
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): PullResponse;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullResponse): PullResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullResponse;
  static deserializeBinaryFromReader(message: PullResponse, reader: jspb.BinaryReader): PullResponse;
}

export namespace PullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>;
  };
}

export class ModifyAckDeadlineRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): ModifyAckDeadlineRequest;
  clearAckIdsList(): void;
  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): ModifyAckDeadlineRequest;
  addAckIds(value: string, index?: number): string;
  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): ModifyAckDeadlineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyAckDeadlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyAckDeadlineRequest): ModifyAckDeadlineRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ModifyAckDeadlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyAckDeadlineRequest;
  static deserializeBinaryFromReader(
    message: ModifyAckDeadlineRequest,
    reader: jspb.BinaryReader
  ): ModifyAckDeadlineRequest;
}

export namespace ModifyAckDeadlineRequest {
  export type AsObject = {
    subscription: string;
    ackIdsList: Array<string>;
    ackDeadlineSeconds: number;
  };
}

export class AcknowledgeRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): AcknowledgeRequest;
  clearAckIdsList(): void;
  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): AcknowledgeRequest;
  addAckIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeRequest): AcknowledgeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AcknowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeRequest;
  static deserializeBinaryFromReader(message: AcknowledgeRequest, reader: jspb.BinaryReader): AcknowledgeRequest;
}

export namespace AcknowledgeRequest {
  export type AsObject = {
    subscription: string;
    ackIdsList: Array<string>;
  };
}

export class StreamingPullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): StreamingPullRequest;
  clearAckIdsList(): void;
  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): StreamingPullRequest;
  addAckIds(value: string, index?: number): string;
  clearModifyDeadlineSecondsList(): void;
  getModifyDeadlineSecondsList(): Array<number>;
  setModifyDeadlineSecondsList(value: Array<number>): StreamingPullRequest;
  addModifyDeadlineSeconds(value: number, index?: number): number;
  clearModifyDeadlineAckIdsList(): void;
  getModifyDeadlineAckIdsList(): Array<string>;
  setModifyDeadlineAckIdsList(value: Array<string>): StreamingPullRequest;
  addModifyDeadlineAckIds(value: string, index?: number): string;
  getStreamAckDeadlineSeconds(): number;
  setStreamAckDeadlineSeconds(value: number): StreamingPullRequest;
  getClientId(): string;
  setClientId(value: string): StreamingPullRequest;
  getMaxOutstandingMessages(): number;
  setMaxOutstandingMessages(value: number): StreamingPullRequest;
  getMaxOutstandingBytes(): number;
  setMaxOutstandingBytes(value: number): StreamingPullRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingPullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingPullRequest): StreamingPullRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: StreamingPullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingPullRequest;
  static deserializeBinaryFromReader(message: StreamingPullRequest, reader: jspb.BinaryReader): StreamingPullRequest;
}

export namespace StreamingPullRequest {
  export type AsObject = {
    subscription: string;
    ackIdsList: Array<string>;
    modifyDeadlineSecondsList: Array<number>;
    modifyDeadlineAckIdsList: Array<string>;
    streamAckDeadlineSeconds: number;
    clientId: string;
    maxOutstandingMessages: number;
    maxOutstandingBytes: number;
  };
}

export class StreamingPullResponse extends jspb.Message {
  clearReceivedMessagesList(): void;
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): StreamingPullResponse;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  hasAcknowledgeConfirmation(): boolean;
  clearAcknowledgeConfirmation(): void;
  getAcknowledgeConfirmation(): StreamingPullResponse.AcknowledgeConfirmation | undefined;
  setAcknowledgeConfirmation(value?: StreamingPullResponse.AcknowledgeConfirmation): StreamingPullResponse;

  hasModifyAckDeadlineConfirmation(): boolean;
  clearModifyAckDeadlineConfirmation(): void;
  getModifyAckDeadlineConfirmation(): StreamingPullResponse.ModifyAckDeadlineConfirmation | undefined;
  setModifyAckDeadlineConfirmation(value?: StreamingPullResponse.ModifyAckDeadlineConfirmation): StreamingPullResponse;

  hasSubscriptionProperties(): boolean;
  clearSubscriptionProperties(): void;
  getSubscriptionProperties(): StreamingPullResponse.SubscriptionProperties | undefined;
  setSubscriptionProperties(value?: StreamingPullResponse.SubscriptionProperties): StreamingPullResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingPullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingPullResponse): StreamingPullResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: StreamingPullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingPullResponse;
  static deserializeBinaryFromReader(message: StreamingPullResponse, reader: jspb.BinaryReader): StreamingPullResponse;
}

export namespace StreamingPullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>;
    acknowledgeConfirmation?: StreamingPullResponse.AcknowledgeConfirmation.AsObject;
    modifyAckDeadlineConfirmation?: StreamingPullResponse.ModifyAckDeadlineConfirmation.AsObject;
    subscriptionProperties?: StreamingPullResponse.SubscriptionProperties.AsObject;
  };

  export class AcknowledgeConfirmation extends jspb.Message {
    clearAckIdsList(): void;
    getAckIdsList(): Array<string>;
    setAckIdsList(value: Array<string>): AcknowledgeConfirmation;
    addAckIds(value: string, index?: number): string;
    clearInvalidAckIdsList(): void;
    getInvalidAckIdsList(): Array<string>;
    setInvalidAckIdsList(value: Array<string>): AcknowledgeConfirmation;
    addInvalidAckIds(value: string, index?: number): string;
    clearUnorderedAckIdsList(): void;
    getUnorderedAckIdsList(): Array<string>;
    setUnorderedAckIdsList(value: Array<string>): AcknowledgeConfirmation;
    addUnorderedAckIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcknowledgeConfirmation.AsObject;
    static toObject(includeInstance: boolean, msg: AcknowledgeConfirmation): AcknowledgeConfirmation.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: AcknowledgeConfirmation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcknowledgeConfirmation;
    static deserializeBinaryFromReader(
      message: AcknowledgeConfirmation,
      reader: jspb.BinaryReader
    ): AcknowledgeConfirmation;
  }

  export namespace AcknowledgeConfirmation {
    export type AsObject = {
      ackIdsList: Array<string>;
      invalidAckIdsList: Array<string>;
      unorderedAckIdsList: Array<string>;
    };
  }

  export class ModifyAckDeadlineConfirmation extends jspb.Message {
    clearAckIdsList(): void;
    getAckIdsList(): Array<string>;
    setAckIdsList(value: Array<string>): ModifyAckDeadlineConfirmation;
    addAckIds(value: string, index?: number): string;
    clearInvalidAckIdsList(): void;
    getInvalidAckIdsList(): Array<string>;
    setInvalidAckIdsList(value: Array<string>): ModifyAckDeadlineConfirmation;
    addInvalidAckIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyAckDeadlineConfirmation.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: ModifyAckDeadlineConfirmation
    ): ModifyAckDeadlineConfirmation.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: ModifyAckDeadlineConfirmation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyAckDeadlineConfirmation;
    static deserializeBinaryFromReader(
      message: ModifyAckDeadlineConfirmation,
      reader: jspb.BinaryReader
    ): ModifyAckDeadlineConfirmation;
  }

  export namespace ModifyAckDeadlineConfirmation {
    export type AsObject = {
      ackIdsList: Array<string>;
      invalidAckIdsList: Array<string>;
    };
  }

  export class SubscriptionProperties extends jspb.Message {
    getExactlyOnceDeliveryEnabled(): boolean;
    setExactlyOnceDeliveryEnabled(value: boolean): SubscriptionProperties;
    getMessageOrderingEnabled(): boolean;
    setMessageOrderingEnabled(value: boolean): SubscriptionProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionProperties.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionProperties): SubscriptionProperties.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SubscriptionProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionProperties;
    static deserializeBinaryFromReader(
      message: SubscriptionProperties,
      reader: jspb.BinaryReader
    ): SubscriptionProperties;
  }

  export namespace SubscriptionProperties {
    export type AsObject = {
      exactlyOnceDeliveryEnabled: boolean;
      messageOrderingEnabled: boolean;
    };
  }
}

export class CreateSnapshotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateSnapshotRequest;
  getSubscription(): string;
  setSubscription(value: string): CreateSnapshotRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSnapshotRequest): CreateSnapshotRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CreateSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSnapshotRequest;
  static deserializeBinaryFromReader(message: CreateSnapshotRequest, reader: jspb.BinaryReader): CreateSnapshotRequest;
}

export namespace CreateSnapshotRequest {
  export type AsObject = {
    name: string;
    subscription: string;

    labelsMap: Array<[string, string]>;
  };
}

export class UpdateSnapshotRequest extends jspb.Message {
  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): UpdateSnapshotRequest;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSnapshotRequest): UpdateSnapshotRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSnapshotRequest;
  static deserializeBinaryFromReader(message: UpdateSnapshotRequest, reader: jspb.BinaryReader): UpdateSnapshotRequest;
}

export namespace UpdateSnapshotRequest {
  export type AsObject = {
    snapshot?: Snapshot.AsObject;
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
  };
}

export class Snapshot extends jspb.Message {
  getName(): string;
  setName(value: string): Snapshot;
  getTopic(): string;
  setTopic(value: string): Snapshot;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    name: string;
    topic: string;
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;

    labelsMap: Array<[string, string]>;
  };
}

export class GetSnapshotRequest extends jspb.Message {
  getSnapshot(): string;
  setSnapshot(value: string): GetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotRequest): GetSnapshotRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotRequest;
  static deserializeBinaryFromReader(message: GetSnapshotRequest, reader: jspb.BinaryReader): GetSnapshotRequest;
}

export namespace GetSnapshotRequest {
  export type AsObject = {
    snapshot: string;
  };
}

export class ListSnapshotsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ListSnapshotsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListSnapshotsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListSnapshotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsRequest): ListSnapshotsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListSnapshotsRequest, reader: jspb.BinaryReader): ListSnapshotsRequest;
}

export namespace ListSnapshotsRequest {
  export type AsObject = {
    project: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListSnapshotsResponse extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): ListSnapshotsResponse;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListSnapshotsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsResponse): ListSnapshotsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListSnapshotsResponse, reader: jspb.BinaryReader): ListSnapshotsResponse;
}

export namespace ListSnapshotsResponse {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>;
    nextPageToken: string;
  };
}

export class DeleteSnapshotRequest extends jspb.Message {
  getSnapshot(): string;
  setSnapshot(value: string): DeleteSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSnapshotRequest): DeleteSnapshotRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSnapshotRequest;
  static deserializeBinaryFromReader(message: DeleteSnapshotRequest, reader: jspb.BinaryReader): DeleteSnapshotRequest;
}

export namespace DeleteSnapshotRequest {
  export type AsObject = {
    snapshot: string;
  };
}

export class SeekRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): SeekRequest;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): SeekRequest;

  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): string;
  setSnapshot(value: string): SeekRequest;

  getTargetCase(): SeekRequest.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeekRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeekRequest): SeekRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SeekRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeekRequest;
  static deserializeBinaryFromReader(message: SeekRequest, reader: jspb.BinaryReader): SeekRequest;
}

export namespace SeekRequest {
  export type AsObject = {
    subscription: string;
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    snapshot: string;
  };

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    TIME = 2,
    SNAPSHOT = 3
  }
}

export class SeekResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeekResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SeekResponse): SeekResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SeekResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeekResponse;
  static deserializeBinaryFromReader(message: SeekResponse, reader: jspb.BinaryReader): SeekResponse;
}

export namespace SeekResponse {
  export type AsObject = {};
}
