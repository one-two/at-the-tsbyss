import { Entity } from "../entity";
import { Glyph } from "../glyph";

export abstract class Equipment {
    owner: Entity;
    power_bonus: number;
    skill_bonus: number;
    defense_bonus: number;
    hp_bonus: number;
    name: string;
    type: string;
    expire: boolean = false;
    cooldown: number;
    max_cooldown: number
    glyph: Glyph;

    constructor(type: string) {
        this.type = type;
    }

    strike() {
    }

    what() {
        
    }
}