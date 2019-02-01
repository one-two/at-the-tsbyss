import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";

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

    takeDamage(amount: number){
        this.hp -= amount
        if (this.hp <= 0) {
            this.hp = 0
            this.owner._map.messageLog.addMessage("%c{"+ this.owner.glyph.foreground +"}" + this.owner.name + "%c{} morreu")
            deathFunction(this.owner)
        }
    }

    heal(amount: number) {
        this.hp += amount;
        if (this.hp > this.max_hp()) {
            this.hp = this.max_hp()
        }
    }

    attack(target: Entity) {
        let result: string;
        let damage = this.power() - target.fighter.defense();

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            target.fighter.takeDamage(damage)
            result = this.owner.name + " bateu em um %c{" + target.glyph.foreground +"}" + target.name + "%c{} com "+ damage + " de dano! (" +target.fighter.hp +")";
        } else {
            result = this.owner.name + " bateu em um %c{" + target.glyph.foreground +"}" + target.name + "%c{} mas não causou dano!";
        }
        return result
    }

    equipment_skill(target: Entity, dmgBlock: Entity) {
        let result: string;
        let damage = this.skill_power() - target.fighter.defense();

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            console.log(dmgBlock)
            target.fighter.takeDamage(damage)
            result = this.owner.name + " usou uma " + dmgBlock.name + " em um %c{" + target.glyph.foreground +"}" + target.name + "%c{} com "+ damage + " de dano! (" +target.fighter.hp +")";
        } else {
            result = this.owner.name + " bateu em um %c{" + target.glyph.foreground +"}" + target.name + "%c{} mas não causou dano!";
        }
        return result
    }
}