import { Entity } from "../entity";
import { Glyph } from "../glyph";

export abstract class Equipment {
    owner: Entity;
    power_bonus: number;
    skill_bonus: number;
    defense_bonus: number;
    hp_bonus: number;
    name: string;
    expire: boolean = false;
    glyph: Glyph;

    constructor() {
    }

    strike() {
    }

    what() {
        
    }
}