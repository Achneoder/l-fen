// package: google.pubsub.v1
// file: google/pubsub/v1/schema.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Schema extends jspb.Message {
  getName(): string;
  setName(value: string): Schema;
  getType(): Schema.Type;
  setType(value: Schema.Type): Schema;
  getDefinition(): string;
  setDefinition(value: string): Schema;
  getRevisionId(): string;
  setRevisionId(value: string): Schema;

  hasRevisionCreateTime(): boolean;
  clearRevisionCreateTime(): void;
  getRevisionCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevisionCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    name: string;
    type: Schema.Type;
    definition: string;
    revisionId: string;
    revisionCreateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum Type {
    TYPE_UNSPECIFIED = 0,
    PROTOCOL_BUFFER = 1,
    AVRO = 2
  }
}

export class CreateSchemaRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateSchemaRequest;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): Schema | undefined;
  setSchema(value?: Schema): CreateSchemaRequest;
  getSchemaId(): string;
  setSchemaId(value: string): CreateSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSchemaRequest): CreateSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CreateSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSchemaRequest;
  static deserializeBinaryFromReader(message: CreateSchemaRequest, reader: jspb.BinaryReader): CreateSchemaRequest;
}

export namespace CreateSchemaRequest {
  export type AsObject = {
    parent: string;
    schema?: Schema.AsObject;
    schemaId: string;
  };
}

export class GetSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSchemaRequest;
  getView(): SchemaView;
  setView(value: SchemaView): GetSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
  static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
  export type AsObject = {
    name: string;
    view: SchemaView;
  };
}

export class ListSchemasRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListSchemasRequest;
  getView(): SchemaView;
  setView(value: SchemaView): ListSchemasRequest;
  getPageSize(): number;
  setPageSize(value: number): ListSchemasRequest;
  getPageToken(): string;
  setPageToken(value: string): ListSchemasRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemasRequest): ListSchemasRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemasRequest;
  static deserializeBinaryFromReader(message: ListSchemasRequest, reader: jspb.BinaryReader): ListSchemasRequest;
}

export namespace ListSchemasRequest {
  export type AsObject = {
    parent: string;
    view: SchemaView;
    pageSize: number;
    pageToken: string;
  };
}

export class ListSchemasResponse extends jspb.Message {
  clearSchemasList(): void;
  getSchemasList(): Array<Schema>;
  setSchemasList(value: Array<Schema>): ListSchemasResponse;
  addSchemas(value?: Schema, index?: number): Schema;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListSchemasResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemasResponse): ListSchemasResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemasResponse;
  static deserializeBinaryFromReader(message: ListSchemasResponse, reader: jspb.BinaryReader): ListSchemasResponse;
}

export namespace ListSchemasResponse {
  export type AsObject = {
    schemasList: Array<Schema.AsObject>;
    nextPageToken: string;
  };
}

export class ListSchemaRevisionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListSchemaRevisionsRequest;
  getView(): SchemaView;
  setView(value: SchemaView): ListSchemaRevisionsRequest;
  getPageSize(): number;
  setPageSize(value: number): ListSchemaRevisionsRequest;
  getPageToken(): string;
  setPageToken(value: string): ListSchemaRevisionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemaRevisionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemaRevisionsRequest): ListSchemaRevisionsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSchemaRevisionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemaRevisionsRequest;
  static deserializeBinaryFromReader(
    message: ListSchemaRevisionsRequest,
    reader: jspb.BinaryReader
  ): ListSchemaRevisionsRequest;
}

export namespace ListSchemaRevisionsRequest {
  export type AsObject = {
    name: string;
    view: SchemaView;
    pageSize: number;
    pageToken: string;
  };
}

export class ListSchemaRevisionsResponse extends jspb.Message {
  clearSchemasList(): void;
  getSchemasList(): Array<Schema>;
  setSchemasList(value: Array<Schema>): ListSchemaRevisionsResponse;
  addSchemas(value?: Schema, index?: number): Schema;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListSchemaRevisionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemaRevisionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemaRevisionsResponse): ListSchemaRevisionsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ListSchemaRevisionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemaRevisionsResponse;
  static deserializeBinaryFromReader(
    message: ListSchemaRevisionsResponse,
    reader: jspb.BinaryReader
  ): ListSchemaRevisionsResponse;
}

export namespace ListSchemaRevisionsResponse {
  export type AsObject = {
    schemasList: Array<Schema.AsObject>;
    nextPageToken: string;
  };
}

export class CommitSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CommitSchemaRequest;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): Schema | undefined;
  setSchema(value?: Schema): CommitSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitSchemaRequest): CommitSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CommitSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitSchemaRequest;
  static deserializeBinaryFromReader(message: CommitSchemaRequest, reader: jspb.BinaryReader): CommitSchemaRequest;
}

export namespace CommitSchemaRequest {
  export type AsObject = {
    name: string;
    schema?: Schema.AsObject;
  };
}

export class RollbackSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RollbackSchemaRequest;
  getRevisionId(): string;
  setRevisionId(value: string): RollbackSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackSchemaRequest): RollbackSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: RollbackSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackSchemaRequest;
  static deserializeBinaryFromReader(message: RollbackSchemaRequest, reader: jspb.BinaryReader): RollbackSchemaRequest;
}

export namespace RollbackSchemaRequest {
  export type AsObject = {
    name: string;
    revisionId: string;
  };
}

export class DeleteSchemaRevisionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteSchemaRevisionRequest;
  getRevisionId(): string;
  setRevisionId(value: string): DeleteSchemaRevisionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchemaRevisionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchemaRevisionRequest): DeleteSchemaRevisionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteSchemaRevisionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchemaRevisionRequest;
  static deserializeBinaryFromReader(
    message: DeleteSchemaRevisionRequest,
    reader: jspb.BinaryReader
  ): DeleteSchemaRevisionRequest;
}

export namespace DeleteSchemaRevisionRequest {
  export type AsObject = {
    name: string;
    revisionId: string;
  };
}

export class DeleteSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchemaRequest): DeleteSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchemaRequest;
  static deserializeBinaryFromReader(message: DeleteSchemaRequest, reader: jspb.BinaryReader): DeleteSchemaRequest;
}

export namespace DeleteSchemaRequest {
  export type AsObject = {
    name: string;
  };
}

export class ValidateSchemaRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ValidateSchemaRequest;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): Schema | undefined;
  setSchema(value?: Schema): ValidateSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateSchemaRequest): ValidateSchemaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidateSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateSchemaRequest;
  static deserializeBinaryFromReader(message: ValidateSchemaRequest, reader: jspb.BinaryReader): ValidateSchemaRequest;
}

export namespace ValidateSchemaRequest {
  export type AsObject = {
    parent: string;
    schema?: Schema.AsObject;
  };
}

export class ValidateSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateSchemaResponse): ValidateSchemaResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidateSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateSchemaResponse;
  static deserializeBinaryFromReader(
    message: ValidateSchemaResponse,
    reader: jspb.BinaryReader
  ): ValidateSchemaResponse;
}

export namespace ValidateSchemaResponse {
  export type AsObject = {};
}

export class ValidateMessageRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ValidateMessageRequest;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): ValidateMessageRequest;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): Schema | undefined;
  setSchema(value?: Schema): ValidateMessageRequest;
  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): ValidateMessageRequest;
  getEncoding(): Encoding;
  setEncoding(value: Encoding): ValidateMessageRequest;

  getSchemaSpecCase(): ValidateMessageRequest.SchemaSpecCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateMessageRequest): ValidateMessageRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateMessageRequest;
  static deserializeBinaryFromReader(
    message: ValidateMessageRequest,
    reader: jspb.BinaryReader
  ): ValidateMessageRequest;
}

export namespace ValidateMessageRequest {
  export type AsObject = {
    parent: string;
    name: string;
    schema?: Schema.AsObject;
    message: Uint8Array | string;
    encoding: Encoding;
  };

  export enum SchemaSpecCase {
    SCHEMA_SPEC_NOT_SET = 0,
    NAME = 2,
    SCHEMA = 3
  }
}

export class ValidateMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateMessageResponse): ValidateMessageResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateMessageResponse;
  static deserializeBinaryFromReader(
    message: ValidateMessageResponse,
    reader: jspb.BinaryReader
  ): ValidateMessageResponse;
}

export namespace ValidateMessageResponse {
  export type AsObject = {};
}

export enum SchemaView {
  SCHEMA_VIEW_UNSPECIFIED = 0,
  BASIC = 1,
  FULL = 2
}

export enum Encoding {
  ENCODING_UNSPECIFIED = 0,
  JSON = 1,
  BINARY = 2
}
