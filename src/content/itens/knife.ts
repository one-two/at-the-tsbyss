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
    name: string = 'knife';
    cooldown: number = 8
    glyph: Glyph;

    constructor() {
        super();
        this.startCountDown();
    }

    startCountDown(){
        var interval = setInterval(() => {
            if ( this.cooldown > 0) this.cooldown--;
        }, 100);
    }

    strike() {
        if ( this.cooldown == 0) {
            this.cooldown = 10;
            let dir =this.owner.face;
            let dmg = new DamageBlock(this.skill_bonus)
            let attack:Entity = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') { createDamageBlock(this.owner, this.owner.x, this.owner.y+1, this.name, this.skill_bonus);}
            else if (this.owner.face == 'n') { createDamageBlock(this.owner, this.owner.x, this.owner.y-1, this.name, this.skill_bonus);}
            else if (this.owner.face == 'w') { createDamageBlock(this.owner, this.owner.x-1, this.owner.y, this.name, this.skill_bonus);}
            else if (this.owner.face == 'e') { createDamageBlock(this.owner, this.owner.x+1, this.owner.y, this.name, this.skill_bonus);}
        }
    }
}