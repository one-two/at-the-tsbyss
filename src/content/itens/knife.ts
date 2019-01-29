import { Equipment } from "../../components/equipment";
import { Entity } from "../../entity";
import { DamageBlock } from "../../components/damageBlock";
import { Glyph } from "../../glyph";

export class Knife extends Equipment {
    power_bonus: number = 2
    skill_bonus: number = 1.5
    defense_bonus: number = 0
    hp_bonus: number = 0
    owner: Entity

    constructor() {
        super();
    }

    strike() {
        let dir =this.owner.face;
        let dmg = new DamageBlock()
        let attack:Entity = null;
        dmg.owner = this.owner;
        if (this.owner.face == 's') { attack = new Entity(this.owner.x, this.owner.y+1, new Glyph('x', 'black', 'red'), 'strike', 1, false, 0, 5, undefined, undefined, undefined, undefined, dmg);}
        else if (this.owner.face == 'n') { attack = new Entity(this.owner.x, this.owner.y-1, new Glyph('x', 'black', 'red'), 'strike', 1, false, 0, 5, undefined, undefined, undefined, undefined, dmg);}
        else if (this.owner.face == 'w') { attack = new Entity(this.owner.x-1, this.owner.y, new Glyph('x', 'black', 'red'), 'strike', 1, false, 0, 5, undefined, undefined, undefined, undefined, dmg);}
        else if (this.owner.face == 'e') { attack = new Entity(this.owner.x+1, this.owner.y+1, new Glyph('x', 'black', 'red'), 'strike', 1, false, 0, 5, undefined, undefined, undefined, undefined, dmg);}
        
        attack._map = this.owner._map;
        attack.damage.startCountDown(20);
        attack.owner = this.owner;
        this.owner._map._entities.push(attack); 
    }
}