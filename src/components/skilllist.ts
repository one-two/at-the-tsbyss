import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string;
    cooldown: number;
    maxCooldown: number;

}

export function poison_cloud(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'nuvem de esporos';
    createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x, target.y-1, nameAtk, damageMultiplier, "ꙮ");
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

export function smash(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'socao';
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-1, owner.y-4, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+1, owner.y-4, nameAtk, damageMultiplier);
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-1, owner.y+4, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+1, owner.y+4, nameAtk, damageMultiplier);
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-4, owner.y+1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x-4, owner.y-1, nameAtk, damageMultiplier);
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+4, owner.y+1, nameAtk, damageMultiplier);
        createDamageBlock(owner, owner.x+4, owner.y-1, nameAtk, damageMultiplier);
    }
}

export function windBlow(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'nuvem de esporos';
    createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y-1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y-1, nameAtk, damageMultiplier, "ꙮ");
}

export function snipe(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'tiro';
    let dx = target.x - owner.x;
    let dy = target.y - owner.y;
    if ( Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
            createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, "↓",6);
            createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, "↓",7);
            createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, "↓",8);
            createDamageBlock(owner, owner.x, owner.y+5, nameAtk, damageMultiplier, "↓",9);
            createDamageBlock(owner, owner.x, owner.y+6, nameAtk, damageMultiplier, "↓",10);
            createDamageBlock(owner, owner.x, owner.y+7, nameAtk, damageMultiplier, "↓",11);
            createDamageBlock(owner, owner.x, owner.y+8, nameAtk, damageMultiplier, "↓",12);
            createDamageBlock(owner, owner.x, owner.y+9, nameAtk, damageMultiplier, "↓",13);
            createDamageBlock(owner, owner.x, owner.y+10, nameAtk, damageMultiplier, "↓",14);
            createDamageBlock(owner, owner.x, owner.y+11, nameAtk, damageMultiplier, "↓",15);
        } else {
            createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, "↑", 6);
            createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier,  "↑", 7);
            createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier,  "↑", 8);
            createDamageBlock(owner, owner.x, owner.y-5, nameAtk, damageMultiplier,  "↑", 9);
            createDamageBlock(owner, owner.x, owner.y-6, nameAtk, damageMultiplier,  "↑", 10);
            createDamageBlock(owner, owner.x, owner.y-7, nameAtk, damageMultiplier,  "↑", 11);
            createDamageBlock(owner, owner.x, owner.y-8, nameAtk, damageMultiplier,  "↑", 12);
            createDamageBlock(owner, owner.x, owner.y-9, nameAtk, damageMultiplier,  "↑", 13);
            createDamageBlock(owner, owner.x, owner.y-10, nameAtk, damageMultiplier,  "↑", 14);
            createDamageBlock(owner, owner.x, owner.y-11, nameAtk, damageMultiplier,  "↑", 15);
        }
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if ( dx > 0) {
            createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier,"→", 6);
            createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier,"→", 7);
            createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier,"→", 8);
            createDamageBlock(owner, owner.x+5, owner.y, nameAtk, damageMultiplier,"→", 9);
            createDamageBlock(owner, owner.x+6, owner.y, nameAtk, damageMultiplier,"→", 10);
            createDamageBlock(owner, owner.x+7, owner.y, nameAtk, damageMultiplier,"→", 11);
            createDamageBlock(owner, owner.x+8, owner.y, nameAtk, damageMultiplier,"→", 12);
            createDamageBlock(owner, owner.x+9, owner.y, nameAtk, damageMultiplier,"→", 13);
            createDamageBlock(owner, owner.x+10, owner.y, nameAtk, damageMultiplier,"→", 14);
            createDamageBlock(owner, owner.x+11, owner.y, nameAtk, damageMultiplier,"→", 15);
        } else {
            createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, "←",6);
            createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, "←",7);
            createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, "←",8);
            createDamageBlock(owner, owner.x-5, owner.y, nameAtk, damageMultiplier, "←",9);
            createDamageBlock(owner, owner.x-6, owner.y, nameAtk, damageMultiplier, "←",10);
            createDamageBlock(owner, owner.x-7, owner.y, nameAtk, damageMultiplier, "←",11);
            createDamageBlock(owner, owner.x-8, owner.y, nameAtk, damageMultiplier, "←",12);
            createDamageBlock(owner, owner.x-9, owner.y, nameAtk, damageMultiplier, "←",13);
            createDamageBlock(owner, owner.x-10, owner.y, nameAtk, damageMultiplier, "←",14);
            createDamageBlock(owner, owner.x-11, owner.y, nameAtk, damageMultiplier, "←",15);
        }
    }
}