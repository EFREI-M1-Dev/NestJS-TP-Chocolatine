import {Injectable} from "@nestjs/common";
import {Weapon} from "./weapon";

@Injectable()
export class WeaponService {
    getAllWeapons(): Weapon[] {
        return [
            new Weapon(1, 'Splendor of Tranquil Waters', 'Sword', 100),
            new Weapon(2, 'Decret', 'Claymore', 200),
            new Weapon(3, 'Song of Broken Pines', 'Claymore', 150),
        ];
    }

    getWeaponById(id: number): Weapon {
        return this.getAllWeapons().find(weapon => weapon.getId() === id);
    }
}