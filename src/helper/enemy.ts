export abstract class Enemy {
    abstract startCountDown(n : number): void;
    abstract act(): void;
}