// package: google.pubsub.v1
// file: google/pubsub/v1/schema.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as google_pubsub_v1_schema_pb from '../../../google/pubsub/v1/schema_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

interface ISchemaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSchema: ISchemaServiceService_ICreateSchema;
  getSchema: ISchemaServiceService_IGetSchema;
  listSchemas: ISchemaServiceService_IListSchemas;
  deleteSchema: ISchemaServiceService_IDeleteSchema;
  validateSchema: ISchemaServiceService_IValidateSchema;
  validateMessage: ISchemaServiceService_IValidateMessage;
}

interface ISchemaServiceService_ICreateSchema
  extends grpc.MethodDefinition<google_pubsub_v1_schema_pb.CreateSchemaRequest, google_pubsub_v1_schema_pb.Schema> {
  path: '/google.pubsub.v1.SchemaService/CreateSchema';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.CreateSchemaRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.CreateSchemaRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_schema_pb.Schema>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.Schema>;
}
interface ISchemaServiceService_IGetSchema
  extends grpc.MethodDefinition<google_pubsub_v1_schema_pb.GetSchemaRequest, google_pubsub_v1_schema_pb.Schema> {
  path: '/google.pubsub.v1.SchemaService/GetSchema';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.GetSchemaRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.GetSchemaRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_schema_pb.Schema>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.Schema>;
}
interface ISchemaServiceService_IListSchemas
  extends grpc.MethodDefinition<
    google_pubsub_v1_schema_pb.ListSchemasRequest,
    google_pubsub_v1_schema_pb.ListSchemasResponse
  > {
  path: '/google.pubsub.v1.SchemaService/ListSchemas';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ListSchemasRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ListSchemasRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ListSchemasResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ListSchemasResponse>;
}
interface ISchemaServiceService_IDeleteSchema
  extends grpc.MethodDefinition<google_pubsub_v1_schema_pb.DeleteSchemaRequest, google_protobuf_empty_pb.Empty> {
  path: '/google.pubsub.v1.SchemaService/DeleteSchema';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.DeleteSchemaRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.DeleteSchemaRequest>;
  responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
  responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISchemaServiceService_IValidateSchema
  extends grpc.MethodDefinition<
    google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    google_pubsub_v1_schema_pb.ValidateSchemaResponse
  > {
  path: '/google.pubsub.v1.SchemaService/ValidateSchema';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ValidateSchemaRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ValidateSchemaRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ValidateSchemaResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ValidateSchemaResponse>;
}
interface ISchemaServiceService_IValidateMessage
  extends grpc.MethodDefinition<
    google_pubsub_v1_schema_pb.ValidateMessageRequest,
    google_pubsub_v1_schema_pb.ValidateMessageResponse
  > {
  path: '/google.pubsub.v1.SchemaService/ValidateMessage';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ValidateMessageRequest>;
  requestDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ValidateMessageRequest>;
  responseSerialize: grpc.serialize<google_pubsub_v1_schema_pb.ValidateMessageResponse>;
  responseDeserialize: grpc.deserialize<google_pubsub_v1_schema_pb.ValidateMessageResponse>;
}

export const SchemaServiceService: ISchemaServiceService;

export interface ISchemaServiceServer extends grpc.UntypedServiceImplementation {
  createSchema: grpc.handleUnaryCall<google_pubsub_v1_schema_pb.CreateSchemaRequest, google_pubsub_v1_schema_pb.Schema>;
  getSchema: grpc.handleUnaryCall<google_pubsub_v1_schema_pb.GetSchemaRequest, google_pubsub_v1_schema_pb.Schema>;
  listSchemas: grpc.handleUnaryCall<
    google_pubsub_v1_schema_pb.ListSchemasRequest,
    google_pubsub_v1_schema_pb.ListSchemasResponse
  >;
  deleteSchema: grpc.handleUnaryCall<google_pubsub_v1_schema_pb.DeleteSchemaRequest, google_protobuf_empty_pb.Empty>;
  validateSchema: grpc.handleUnaryCall<
    google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    google_pubsub_v1_schema_pb.ValidateSchemaResponse
  >;
  validateMessage: grpc.handleUnaryCall<
    google_pubsub_v1_schema_pb.ValidateMessageRequest,
    google_pubsub_v1_schema_pb.ValidateMessageResponse
  >;
}

export interface ISchemaServiceClient {
  createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
  validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
  validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
}

export class SchemaServiceClient extends grpc.Client implements ISchemaServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public createSchema(
    request: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public getSchema(
    request: google_pubsub_v1_schema_pb.GetSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.Schema) => void
  ): grpc.ClientUnaryCall;
  public listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  public listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  public listSchemas(
    request: google_pubsub_v1_schema_pb.ListSchemasRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ListSchemasResponse) => void
  ): grpc.ClientUnaryCall;
  public deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public deleteSchema(
    request: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
  ): grpc.ClientUnaryCall;
  public validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  public validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  public validateSchema(
    request: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateSchemaResponse) => void
  ): grpc.ClientUnaryCall;
  public validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
  public validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
  public validateMessage(
    request: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: google_pubsub_v1_schema_pb.ValidateMessageResponse) => void
  ): grpc.ClientUnaryCall;
}
