export class Weapon {
    private readonly id: number;
    private readonly name: string;
    private readonly type: string;
    private readonly damage: number;

    constructor(id: number, name: string, type: string, damage: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.damage = damage;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }

    getDamage(): number {
        return this.damage;
    }
}