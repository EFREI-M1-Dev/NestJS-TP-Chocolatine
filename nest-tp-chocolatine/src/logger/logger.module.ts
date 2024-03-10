import {DynamicModule, Module} from "@nestjs/common";
import {Logger} from "./logger";
import {LoggerService} from "./logger.service";

@Module({})
export class LoggerModule {
  static register(options: Record<string, Logger[]>): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useValue: new LoggerService(options),
        },
      ],
      exports: [LoggerService],
    };
  }
}