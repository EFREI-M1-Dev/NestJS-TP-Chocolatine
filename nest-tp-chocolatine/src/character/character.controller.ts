import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {Character} from "./character";
import {CharacterService} from "./character.service";
@Controller()
export class CharacterController {
    constructor(
        private readonly CharacterService: CharacterService,
    ) {}

    @Get('characters')
    getAllCharacters(): Character[] {
        return this.CharacterService.getAllCharacters();
    }

    @Get('characters/:id')
    getCharacterById(@Param('id') id: string): Character {
        return this.CharacterService.getCharacterById(parseInt(id));
    }

    @Post('characters')
    createCharacter(@Body() character: any): Character {
        const newId = this.getAllCharacters().length > 0 ? Math.max(...this.getAllCharacters().map(character => character.getId())) + 1 : 1;
        return this.CharacterService.createCharacter(newId, character.name, character.region, character.vision, character.weaponId);
    }
}