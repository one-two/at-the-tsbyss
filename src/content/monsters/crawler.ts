import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { skilllist, punch, bite } from "../../components/skilllist";

export class Crawler implements Enemy {
    skill_bonus: number = 1.2;
    owner: Entity;
    skills: skilllist[];

    constructor() {
        this.skills = [{
            name: 'bite',
            cooldown: 6,
            maxCooldown: 6
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
            if (dist <= 2) {
                if (this.skills[0].cooldown <= this.skills[0].maxCooldown)
                    bite(this.owner, player, this.skill_bonus);
            }
        } else {
            this.owner.wander();
        }
    }
}