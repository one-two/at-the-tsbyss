import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";

export class Orc implements Enemy {
    owner: Entity;

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter < 0 ) {
                
                // code here will run when the counter reaches zero.
                
                //clearInterval(interval);
                counter = this.owner.maxStamina;
                this.act();
            }	
        }, 1000);
    }

    act() {
        let dy = randint(-1,1);
        let dx = randint(-1,1);
        //console.log('orc move: ' + dx + ' ' + dy)
        this.owner.move(dx, dy, this.owner._map);
    }
}