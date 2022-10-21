import { HttpServiceRequest } from '../types/service-event.interface';

export class FunctionRequest implements HttpServiceRequest {
  [key: string]: unknown;
  headers: Record<string, string>;
  body: Record<string, unknown>;
  query: Record<string, string>;
  url: string;
  method: string;
  path: string;

  constructor(private readonly event: HttpServiceRequest) {
    this.headers = event.headers;
    this.body = event.body;
    this.query = event.query;
    this.url = event.url;
    this.method = event.method;
  }

  public get(header: string): string {
    return this.headers[header.toLowerCase()];
  }
}
