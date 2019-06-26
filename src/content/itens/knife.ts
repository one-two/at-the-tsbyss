import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";
import { randperc } from "../../helper/randperc";
import { qualityGenerator } from "../../helper/qualityGenerator";

export class Knife extends Equipment {
    power_bonus: number = 2;
    skill_bonus: number = 0.5;
    defense_bonus: number = 0;
    hp_bonus: number = 0;
    owner: Entity;
    prefix: string = '';
    name: string = 'knife';
    fullname:string = 'knife';
    cooldown: number = 8
    max_cooldown: number = 8
    glyph: Glyph;

    constructor(drop: Equipment = undefined) {
        super("main");
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
            this.glyph = drop.glyph;
        } else {
            let item = qualityGenerator("main");
            this.power_bonus += this.power_bonus*item.power_bonus;
            this.skill_bonus += this.skill_bonus*item.skill_bonus;
            this.defense_bonus += this.defense_bonus*item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown*item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new Glyph('🗡', [0,0,0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }



    startCountDown(){
        var interval = setInterval(() => {
            if ( this.cooldown > 0 ) this.cooldown--;
        }, 100);
    }

    strike() {
        if ( this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
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