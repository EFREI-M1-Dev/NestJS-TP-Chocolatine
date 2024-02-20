import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CharacterService} from "./character/character.service";
import {CharacterController} from "./character/character.controller";

@Module({
  imports: [],
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService],
})
export class AppModule {}
