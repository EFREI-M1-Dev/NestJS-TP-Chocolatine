export class Character {
    private readonly id: number;
    private readonly name: string;
    private readonly region: string;
    private readonly vision: string;
    private readonly weaponId?: number;

    constructor(id: number, name: string, region: string, vision: string, weaponId?: number) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.vision = vision;
        this.weaponId = weaponId;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getRegion(): string {
        return this.region;
    }

    getVision(): string {
        return this.vision;
    }

    getWeaponId(): number | undefined {
        return this.weaponId;
    }
}