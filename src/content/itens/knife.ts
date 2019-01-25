import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";

export class Knife extends Equipment {
    power_bonus: number = 2
    defense_bonus: number = 0
    hp_bonus: number = 0
    owner: Entity

    constructor() {
        super();
    }

    strike() {
        let dir =this.owner.face;
        let dmg = new DamageBlock()
        dmg.owner = this.owner;
        let attack = new Entity(this.owner.x, this.owner.y+2, new Glyph('x', 'black', 'red'), 'strike', 1, false, 0, 5, undefined, undefined, undefined, undefined, dmg);
        attack.damage.startCountDown(20);
        this.owner._map._entities.push(attack); 
    }
}