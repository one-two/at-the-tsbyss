import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";

export class DamageBlock {
    owner: Entity;
    name: string;
    expire: boolean = false;

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter == 5) {
                this.owner.glyph.foreground = 'palevioletred'
            }
            if (counter == 0 ) {
                clearInterval(interval);
                let targets = this.owner._map.getEntitiesAt(this.owner.x, this.owner.x2, this.owner.y, this.owner.y2);
                if (targets.length > 0) {
                    this.owner.skill(targets);
                    console.log(targets);
                }
                deathFunction(this.owner);
            }	
        }, 100);
    }
}