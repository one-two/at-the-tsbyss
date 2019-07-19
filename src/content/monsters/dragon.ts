import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { DamageBlock } from "../../components/damageBlock";
import { createDamageBlock } from "../../helper/createDamageBlock";
import { skilllist, poison_cloud, poison_shield, flamestrike, firebreath } from "../../components/skilllist"

export class Dragon implements Enemy {
    skill_bonus: number = 6;
    owner: Entity;
    skills: skilllist[];

    constructor() {
        this.skills = [{
            name: 'fire breath',
            cooldown: 12,
            maxCooldown: 12
        },
        {
            name: 'flamestrike',
            cooldown: 20,
            maxCooldown: 20
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
            if (this.skills[0].cooldown >= this.skills[0].maxCooldown) {
                firebreath(this.owner, player, this.skill_bonus*0.5);
                this.skills[0].cooldown = 0
            }
            
            //this.poison_cloud(player);
        } else {
            this.owner.wander();
        }
        if (dist < 2) if (this.skills[1].cooldown >= this.skills[1].maxCooldown) {
            this.owner.hunt(player);
            flamestrike(this.owner, player, this.skill_bonus);
            this.skills[1].cooldown = 0
        }
    }

}