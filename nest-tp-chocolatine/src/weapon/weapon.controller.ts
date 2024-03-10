import {Controller, Get, Param} from "@nestjs/common";
import {WeaponService} from "./weapon.service";
import {Weapon} from "./weapon";

@Controller()
export class WeaponController {
    constructor(
        private readonly WeaponService: WeaponService,
    ) {}

    @Get('weapons')
    getAllWeapons(): Weapon[] {
        return this.WeaponService.getAllWeapons();
    }

    @Get('weapons/:id')
    getWeaponById(@Param('id') id: string): Weapon | null {
        return this.WeaponService.getWeaponById(parseInt(id)) || null;
    }
}