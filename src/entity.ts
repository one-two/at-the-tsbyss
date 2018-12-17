import { Glyph } from "./glyph";
import { Map } from "./map";
import { Ai } from "./ai";

export class Entity {
    x: number;
    y: number;
    x2: number;
    y2: number;
    glyph: Glyph;
    name: string;
    blocks: boolean;
    render_order: number;
    maxStamina: number;
    stamina: number;
    // fighter
    //ai: Ai;
    // item
    // inventory
    // cooldown
    // maxCooldown 
    // damage
    // stairs
    // level
    // equipment
    // equippable

    constructor(x:number, y:number, glyph: Glyph, name: string, size:number = 0, blocks: boolean = false, maxStamina:number=0, render_order:number = 99, fighter: any = undefined, ai: Ai = undefined,
        item: any = undefined, inventory: any = undefined, damage: any = undefined, stairs: any = undefined, level: any = undefined, 
        equipment: any = undefined, equippable: any = undefined) {
            this.x = x;
            this.y = y;
            this.x2 = x+size;
            this.y2 = y+size;
            this.glyph = glyph;
            this.name = name;
            this.blocks = blocks;
            this.render_order = render_order;
            this.maxStamina = maxStamina;
            this.stamina = 0;

            if (this.maxStamina > 0) {
                this.startCountDown(this.maxStamina);
            }
        }

    move(dx: number, dy: number, map: Map) {
        let tx = this.x + dx;
        let tx2 = this.x2 + dx;
        let ty = this.y + dy;
        let ty2 = this.y2 + dy;
        let dest = map.getTile(tx,ty);
        if (map.getMovableArea(tx, tx2, ty, ty2)) {
            this.x = tx;
            this.x2 = tx2;
            this.y = ty;
            this.y2 = ty2;
        }
    }

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter < 0 ) {
                
                // code here will run when the counter reaches zero.
                
                //clearInterval(interval);
                counter = this.maxStamina;
                this.act();
            }	
        }, 1000);
    }

    act() {
        console.log('ACT!');
    }
}