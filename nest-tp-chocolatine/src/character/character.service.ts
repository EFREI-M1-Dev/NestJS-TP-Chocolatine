import {Injectable} from "@nestjs/common";
import {Character} from "./character";

@Injectable()
export class CharacterService {
    getAllCharacters(): Character[] {
        return [
            new Character(1, 'Furina', 'Fontaine', 'Hydro', 1),
            new Character(2, 'Navia', 'Fontaine', 'Geo', 2),
            new Character(3, 'Eula', 'Mondstadt', 'Cryo', 3),
            new Character(4, 'Yelan', 'Liyue', 'Hydro'),
        ];
    }

    getCharacterById(id: number): Character {
        return this.getAllCharacters().find(character => character.getId() === id);
    }

    createCharacter(id: number, name: string, region: string, vision: string, weaponId?: number): Character {
        return new Character(id, name, region, vision, weaponId);
    }
}