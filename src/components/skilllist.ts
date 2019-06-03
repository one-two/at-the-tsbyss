import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string;
    cooldown: number;
    maxCooldown: number;

}

export function poison_cloud(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'nuvem de esporos';
    createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, target.x+1, target.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, target.x-1, target.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, target.x, target.y+1, nameAtk, damageMultiplier);
    createDamageBlock(owner, target.x, target.y-1, nameAtk, damageMultiplier);
}

export function poison_shield(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'escudo de esporos';
    createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier);
}

export function punch(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'socao';
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier);
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier);
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier);
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier);
    }
}

export function snipe(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'tiro';
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, 6);
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, 9);
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier, 12);
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier, 15);
    }
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, 6);
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, 9);
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, 12);
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, 15);
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, 6);
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, 9);
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, 12);
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, 15);
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier, 6);
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier, 9);
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier, 12);
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier, 15);
    }
}