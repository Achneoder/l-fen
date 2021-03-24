import {ServiceConfig} from "../types/config.interface";

export abstract class Service {

  constructor(private readonly serviceConfig: ServiceConfig) {
  }



}