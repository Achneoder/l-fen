export type FunctionResponseCallback = (response: FunctionResponse) => void;

export class FunctionResponse {
  statusCode = 200;
  body = undefined;
  headers: Record<string, string> = {};
  private readonly cb: FunctionResponseCallback;

  constructor(cb: FunctionResponseCallback) {
    this.cb = cb;
  }

  public status(statusCode: number): FunctionResponse {
    this.statusCode = statusCode;
    return this;
  }

  public send(data: Record<string, unknown>): void {
    this.body = data;
    this.cb(this);
  }

  public set(header: string, value: string): void {
    this.headers[header] = value;
    this.headers[header.toLowerCase()] = value;
  }

  public get(header: string): string {
    return this.headers[header];
  }

  public json(data: Record<string, unknown>): void {
    this.body = JSON.parse(JSON.stringify(data));
    this.cb(this);
  }
}
