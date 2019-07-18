import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { skilllist, snipe } from "../../components/skilllist";

export class Ranger implements Enemy {
    skill_bonus: number = 1.5;
    owner: Entity;
    skills: skilllist[];

    constructor() {
        this.skills = [{
            name: 'snipe',
            cooldown: 24,
            maxCooldown: 24
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
        if (dist < this.owner.sight*1.5 && dist > 9) {
            this.owner.hunt(player);
            if (dist <= 9 && (this.owner.x == player.x || this.owner.y == player.y)) {
                snipe(this.owner, player, 1.2);
            }
        } else if(dist < 12 && dist > 5) {
            let dx = player.x - this.owner.x;
            let dy = player.y - this.owner.y;
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dy > 0) {
                    this.owner.move(0, randint(1,2), this.owner._map);
                } else {
                    this.owner.move(0, randint(-2, -1), this.owner._map);
                }
            } else {
                if (dx > 0) {
                    this.owner.move(randint(1,2), 0, this.owner._map);
                } else {
                    this.owner.move(randint(-2, -1), 0, this.owner._map);
                }
            }
        } else if (dist <= 5) {
            this.owner.kite(player);
        } else {
            this.owner.wander();
        }
        if (dist < 12) snipe(this.owner, player, 1);
    }
}