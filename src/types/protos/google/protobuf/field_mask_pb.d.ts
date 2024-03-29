// package: google.protobuf
// file: google/protobuf/field_mask.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class FieldMask extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): FieldMask;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldMask.AsObject;
  static toObject(includeInstance: boolean, msg: FieldMask): FieldMask.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: FieldMask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldMask;
  static deserializeBinaryFromReader(message: FieldMask, reader: jspb.BinaryReader): FieldMask;
}

export namespace FieldMask {
  export type AsObject = {
    pathsList: Array<string>;
  };
}
