import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";

export class Shield extends Equipment {
    power_bonus: number = 0;
    skill_bonus: number = 1;
    defense_bonus: number = 2;
    hp_bonus: number = 10;
    owner: Entity;
    name: string = 'shield';
    cooldown: number = 8
    max_cooldown: number = 8
    glyph: Glyph;

    constructor(drop: Equipment = undefined) {
        super("sub");
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.max_cooldown = drop.max_cooldown;
        }
        this.startCountDown();
    }



    startCountDown(){
        var interval = setInterval(() => {
            if ( this.cooldown > 0) this.cooldown--;
        }, 100);
    }

    // strike() {
    //     if ( this.cooldown == 0) {
    //         this.cooldown = this.max_cooldown;
    //         let dir =this.owner.face;
    //         let dmg = new DamageBlock(this.skill_bonus)
    //         let attack:Entity = null;
    //         dmg.owner = this.owner;
    //         if (this.owner.face == 's') { createDamageBlock(this.owner, this.owner.x, this.owner.y+1, this.name, this.skill_bonus);}
    //         else if (this.owner.face == 'n') { createDamageBlock(this.owner, this.owner.x, this.owner.y-1, this.name, this.skill_bonus);}
    //         else if (this.owner.face == 'w') { createDamageBlock(this.owner, this.owner.x-1, this.owner.y, this.name, this.skill_bonus);}
    //         else if (this.owner.face == 'e') { createDamageBlock(this.owner, this.owner.x+1, this.owner.y, this.name, this.skill_bonus);}
    //     }
    // }
}