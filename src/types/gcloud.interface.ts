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