// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_pubsub_v1_schema_pb = require('../../../google/pubsub/v1/schema_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_CreateSchemaRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.CreateSchemaRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.CreateSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_CreateSchemaRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.CreateSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_DeleteSchemaRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.DeleteSchemaRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.DeleteSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_DeleteSchemaRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.DeleteSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_GetSchemaRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.GetSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_GetSchemaRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSchemasRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ListSchemasRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSchemasRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.ListSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSchemasResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ListSchemasResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSchemasResponse(buffer_arg) {
  return google_pubsub_v1_schema_pb.ListSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_Schema(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.Schema)) {
    throw new Error('Expected argument of type google.pubsub.v1.Schema');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_Schema(buffer_arg) {
  return google_pubsub_v1_schema_pb.Schema.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ValidateMessageRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ValidateMessageRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ValidateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ValidateMessageRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.ValidateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ValidateMessageResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ValidateMessageResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ValidateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ValidateMessageResponse(buffer_arg) {
  return google_pubsub_v1_schema_pb.ValidateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ValidateSchemaRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ValidateSchemaRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ValidateSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ValidateSchemaRequest(buffer_arg) {
  return google_pubsub_v1_schema_pb.ValidateSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ValidateSchemaResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_schema_pb.ValidateSchemaResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ValidateSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ValidateSchemaResponse(buffer_arg) {
  return google_pubsub_v1_schema_pb.ValidateSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// Service for doing schema-related operations.
var SchemaServiceService = (exports.SchemaServiceService = {
  // Creates a schema.
  createSchema: {
    path: '/google.pubsub.v1.SchemaService/CreateSchema',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.CreateSchemaRequest,
    responseType: google_pubsub_v1_schema_pb.Schema,
    requestSerialize: serialize_google_pubsub_v1_CreateSchemaRequest,
    requestDeserialize: deserialize_google_pubsub_v1_CreateSchemaRequest,
    responseSerialize: serialize_google_pubsub_v1_Schema,
    responseDeserialize: deserialize_google_pubsub_v1_Schema
  },
  // Gets a schema.
  getSchema: {
    path: '/google.pubsub.v1.SchemaService/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.GetSchemaRequest,
    responseType: google_pubsub_v1_schema_pb.Schema,
    requestSerialize: serialize_google_pubsub_v1_GetSchemaRequest,
    requestDeserialize: deserialize_google_pubsub_v1_GetSchemaRequest,
    responseSerialize: serialize_google_pubsub_v1_Schema,
    responseDeserialize: deserialize_google_pubsub_v1_Schema
  },
  // Lists schemas in a project.
  listSchemas: {
    path: '/google.pubsub.v1.SchemaService/ListSchemas',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.ListSchemasRequest,
    responseType: google_pubsub_v1_schema_pb.ListSchemasResponse,
    requestSerialize: serialize_google_pubsub_v1_ListSchemasRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListSchemasRequest,
    responseSerialize: serialize_google_pubsub_v1_ListSchemasResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListSchemasResponse
  },
  // Deletes a schema.
  deleteSchema: {
    path: '/google.pubsub.v1.SchemaService/DeleteSchema',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.DeleteSchemaRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_DeleteSchemaRequest,
    requestDeserialize: deserialize_google_pubsub_v1_DeleteSchemaRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty
  },
  // Validates a schema.
  validateSchema: {
    path: '/google.pubsub.v1.SchemaService/ValidateSchema',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.ValidateSchemaRequest,
    responseType: google_pubsub_v1_schema_pb.ValidateSchemaResponse,
    requestSerialize: serialize_google_pubsub_v1_ValidateSchemaRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ValidateSchemaRequest,
    responseSerialize: serialize_google_pubsub_v1_ValidateSchemaResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ValidateSchemaResponse
  },
  // Validates a message against a schema.
  validateMessage: {
    path: '/google.pubsub.v1.SchemaService/ValidateMessage',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_schema_pb.ValidateMessageRequest,
    responseType: google_pubsub_v1_schema_pb.ValidateMessageResponse,
    requestSerialize: serialize_google_pubsub_v1_ValidateMessageRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ValidateMessageRequest,
    responseSerialize: serialize_google_pubsub_v1_ValidateMessageResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ValidateMessageResponse
  }
});

exports.SchemaServiceClient = grpc.makeGenericClientConstructor(SchemaServiceService);
