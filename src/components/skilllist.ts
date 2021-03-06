import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";

export interface skilllist {
    name: string;
    cooldown: number;
    maxCooldown: number;

}

export function poison_cloud(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'spore cloud';
    createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x, target.y-1, nameAtk, damageMultiplier, "ꙮ");
}

export function poison_shield(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'spore shield';
    createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier);
}

export function hug(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'hug';
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier, '❤');
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, '❤');
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, '❤');
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier, '❤');
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier, '❤');
    }
}

export function punch(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'smite';
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
    let nameAtk = 'smash';
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-1, owner.y-4, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+1, owner.y-4, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-1, owner.y+4, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+1, owner.y+4, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-4, owner.y+1, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x-4, owner.y-1, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+4, owner.y+1, nameAtk, damageMultiplier, '✶');
        createDamageBlock(owner, owner.x+4, owner.y-1, nameAtk, damageMultiplier, '✶');
    }
}

export function windBlow(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'wind blow';
    createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y-1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x-1, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock(owner, target.x+1, target.y-1, nameAtk, damageMultiplier, "ꙮ");
}

export function snipe(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'shot';
    let dx = target.x - owner.x;
    let dy = target.y - owner.y;
    let wall = false;
    if ( Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, "↓",6);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, "↓",7);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, "↓",8);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+5, nameAtk, damageMultiplier, "↓",9);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+6, nameAtk, damageMultiplier, "↓",10);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+7, nameAtk, damageMultiplier, "↓",11);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+8, nameAtk, damageMultiplier, "↓",12);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+9, nameAtk, damageMultiplier, "↓",13);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+10, nameAtk, damageMultiplier, "↓",14);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+11, nameAtk, damageMultiplier, "↓",15);
        } else {
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, "↑", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier,  "↑", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier,  "↑", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-5, nameAtk, damageMultiplier,  "↑", 9);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-6, nameAtk, damageMultiplier,  "↑", 10);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-7, nameAtk, damageMultiplier,  "↑", 11);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-8, nameAtk, damageMultiplier,  "↑", 12);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-9, nameAtk, damageMultiplier,  "↑", 13);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-10, nameAtk, damageMultiplier,  "↑", 14);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-11, nameAtk, damageMultiplier,  "↑", 15);
        }
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if ( dx > 0) {
            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier,"→", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier,"→", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier,"→", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+5, owner.y, nameAtk, damageMultiplier,"→", 9);
            if (!wall) wall = createDamageBlock(owner, owner.x+6, owner.y, nameAtk, damageMultiplier,"→", 10);
            if (!wall) wall = createDamageBlock(owner, owner.x+7, owner.y, nameAtk, damageMultiplier,"→", 11);
            if (!wall) wall = createDamageBlock(owner, owner.x+8, owner.y, nameAtk, damageMultiplier,"→", 12);
            if (!wall) wall = createDamageBlock(owner, owner.x+9, owner.y, nameAtk, damageMultiplier,"→", 13);
            if (!wall) wall = createDamageBlock(owner, owner.x+10, owner.y, nameAtk, damageMultiplier,"→", 14);
            if (!wall) wall = createDamageBlock(owner, owner.x+11, owner.y, nameAtk, damageMultiplier,"→", 15);
        } else {
            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, "←",6);
            if (!wall) wall = createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, "←",7);
            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, "←",8);
            if (!wall) wall = createDamageBlock(owner, owner.x-5, owner.y, nameAtk, damageMultiplier, "←",9);
            if (!wall) wall = createDamageBlock(owner, owner.x-6, owner.y, nameAtk, damageMultiplier, "←",10);
            if (!wall) wall = createDamageBlock(owner, owner.x-7, owner.y, nameAtk, damageMultiplier, "←",11);
            if (!wall) wall = createDamageBlock(owner, owner.x-8, owner.y, nameAtk, damageMultiplier, "←",12);
            if (!wall) wall = createDamageBlock(owner, owner.x-9, owner.y, nameAtk, damageMultiplier, "←",13);
            if (!wall) wall = createDamageBlock(owner, owner.x-10, owner.y, nameAtk, damageMultiplier, "←",14);
            if (!wall) wall = createDamageBlock(owner, owner.x-11, owner.y, nameAtk, damageMultiplier, "←",15);
        }
    }
}

export function flamestrike(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'flamestrike'
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x-2, owner.y-1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-2, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+2, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y+2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y-2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y-2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y+2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier, '⽕');
    }
}

export function bite(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'bite'
    if (owner.face == 'n') {
        createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier, '✖');

        createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier, '✖');
    }
    if (owner.face == 's') {
        createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier, '✖');

        createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, '✖');
    }
    if (owner.face == 'w') {
        createDamageBlock(owner, owner.x-1, owner.y+1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x-1, owner.y-1, nameAtk, damageMultiplier, '✖');

        createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, '✖');
    }
    if (owner.face == 'e') {
        createDamageBlock(owner, owner.x+1, owner.y-1, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier, '✖');
        createDamageBlock(owner, owner.x+1, owner.y+1, nameAtk, damageMultiplier, '✖');

        createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier, '✖');
    }
}


export function firebreath(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'firebreath';
    let dx = target.x - owner.x;
    let dy = target.y - owner.y;
    let wall = false;
    if ( Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+1, nameAtk, damageMultiplier, "⮇",5);

            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y+2, nameAtk, damageMultiplier, "⮇",6);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+2, nameAtk, damageMultiplier, "⮇",6);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y+2, nameAtk, damageMultiplier, "⮇",6);

            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y+3, nameAtk, damageMultiplier, "⮇",7);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+3, nameAtk, damageMultiplier, "⮇",7);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y+3, nameAtk, damageMultiplier, "⮇",7);

            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y+4, nameAtk, damageMultiplier, "⮇",9);
            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y+4, nameAtk, damageMultiplier, "⮇",9);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y+4, nameAtk, damageMultiplier, "⮇",9);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y+4, nameAtk, damageMultiplier, "⮇",9);
            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y+4, nameAtk, damageMultiplier, "⮇",9);
        } else {
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-1, nameAtk, damageMultiplier, "⮅", 5);

            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y-2, nameAtk, damageMultiplier,  "⮅", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-2, nameAtk, damageMultiplier,  "⮅", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y-2, nameAtk, damageMultiplier,  "⮅", 6);

            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y-3, nameAtk, damageMultiplier,  "⮅", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-3, nameAtk, damageMultiplier,  "⮅", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y-3, nameAtk, damageMultiplier,  "⮅", 7);

            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y-4, nameAtk, damageMultiplier,  "⮅", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y-4, nameAtk, damageMultiplier,  "⮅", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x, owner.y-4, nameAtk, damageMultiplier,  "⮅", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y-4, nameAtk, damageMultiplier,  "⮅", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y-4, nameAtk, damageMultiplier,  "⮅", 8);
        }
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if ( dx > 0) {
            let l = 0;
            let r = 0;
            if (!wall) wall = createDamageBlock(owner, owner.x+1, owner.y, nameAtk, damageMultiplier,"⮆", 5);

            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y+1, nameAtk, damageMultiplier,"⮆", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y, nameAtk, damageMultiplier,"⮆", 6);
            if (!wall) wall = createDamageBlock(owner, owner.x+2, owner.y-1, nameAtk, damageMultiplier,"⮆", 6);

            if (!wall) wall = createDamageBlock(owner, owner.x+3, owner.y+1, nameAtk, damageMultiplier,"⮆", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x+3, owner.y, nameAtk, damageMultiplier,"⮆", 7);
            if (!wall) wall = createDamageBlock(owner, owner.x+3, owner.y-1, nameAtk, damageMultiplier,"⮆", 7);

            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y+2, nameAtk, damageMultiplier,"⮆", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y+1, nameAtk, damageMultiplier,"⮆", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y, nameAtk, damageMultiplier,"⮆", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y-1, nameAtk, damageMultiplier,"⮆", 8);
            if (!wall) wall = createDamageBlock(owner, owner.x+4, owner.y-2, nameAtk, damageMultiplier,"⮆", 8);
        } else {
            if (!wall) wall = createDamageBlock(owner, owner.x-1, owner.y, nameAtk, damageMultiplier, "⮄",5);

            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y+1, nameAtk, damageMultiplier, "⮄",6);
            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y, nameAtk, damageMultiplier, "⮄",6);
            if (!wall) wall = createDamageBlock(owner, owner.x-2, owner.y-1, nameAtk, damageMultiplier, "⮄",6);

            if (!wall) wall = createDamageBlock(owner, owner.x-3, owner.y+1, nameAtk, damageMultiplier, "⮄",7);
            if (!wall) wall = createDamageBlock(owner, owner.x-3, owner.y, nameAtk, damageMultiplier, "⮄",7);
            if (!wall) wall = createDamageBlock(owner, owner.x-3, owner.y-1, nameAtk, damageMultiplier, "⮄",7);

            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y+2, nameAtk, damageMultiplier, "⮄",8);
            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y+1, nameAtk, damageMultiplier, "⮄",8);
            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y, nameAtk, damageMultiplier, "⮄",8);
            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y-1, nameAtk, damageMultiplier, "⮄",8);
            if (!wall) wall = createDamageBlock(owner, owner.x-4, owner.y-2, nameAtk, damageMultiplier, "⮄",8);
        }
    }
}