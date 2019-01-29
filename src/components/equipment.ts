import { Entity } from "../entity";

export abstract class Equipment {
    owner: Entity;
    power_bonus: number;
    skill_bonus: number;
    defense_bonus: number;
    hp_bonus: number;

    constructor() {
    }

    strike() {
    }

    what() {
        
    }
}