import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";
import { qualityGenerator } from "../../helper/qualityGenerator";

export class Blademail extends Equipment {
    power_bonus: number = -2;
    skill_bonus: number = 1;
    defense_bonus: number = 3;
    hp_bonus: number = 25;
    owner: Entity;
    name: string = 'blademail';
    fullname: string = 'blademail';
    cooldown: number = 12
    max_cooldown: number = 12
    glyph: Glyph;

    constructor(drop: Equipment = undefined) {
        super("sub");
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
        } else {
            let item = qualityGenerator("sub");
            this.power_bonus += this.power_bonus*item.power_bonus;
            this.skill_bonus += this.skill_bonus*item.skill_bonus;
            this.defense_bonus += this.defense_bonus*item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown*item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new Glyph('❂', [0,0,0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }



    startCountDown(){
        var interval = setInterval(() => {
            if ( this.cooldown > 0) this.cooldown--;
        }, 100);
    }

    defend(amount: number) {
        if ( this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir =this.owner.face;
            let dmg = new DamageBlock(this.skill_bonus)
            let attack:Entity = null;
            dmg.owner = this.owner;
            createDamageBlock(this.owner, this.owner.x, this.owner.y+1, this.name, this.skill_bonus);
            createDamageBlock(this.owner, this.owner.x+1, this.owner.y+1, this.name, this.skill_bonus);
            createDamageBlock(this.owner, this.owner.x-1, this.owner.y+1, this.name, this.skill_bonus);

            createDamageBlock(this.owner, this.owner.x+1, this.owner.y, this.name, this.skill_bonus);
            createDamageBlock(this.owner, this.owner.x-1, this.owner.y, this.name, this.skill_bonus);

            createDamageBlock(this.owner, this.owner.x+1, this.owner.y-1, this.name, this.skill_bonus);
            createDamageBlock(this.owner, this.owner.x, this.owner.y-1, this.name, this.skill_bonus);
            createDamageBlock(this.owner, this.owner.x-1, this.owner.y-1, this.name, this.skill_bonus);
        }
        return amount;
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