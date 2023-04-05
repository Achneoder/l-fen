#!/usr/bin/env bash

mkdir -p ${PWD}/proto/google/protobuf
mkdir -p ${PWD}/proto/google/api
mkdir -p ${PWD}/proto/google/cloud
mkdir -p ${PWD}/proto/google/pubsub/v1
mkdir -p ${PWD}/src/types/protos

cp ${PWD}/node_modules/google-gax/build/protos/google/protobuf/descriptor.proto ./proto/google/protobuf/descriptor.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/protobuf/duration.proto ./proto/google/protobuf/duration.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/protobuf/empty.proto ./proto/google/protobuf/empty.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/protobuf/field_mask.proto ./proto/google/protobuf/field_mask.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/protobuf/timestamp.proto ./proto/google/protobuf/timestamp.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/api/http.proto ./proto/google/api/http.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/api/annotations.proto ./proto/google/api/annotations.proto
cp ${PWD}/node_modules/google-gax/build/protos/google/api/launch_stage.proto ./proto/google/api/launch_stage.proto
cp ${PWD}/node_modules/google-gax/build/protos/google/api/client.proto ./proto/google/api/client.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/api/field_behavior.proto ./proto/google/api/field_behavior.proto 
cp ${PWD}/node_modules/google-gax/build/protos/google/api/resource.proto ./proto/google/api/resource.proto 
cp ${PWD}/node_modules/@google-cloud/pubsub/build/protos/google/cloud/common_resources.proto ./proto/google/cloud/common_resources.proto
cp ${PWD}/node_modules/@google-cloud/pubsub/build/protos/google/pubsub/v1/schema.proto ./proto/google/pubsub/v1/schema.proto 
cp ${PWD}/node_modules/@google-cloud/pubsub/build/protos/google/pubsub/v1/pubsub.proto ./proto/google/pubsub/v1/pubsub.proto

# grpc-js
# JavaScript code generating
${PWD}/node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${PWD}/src/types/protos \
--grpc_out=grpc_js:${PWD}/src/types/protos \
-I ${PWD}/proto \
${PWD}/proto/google/protobuf/*.proto \
${PWD}/proto/google/api/*.proto \
${PWD}/proto/google/cloud/*.proto \
${PWD}/proto/google/pubsub/v1/*.proto

${PWD}/node_modules/.bin/grpc_tools_node_protoc \
--plugin=protoc-gen-ts=${PWD}/node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:${PWD}/src/types/protos \
-I ${PWD}/proto \
${PWD}/proto/google/protobuf/*.proto \
${PWD}/proto/google/api/*.proto \
${PWD}/proto/google/cloud/*.proto \
${PWD}/proto/google/pubsub/v1/*.proto

rm -r ${PWD}/proto