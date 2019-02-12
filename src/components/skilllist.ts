import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string;
    cooldown: number;
    maxCooldown: number;

}

export function poison_cloud(owner: Entity, target: Entity, multi: number) {
    let nameAtk = 'nuvem de esporos';
    createDamageBlock(owner, target.x, target.y, nameAtk, multi);
    createDamageBlock(owner, target.x+1, target.y, nameAtk, multi);
    createDamageBlock(owner, target.x-1, target.y, nameAtk, multi);
    createDamageBlock(owner, target.x, target.y+1, nameAtk, multi);
    createDamageBlock(owner, target.x, target.y-1, nameAtk, multi);
}

export function poison_shield(owner: Entity, target: Entity, multi: number) {
    let nameAtk = 'escudo de esporos';
    createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, multi);
    createDamageBlock(owner, owner.x+1, owner.y, nameAtk, multi);
    createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, multi);
    createDamageBlock(owner, owner.x, owner.y+1, nameAtk, multi);
    createDamageBlock(owner, owner.x, owner.y-1, nameAtk, multi);
    createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, multi);
    createDamageBlock(owner, owner.x-1, owner.y, nameAtk, multi);
    createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, multi);
}

export function punch(owner: Entity, target: Entity, multi: number) {
    let nameAtk = 'socao';
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, multi);
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, multi);
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, multi);
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, multi);
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, multi);
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, multi);
    }
}