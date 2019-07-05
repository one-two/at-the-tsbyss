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
    // createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    // createDamageBlock(owner, target.x+1, target.y, nameAtk, damageMultiplier, "ꙮ");
    // createDamageBlock(owner, target.x-1, target.y, nameAtk, damageMultiplier, "ꙮ");
    // createDamageBlock(owner, target.x, target.y+1, nameAtk, damageMultiplier, "ꙮ");
    // createDamageBlock(owner, target.x, target.y-1, nameAtk, damageMultiplier, "ꙮ");
}