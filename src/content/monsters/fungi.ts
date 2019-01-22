import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";

export class Fungi implements Enemy {
    owner: Entity;

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter < 0 ) {
                
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }	
        }, 1000);
    }

    act() {
        let player = this.owner._map.getPlayer();
        let dist = Math.sqrt( (player.x - this.owner.x)**2+(player.y - this.owner.y)**2 );
        console.log('px: ' + player.x + ' py: ' + player.y);
        console.log('x: ' + this.owner.x + ' y: ' + this.owner.y);
        console.log('dist: ' + dist)
        if (dist < this.owner.sight) {
            console.log('dist: ' + dist)
            this.owner.hunt(player);
        } else {
            let dy = randint(-1,1);
            let dx = randint(-1,1);
            this.owner.move(dx, dy, this.owner._map);
        }
    }
}