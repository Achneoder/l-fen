import path from 'path';
import { Logger } from '../helper/logger';
import { Config } from '../types/config.interface';
import { LFenExtension } from '../types/extension.interface';

export class ExtensionCollector {
  private readonly extensions: Record<string, LFenExtension>;

  constructor(config: Config) {
    this.extensions =
      config.extensions?.reduce((agg: Record<string, LFenExtension>, extensionPath: string) => {
        agg[extensionPath] = require(path.resolve(extensionPath)) as LFenExtension;
        return agg;
      }, {}) || {};
  }

  private resolveExtension(path: string, extension: LFenExtension): Promise<void> {
    const logger = Logger.getLogger();
    return Promise.resolve(extension.initialize()).then(() => {
      logger.info('executed extension %s', path, { lable: 'ExtensionCollector:resolveExtension' });
    });
  }

  public async executeExtensions(): Promise<void> {
    await Promise.all(
      Object.entries(this.extensions).map(([path, extension]) => this.resolveExtension(path, extension))
    );
  }
}
