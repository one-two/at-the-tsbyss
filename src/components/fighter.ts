import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";
import { MessageType } from "../helper/messageType";
import { Color } from "../../lib";

export class Fighter {
    owner: Entity;
    rank: number;
    base_max_hp: number;
    hp : number;
    base_defense: number;
    base_power: number
    xp: number;
    status: string;



    constructor(hp: number, def: number, atk: number, xp: number) {
        this.hp = hp;
        this.base_max_hp = hp;
        this.base_defense = def;
        this.base_power = atk;
        this.xp = xp;
        this.status = 'normal'

    }

    power() {
        let bonus = 0;
        if (this.owner != undefined && this.owner.equipment != undefined) {
            bonus = this.owner.equipment.power_bonus;
        }
        return this.base_power + bonus
    }

    skill_power() {
        if (this.owner.ai != undefined) return this.power() * this.owner.ai.skill_bonus
        if (this.owner.equipment != undefined) {
            return this.power() * this.owner.equipment.skill_bonus;
        }
    }

    defense() {
        let bonus = 0;
        if (this.owner != undefined && this.owner.equipment != undefined) {
            bonus = this.owner.equipment.defense_bonus;
        }
        return this.base_defense + bonus
    }

    max_hp() {
        let bonus = 0;
        if (this.owner != undefined && this.owner.equipment != undefined) {
            bonus = this.owner.equipment.hp_bonus;
        }
        return this.base_max_hp + bonus
    }

    takeDamage(amount: number): boolean{
        this.hp -= amount
        if (this.hp <= 0) {
            this.hp = 0
            let msg: MessageType = {
                message: "%c{0}" +this.owner.name + "%c{1} morreu",
                type: 'death',
                color1: this.owner.glyph.foreground,
                color2: [255,255,255]
            };
            this.owner._map.messageLog.addMessage(msg);//"%c{"+ this.owner.glyph.foreground +"}" + this.owner.name + "%c{} morreu")
            deathFunction(this.owner)
            return true;
        }
    }

    heal(amount: number) {
        this.hp += amount;
        if (this.hp > this.max_hp()) {
            this.hp = this.max_hp()
        }
    }

    attack(target: Entity): MessageType {
        let result: MessageType = {
            message : '',
            type : 'fight',
            color1 : target.glyph.foreground,
            color2 : [255,255,255]
        };
        let damage = this.power() * (1 - (target.fighter.defense()/(10 + target.fighter.defense())));
        damage = +damage.toFixed(2);

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            let death = target.fighter.takeDamage(damage)
            this.owner.exp.gain = target.fighter.xp;
            result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        } else {
            result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result
    }

    equipment_skill(target: Entity, dmgBlock: Entity) {
        let result: MessageType = {
            message : '',
            type : 'skill',
            color1 : target.glyph.foreground,
            color2 : [255,255,255]
        };
        let damage = this.skill_power()*dmgBlock.damage.multiplier * (1 - (target.fighter.defense()/(10 + target.fighter.defense())));
        damage = +damage.toFixed(2);

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            target.fighter.takeDamage(damage)
            result.message = this.owner.name + " usou uma " + dmgBlock.name + " em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        } else {
            result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result
    }
}