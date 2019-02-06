import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string,
    cooldown: number,
    maxCooldown: number
}

export function poison_cloud2(owner: Entity, target: Entity) {
    let nameAtk = 'nuvem de esporos';
    createDamageBlock(owner, target.x, target.y, nameAtk);
    createDamageBlock(owner, target.x+1, target.y, nameAtk);
    createDamageBlock(owner, target.x-1, target.y, nameAtk);
    createDamageBlock(owner, target.x, target.y+1, nameAtk);
    createDamageBlock(owner, target.x, target.y-1, nameAtk);
}