import {Character, CHARACTERS} from "./character";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CharacterService {
    getCharacter(id: number): Character {
        return CHARACTERS.find(character => character.id === id)
    }
}