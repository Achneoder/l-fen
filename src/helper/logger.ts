import { createLogger, Logger as LoggerInstance, format } from 'winston';
import { Console } from 'winston/lib/winston/transports';

export class Logger {
  private static loggerInstance: LoggerInstance;

  public static getLogger(): LoggerInstance {
    if (!Logger.loggerInstance) {
      Logger.loggerInstance = createLogger({
        format: format.combine(
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
