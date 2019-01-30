import { Entity } from "../entity";

export abstract class Enemy {
    owner: Entity;
    skill_bonus: number;

    abstract startCountDown(n : number): void;
    abstract act(): void;
}