import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { DamageBlock } from "../../components/damageBlock";
import { createDamageBlock } from "../../helper/createDamageBlock";

export class Fungi implements Enemy {
    skill_bonus: number = 1;
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
                    deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }	
        }, 100);
    }

    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined) return;
        let dist = Math.sqrt( (player.x - this.owner.x)**2+(player.y - this.owner.y)**2 );
        if (dist < this.owner.sight*2) {
            this.owner.hunt(player);
        } else {
            this.owner.wander();
        }
    }

    poison_cloud(player: Entity) {
        let nameAtk = 'nuvem de esporos';
        createDamageBlock(this.owner, player.x, player.y, nameAtk);
        createDamageBlock(this.owner, player.x+1, player.y, nameAtk);
        createDamageBlock(this.owner, player.x-1, player.y, nameAtk);
        createDamageBlock(this.owner, player.x, player.y+1, nameAtk);
        createDamageBlock(this.owner, player.x, player.y-1, nameAtk);
    }
}