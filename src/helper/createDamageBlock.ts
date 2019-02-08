import { Entity } from "../entity";
import { DamageBlock } from "../components/damageBlock";
import { Glyph } from "../glyph";

export function createDamageBlock(creator: Entity, x:number, y:number, name: string, multi: number) {
    let dir = creator.face;
    let dmg = new DamageBlock(multi);
    let attack:Entity = null;
    dmg.owner = creator;
    attack = new Entity(x, y, new Glyph('x', [0,0,0], [255,0,0]), name, 1, false, 0, 5, undefined, undefined, false, undefined, undefined, dmg);
    attack._map = creator._map;
    attack.damage.startCountDown();
    attack.owner = creator;
    creator._map._entities.push(attack); 
}