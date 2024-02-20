import {CharacterService} from "./character.service";
import {Controller, Get, Param} from "@nestjs/common";
import {Character} from "./character";

@Controller()
export class CharacterController {
    constructor(private readonly characterService: CharacterService) {}
    @Get(':id')
    getCharacter(@Param('id') id: string): Character {
        return this.characterService.getCharacter(+id);
    }
}