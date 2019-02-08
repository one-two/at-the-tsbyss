import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";

export class DamageBlock {
    owner: Entity;
    name: string;
    expire: boolean = false;
    multiplier: number;

    constructor(multi: number) {
        this.multiplier = multi;
    }

    startCountDown(){
        var counter = 6;
        var interval = setInterval(() => {
            counter--;
            if (counter == 2) {
                this.owner.glyph.foreground = [216, 112, 147]
            }
            if (counter == 0 ) {
                clearInterval(interval);
                let targets = this.owner._map.getEntitiesAt(this.owner.x, this.owner.x2, this.owner.y, this.owner.y2);
                if (targets.length > 0) {
                    this.owner.skill(targets);
                }
                deathFunction(this.owner);
            }	
        }, 100);
    }
}