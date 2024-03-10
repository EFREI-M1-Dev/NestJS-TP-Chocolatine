import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Logger} from "./logger/logger";
import {LoggerMiddleware} from "./logger/logger.middleware";
import {CharacterController} from "./character/character.controller";
import {WeaponController} from "./weapon/weapon.controller";
import {CharacterModule} from "./character/character.module";
import {WeaponModule} from "./weapon/weapon.module";
import {LoggerModule} from "./logger/logger.module";

const optionsLog: Record<string, Logger[]> = {
  logs: LoggerMiddleware.getLogs()
}

@Module({
  controllers: [AppController, CharacterController, WeaponController],
  imports: [CharacterModule, WeaponModule, LoggerModule.register(optionsLog)],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
