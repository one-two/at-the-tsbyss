import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";
import { MessageType } from "../helper/messageType";

export class Fighter {
    owner: Entity;
    rank: number;
    base_max_hp: number;
    hp : number;
    base_defense: number;
    base_power: number
    xp: number;
    status: string;
    current_exp: number;
    nextRank: number;
    unspentPoints: number;

    constructor(hp: number, def: number, atk: number, xp: number) {
        this.hp = hp;
        this.base_max_hp = hp;
        this.base_defense = def;
        this.base_power = atk;
        this.xp = xp;
        this.status = 'normal'
        this.current_exp = 0;
        this.nextRank = 10;
        this.unspentPoints = 0;
        this.rank = 1;
    }

    power() {
        let bonus = 0;
        if (this.owner != undefined){
            if (this.owner.equipment != undefined) bonus += this.owner.equipment.power_bonus;
            if (this.owner.subequipment != undefined) bonus += this.owner.subequipment.power_bonus;
        } 
        return this.base_power + bonus
    }

    skill_power() {
        let bonus = 1;
        if (this.owner.ai != undefined) return this.power() * this.owner.ai.skill_bonus;
        if (this.owner.equipment != undefined)  bonus += this.owner.equipment.skill_bonus;
        if (this.owner.subequipment != undefined) bonus += this.owner.equipment.skill_bonus;
        return this.power() * bonus;
    }

    defense() {
        let bonus = 0;
        if (this.owner != undefined){
            if(this.owner.equipment != undefined) bonus += this.owner.equipment.defense_bonus;
            if(this.owner.subequipment != undefined) bonus += this.owner.equipment.defense_bonus;
        } 
        return this.base_defense + bonus
    }

    max_hp() {
        let bonus = 0;
        if (this.owner != undefined){
            if (this.owner.equipment != undefined) bonus += this.owner.equipment.hp_bonus;
            if (this.owner.subequipment != undefined) bonus += this.owner.subequipment.hp_bonus;
        } 
        return this.base_max_hp + bonus
    }

    takeDamage(amount: number): boolean{
        if (this.owner.player == true && this.owner.subequipment != undefined) {
            amount = this.owner.subequipment.defend(amount);
        }
        this.hp -= amount
        if (this.hp <= 0) {
            this.hp = 0
            let msg: MessageType = {
                message: "%c{0}" +this.owner.name + "%c{1} morreu",
                type: 'death',
                color0: this.owner.glyph.foreground,
                color1: [255,255,255],
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
            color0 : target.glyph.foreground,
            color1 : [255,255,255],
            color2 : [255,255,255]
        };
        let damage = this.power() * (1 - (target.fighter.defense()/(10 + target.fighter.defense())));
        damage = +damage.toFixed(2);

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            let death = target.fighter.takeDamage(damage)
            if (death) this.getExp(target.fighter.xp);
            this.owner._map.messageLog.newMessage(this.owner, 'fight', target, undefined, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        } else {
            this.owner._map.messageLog.newMessage(this.owner, 'fightZeroDamage', target, undefined, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result
    }

    equipment_skill(target: Entity, dmgBlock: Entity) {
        let result: MessageType = {
            message : '',
            type : 'skill',
            color0 : target.glyph.foreground,
            color1 : [255,255,255],
            color2 : [255,255,255]
        };
        let damage = this.skill_power()*dmgBlock.damage.multiplier * (1 - (target.fighter.defense()/(10 + target.fighter.defense())));
        damage = +damage.toFixed(2);

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            let death = target.fighter.takeDamage(damage)
            if (death) this.getExp(target.fighter.xp);
            this.owner._map.messageLog.newMessage(this.owner, 'skill', target, dmgBlock, damage.toString());
            //result.message = this.owner.name + " usou uma " + dmgBlock.name + " em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        } else {
            this.owner._map.messageLog.newMessage(this.owner, 'skillZeroDamage', target, dmgBlock, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result
    }

    getExp(amount: number) {
        this.current_exp += amount;
        while (this.current_exp >= this.nextRank) {
            this.rank += 1;
            this.nextRank += (this.nextRank + 10)
            this.unspentPoints += 1;
        }
    }
}