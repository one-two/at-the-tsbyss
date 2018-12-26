import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";

export class Fungi implements Enemy {
    entity: Entity;

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter < 0 ) {
                
                // code here will run when the counter reaches zero.
                
                //clearInterval(interval);
                counter = this.entity.maxStamina;
                this.act();
            }	
        }, 1000);
    }

    act() {
        let dy = randint(-1,1);
        let dx = randint(-1,1);
        console.log('fungi move: ' + dx + ' ' + dy)
        this.entity.move(dx, dy, this.entity._map);
    }
}