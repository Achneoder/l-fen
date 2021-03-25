export interface BucketEvent {
  bucket: string;
  name: string;
}

export interface ObjectListQuery {
  delimiter?: string;
  endOffset?: string;
  includeTrailingDelimiter?: boolean;
  maxResults?: number;
  pageToken?: string;
  prefix?: string;
  projection?: 'full' | 'noAcl';
  startOffset?: string;
  versions?: boolean;
}

/**
 * Reduced description of a GCP Object.
 * @see https://cloud.google.com/storage/docs/json_api/v1/objects#resource
 */
export interface GcpObject {
  kind: string;
  id: string;
  selfLink: string;
  name: string;
  bucket: string;
  timeCreated: string;
  updated: string;
  size: number;
  metadata: Record<string, unknown>;
  md5Hash: string;
  crc32c: string;
}
