import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";
import { createDamageBlock } from "../../helper/createDamageBlock";

export class Spear extends Equipment {
    power_bonus: number = 4;
    skill_bonus: number = 1.1;
    defense_bonus: number = 0;
    hp_bonus: number = 0;
    owner: Entity;
    name: string = 'spear';
    max_cooldown: number = 8
    cooldown: number = 13

    constructor(drop: Equipment = undefined) {
        super("main");
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

    strike() {
        if ( this.cooldown == 0) {
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
                createDamageBlock(this.owner, this.owner.x+1, this.owner.y+3, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-1, this.owner.y+3, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') { 
                createDamageBlock(this.owner, this.owner.x, this.owner.y-1, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-2, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-3, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x, this.owner.y-4, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+1, this.owner.y-3, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-1, this.owner.y-3, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') { 
                createDamageBlock(this.owner, this.owner.x-1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-4, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-3, this.owner.y+1, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x-3, this.owner.y-1, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') { 
                createDamageBlock(this.owner, this.owner.x+1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+4, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+3, this.owner.y+1, this.name, this.skill_bonus);
                createDamageBlock(this.owner, this.owner.x+3, this.owner.y-1, this.name, this.skill_bonus);
            }
        }
    }
}