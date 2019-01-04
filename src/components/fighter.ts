import { Entity } from "../entity";

export class Fighter {
    owner: Entity;
    rank: number;
    base_max_hp: number;
    hp : number;
    base_defense: number;
    base_power: number
    xp: number;

    constructor(hp: number, def: number, atk: number, xp: number) {
        this.hp = hp;
        this.base_max_hp = hp;
        this.base_defense = def;
        this.base_power = atk;
        this.xp = xp;
    }

    power() {
        let bonus = 0;
        if (this.owner != undefined && this.owner.equipment != undefined) {
            bonus = this.owner.equipment.power_bonus;
        }
        return this.base_power + bonus
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
        let results:any = [];
        this.hp -= amount
        if (this.hp <= 0) {
            this.hp = 0
            results.append({'dead' : this.owner, 'xp': this.xp})
        }
        return results
    }

    heal(amount: number) {
        this.hp += amount;
        if (this.hp > this.max_hp()) {
            this.hp = this.max_hp()
        }
    }

    attack(target: Entity) {
        let results:any = [];
        let damage = this.power() - target.fighter.defense();

        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
        } else {
            // results.append({'message': Message('{0} ataca {1}, mas defendeu. 1 de dano.'.format(
            //     this.owner.name.capitalize(), target.name), libtcod.white)})
            // results.extend(target.fighter.take_damage(1))
        }
        return results
    }
}