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
    let mapWidth = 70;
    let mapHeight = 38;
    let nameAtk = 'angel lance';
    let range = 0
    let rx = target.x;
    let ry = target.y;
    let ownerx = owner.x+5;
    let ownery = owner.y+5;
    if (rx == ownerx || ry == ownery) return;

    let slope = ((ry-ownery)/(rx-ownerx));
    let b = ry-(rx*slope);
    let image: number[][] = [];
    let dist = Math.sqrt( (ownerx - rx)**2+(ownery - ry)**2 );
    let passo = ((ownerx-rx)/dist)*-1;
    let anteriory = -99;
    let anteriorx = -99;
    for (let dom = 0; Math.abs(dom) < dist*2; dom=dom+passo) {
        let newImagey = Math.round(((ownerx+dom)*slope)+b);
        let newImagex = Math.round(ownerx+dom);
        if (newImagey != anteriory || newImagex != anteriorx)   image.push([newImagex,newImagey]);
        anteriory = newImagey;
        anteriorx = newImagex;
        if ((newImagex < 3 || newImagex > (mapWidth-3) || newImagey < 3 || newImagey > (mapHeight-3))) dom = 9999999;
    }
    // distancia vai ser iterações de x na formula linear (arredondar para cima)
    // rodar até (y || x) == (fim da tela)
    // tratar casos colineares ry = oy e rx = ox

    for (let index = 0; index < image.length; index++) {
        createDamageBlock(owner, image[index][0], image[index][1], nameAtk, damageMultiplier, "☽", 6);
        createDamageBlock(owner, image[index][0]+3, image[index][1]+3, nameAtk, damageMultiplier, "☽", 6);
        createDamageBlock(owner, image[index][0]-3, image[index][1]-3, nameAtk, damageMultiplier, "☽", 6);
    }

    // let spike = setInterval(() => {
    //     createDamageBlock(owner, image[range][0], image[range][1], nameAtk, damageMultiplier, "$", 4);
    //     range+=1;
    //     if (range >= image.length) clearInterval(spike);
    // }, 400)
}

