import { Entity } from "../entity";
import { Glyph } from "../glyph";

export function deathFunction(entity: Entity) {
    let deadG = new Glyph('%', 'black', 'darkred')
    entity.glyph = deadG;
    entity.blocks = false;
    entity.render_order = 99;
    entity.fighter.status = 'dead';
}