import { Entity } from "../entity";
import { DamageBlock } from "../components/damageBlock";
import { Glyph } from "../glyph";

export function createDamageBlock(creator: Entity, x:number, y:number, name: string, multi: number, glyph: string = '╳', timeout: number = 6): boolean {
    let dir = creator.face;
    let dmg = new DamageBlock(multi, timeout);
    let attack:Entity = null;
    if (!creator._map.getTile(x,y)._isWalkable) return true;
    dmg.owner = creator;
    if (creator.player) attack = new Entity(x, y, new Glyph(glyph, [0,0,0], [creator.glyph.foreground[1]/2, creator.glyph.foreground[1]/2, creator.glyph.foreground[2]/2]), name, 1, false, 0, 5, undefined, undefined, false, undefined, undefined, dmg);
    else attack = new Entity(x, y, new Glyph(glyph, [0,0,0], [150, creator.glyph.foreground[1]/3, creator.glyph.foreground[2]/3]), name, 1, false, 0, 5, undefined, undefined, false, undefined, undefined, dmg);
    attack._map = creator._map;
    attack.damage.startCountDown();
    attack.owner = creator;
    creator._map._entities.push(attack); 
    return false;
}