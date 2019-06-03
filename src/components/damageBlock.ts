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
                let newColor = this.owner.glyph.foreground.map(element => {
                    element = element*4.3 > 250 ? 250 : element*4.3;
                    return element
                });
                this.owner.glyph.foreground = [250, newColor[1], newColor[2]]//[216, 112, 147] //
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