import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {Character} from "./character/character";
import {CharacterService} from "./character/character.service";

@Controller()
export class AppController {

  constructor(private readonly appService: AppService, private characterService: CharacterService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('character/:id')
    getCharacter(@Param('id') id: string): Character {
        return this.characterService.getCharacter(+id);
    }
}
