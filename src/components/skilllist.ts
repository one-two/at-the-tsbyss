import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string;
    cooldown: number;
    maxCooldown: number;

}

export function poison_cloud2(owner: Entity, target: Entity, multi: number) {
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