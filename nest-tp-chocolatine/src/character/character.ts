import {RARITIES, Rarity} from "./rarity";

export class Character {
    id: number;
    name:  string;
    image: string;
    rarity: Rarity;
}

export const CHARACTERS: Character[] = [
    { id: 1, name: 'Slime', image: './public/characters/slime.png', rarity: RARITIES['Common'] },
]