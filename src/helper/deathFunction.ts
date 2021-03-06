import { Entity } from "../entity";
import { Glyph } from "../glyph";

export function deathFunction(entity: Entity) {
    if (entity.fighter != undefined) {
        let deadG = new Glyph('%', [0,0,0], [139, 0, 0])
        entity.glyph = deadG;
        entity.blocks = false;
        entity.render_order = 99;
        entity.fighter.status = 'dead';
    }
    if (entity.damage != undefined) {
        entity.damage.expire = true;
    }

}