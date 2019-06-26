import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";
import { qualityGenerator } from "../../helper/qualityGenerator";

export class Sword extends Equipment {
    power_bonus: number = 4;
    skill_bonus: number = 0.7;
    defense_bonus: number = 0;
    hp_bonus: number = 0;
    owner: Entity;
    name: string = 'sword';
    fullname: string = 'sword';
    cooldown: number = 10
    max_cooldown: number = 10;

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
        } else {
            let item = qualityGenerator("main");
            this.power_bonus += this.power_bonus*item.power_bonus;
            this.skill_bonus += this.skill_bonus*item.skill_bonus;
            this.defense_bonus += this.defense_bonus*item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown*item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new Glyph('ރ', [0,0,0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }

    startCountDown(){
        var interval = setInterval(() => {
            if ( this.cooldown > 0) this.cooldown--;
        }, 100);
    }

    strike() {
        if ( this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir =this.owner.face;
            let dmg = new DamageBlock(this.skill_bonus)
            let attack:Entity = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') { 
                createDamageBlock(this.owner, this.owner.x, this.owner.y+1, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y+2, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y+3, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y+4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') { 
                createDamageBlock(this.owner, this.owner.x, this.owner.y-1, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-2, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-3, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') { 
                createDamageBlock(this.owner, this.owner.x-1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-4, this.owner.y, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') { 
                createDamageBlock(this.owner, this.owner.x+1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+4, this.owner.y, this.name, this.skill_bonus);
            }
        }
    }
}