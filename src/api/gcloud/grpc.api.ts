import { Server, ServerCredentials } from '@grpc/grpc-js';
import { PublisherService } from '../../types/protos/google/pubsub/v1/pubsub_grpc_pb';
import { PublisherServer } from './pubsub/publisher.server';

export function mockEndpoints(port = 50051): void {
  const server = new Server();
  server.addService(PublisherService, new PublisherServer());
  server.bindAsync(`localhost:${port}`, ServerCredentials.createInsecure(), () => {
    server.start();
  });
}
