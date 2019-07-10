import { Entity } from "../../entity";
import { randint } from "../../helper/randint";
import { Enemy } from "../../helper/enemy";
import { deathFunction } from "../../helper/deathFunction";
import { DamageBlock } from "../../components/damageBlock";
import { createDamageBlock } from "../../helper/createDamageBlock";
import { skilllist, poison_cloud, poison_shield } from "../../components/skilllist"
import { angel_ring, angel_tri } from "../../components/bossSkills";

export class Angel implements Enemy {
    skill_bonus: number = 3;
    owner: Entity;
    skills: skilllist[];
    dir: number[];

    constructor() {
        this.skills = [{
            name: 'angel ring',
            cooldown: 15,
            maxCooldown: 15
        },
        {
            name: 'angel lance',
            cooldown: 5,
            maxCooldown: 15
        }]
        this.dir = [2,2];
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
        this.dir = this.owner.angelMove(this.dir[0], this.dir[1], this.owner._map);
        if (this.skills[0].cooldown >= this.skills[0].maxCooldown) {
            angel_ring(this.owner, player, this.skill_bonus);
            this.skills[0].cooldown = 0;
        }

        if (this.skills[1].cooldown >= this.skills[1].maxCooldown) {
            angel_tri(this.owner, player, this.skill_bonus);
            this.skills[1].cooldown = 0;
        }
        // if (dist < this.owner.sight*1.4) {
        //     if (this.skills[0].cooldown >= this.skills[0].maxCooldown) {
        //         poison_cloud(this.owner, player, this.skill_bonus*0.5);
        //         this.skills[0].cooldown = 0
        //     }
        //     //this.owner.hunt(player);
        //     //this.poison_cloud(player);
        // } else {
        //     this.owner.wander();
        // }
        // if (dist < 2) if (this.skills[1].cooldown >= this.skills[1].maxCooldown) {
        //     poison_shield(this.owner, player, 1);
        //     this.skills[1].cooldown = 0
        // }
    }

}