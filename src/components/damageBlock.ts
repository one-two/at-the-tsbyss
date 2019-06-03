import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";

export class DamageBlock {
    owner: Entity;
    name: string;
    expire: boolean = false;
    timeout: number;
    multiplier: number;

    constructor(multi: number, timeout: number = 6) {
        this.multiplier = multi;
        this.timeout = timeout;
    }

    startCountDown(){
        var counter = this.timeout;
        var interval = setInterval(() => {
            counter--;
            if (counter == 2) {
                this.owner.glyph.foreground = [this.owner.glyph.foreground[0]*1.3, this.owner.glyph.foreground[1]*1.3, this.owner.glyph.foreground[2]*1.3]//[216, 112, 147] //
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