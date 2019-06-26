import { Entity } from "../entity";
import { Glyph } from "../glyph";
import { randperc } from "../helper/randperc";
import { randint } from "../helper/randint";

export abstract class Equipment {
    owner: Entity;
    power_bonus: number;
    skill_bonus: number;
    defense_bonus: number;
    hp_bonus: number;
    alpha: number;
    name: string;
    fullname: string;
    type: string;
    expire: boolean = false;
    cooldown: number;
    max_cooldown: number;
    prefix: string = '';
    glyph: Glyph;

    constructor(type: string) {
        this.type = type;
    }

    strike() {
    }

    what() {
        
    }
}