import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";

export class Knife extends Equipment {
    power_bonus: number = 2;
    skill_bonus: number = 1.5;
    defense_bonus: number = 0;
    hp_bonus: number = 0;
    owner: Entity;
    name: string = 'faca';

    constructor() {
        super();
    }

    strike() {
        let dir =this.owner.face;
        let dmg = new DamageBlock()
        let attack:Entity = null;
        dmg.owner = this.owner;
        if (this.owner.face == 's') { createDamageBlock(this.owner, this.owner.x, this.owner.y+1, name);}
        else if (this.owner.face == 'n') { createDamageBlock(this.owner, this.owner.x, this.owner.y-1, name);}
        else if (this.owner.face == 'w') { createDamageBlock(this.owner, this.owner.x-1, this.owner.y, name);}
        else if (this.owner.face == 'e') { createDamageBlock(this.owner, this.owner.x+1, this.owner.y, name);}
    }
}