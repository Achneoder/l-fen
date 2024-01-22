import { createLogger, format, Logger as LoggerInstance } from 'winston';
import { Console } from 'winston/lib/winston/transports';
import { getConfig } from '../parser';

export class Logger {
  private static readonly config = getConfig();
  private static loggerInstance: LoggerInstance;

  public static getLogger(): LoggerInstance {
    if (!Logger.loggerInstance) {
      Logger.loggerInstance = createLogger({
        level: Logger.config.loglevel || 'info',
        format: format.combine(
          format.colorize(),
          format.timestamp(),
          format.splat(),
          format.printf(
            ({ level, message, label, timestamp }) =>
              `${timestamp}${label ? ' [' + label + ']' : ''} ${level}: ${message}`
          )
        ),
        transports: [new Console()]
      });
    }
    return Logger.loggerInstance;
  }
}
