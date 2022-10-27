// package: google.api
// file: google/api/resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class ResourceDescriptor extends jspb.Message {
  getType(): string;
  setType(value: string): ResourceDescriptor;
  clearPatternList(): void;
  getPatternList(): Array<string>;
  setPatternList(value: Array<string>): ResourceDescriptor;
  addPattern(value: string, index?: number): string;
  getNameField(): string;
  setNameField(value: string): ResourceDescriptor;
  getHistory(): ResourceDescriptor.History;
  setHistory(value: ResourceDescriptor.History): ResourceDescriptor;
  getPlural(): string;
  setPlural(value: string): ResourceDescriptor;
  getSingular(): string;
  setSingular(value: string): ResourceDescriptor;
  clearStyleList(): void;
  getStyleList(): Array<ResourceDescriptor.Style>;
  setStyleList(value: Array<ResourceDescriptor.Style>): ResourceDescriptor;
  addStyle(value: ResourceDescriptor.Style, index?: number): ResourceDescriptor.Style;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDescriptor): ResourceDescriptor.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResourceDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDescriptor;
  static deserializeBinaryFromReader(message: ResourceDescriptor, reader: jspb.BinaryReader): ResourceDescriptor;
}

export namespace ResourceDescriptor {
  export type AsObject = {
    type: string;
    patternList: Array<string>;
    nameField: string;
    history: ResourceDescriptor.History;
    plural: string;
    singular: string;
    styleList: Array<ResourceDescriptor.Style>;
  };

  export enum History {
    HISTORY_UNSPECIFIED = 0,
    ORIGINALLY_SINGLE_PATTERN = 1,
    FUTURE_MULTI_PATTERN = 2
  }

  export enum Style {
    STYLE_UNSPECIFIED = 0,
    DECLARATIVE_FRIENDLY = 1
  }
}

export class ResourceReference extends jspb.Message {
  getType(): string;
  setType(value: string): ResourceReference;
  getChildType(): string;
  setChildType(value: string): ResourceReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceReference): ResourceReference.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceReference;
  static deserializeBinaryFromReader(message: ResourceReference, reader: jspb.BinaryReader): ResourceReference;
}

export namespace ResourceReference {
  export type AsObject = {
    type: string;
    childType: string;
  };
}

export const resourceReference: jspb.ExtensionFieldInfo<ResourceReference>;

export const resourceDefinition: jspb.ExtensionFieldInfo<ResourceDescriptor>;

export const resource: jspb.ExtensionFieldInfo<ResourceDescriptor>;
