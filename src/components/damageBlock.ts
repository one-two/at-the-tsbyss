import { Entity } from "../entity";
import { deathFunction } from "../helper/deathFunction";

export class DamageBlock {
    owner: Entity;
    expire: boolean = false;

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter == 10) {
                this.owner.glyph.foreground = 'palevioletred'
            }
            if (counter < 0 ) {
                clearInterval(interval);
                deathFunction(this.owner);
            }	
        }, 100);
    }
}