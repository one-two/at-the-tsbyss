import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { skilllist, punch, smash } from "../../components/skilllist";

export class Troll implements Enemy {
    skill_bonus: number = 1.5;
    owner: Entity;
    skills: skilllist[];

    constructor() {
        this.skills = [{
            name: 'smash',
            cooldown: 16,
            maxCooldown: 16
        }]
    }

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown) element.cooldown++;
            });
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
        if (dist < this.owner.sight) {
            this.owner.hunt(player);
            if (dist <= 5 && (this.owner.x == player.x || this.owner.y == player.y)) {
                smash(this.owner, player, this.skill_bonus);
            }
        } else {
            this.owner.wander();
        }
    }
}