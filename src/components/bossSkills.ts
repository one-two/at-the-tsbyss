import { createDamageBlock } from "../helper/createDamageBlock";
import { Entity } from "../entity";
import { randint } from "../helper/randint";


export function angel_ring(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'angel ring';
    let range = 0
    let rx = target.x;
    let ry = target.y;
    let hole = randint(0,7);
    let ring = setInterval(() => {
        if (hole != 0) createDamageBlock(owner, rx, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 1) createDamageBlock(owner, rx, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 2) createDamageBlock(owner, rx-4+range, ry, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 3) createDamageBlock(owner, rx+4-range, ry, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 4) createDamageBlock(owner, rx-4+range, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 5) createDamageBlock(owner, rx+4-range, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 6) createDamageBlock(owner, rx-4+range, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 7) createDamageBlock(owner, rx+4-range, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        range +=1;
        if (range > 4) clearInterval(ring);
    }, 400)
}


export function angel_tri(owner: Entity, target: Entity, damageMultiplier: number) {
    let nameAtk = 'angel lance';
    let range = 0
    let rx = target.x;
    let ry = target.y;
    let ownerx = owner.x;
    let ownery = owner.y;
    let slope = (ry-ownery)/(rx-ownerx);
    let b = ry-(rx*slope);
    let image = [];
    // distancia vai ser iterações de x na formula linear (arredondar para cima)
    // rodar até (y || x) == (fim da tela)
    // tratar casos colineares ry = oy e rx = ox


    let hole = randint(0,7);
    let ring = setInterval(() => {
        if (hole != 0) createDamageBlock(owner, rx, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 1) createDamageBlock(owner, rx, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 2) createDamageBlock(owner, rx-4+range, ry, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 3) createDamageBlock(owner, rx+4-range, ry, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 4) createDamageBlock(owner, rx-4+range, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 5) createDamageBlock(owner, rx+4-range, ry-4+range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 6) createDamageBlock(owner, rx-4+range, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        if (hole != 7) createDamageBlock(owner, rx+4-range, ry+4-range, nameAtk, damageMultiplier, "☼", 4);
        range +=1;
        if (range > 4) clearInterval(ring);
    }, 400)
}

