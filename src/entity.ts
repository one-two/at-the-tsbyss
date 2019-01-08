import { Glyph } from "./glyph";
import { Map } from "./map";
import { Fighter } from "./components/fighter";

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
    _map: Map;
    fighter: Fighter;
    ai: any;
    sight: number;
    // item
    // inventory
    // cooldown
    // maxCooldown 
    // damage
    // stairs
    // level
    equipment: any;
    // equippable

    constructor(x:number, y:number, glyph: Glyph, name: string, size:number = 0, blocks: boolean = false, maxStamina:number=0,
        render_order:number = 99, fighter: Fighter = undefined, ai: any = undefined,
        item: any = undefined, inventory: any = undefined, damage: any = undefined, stairs: any = undefined, level: any = undefined, 
        equipment: any = undefined, equippable: any = undefined, _map: Map = undefined, _entities: Entity[] = undefined) {
            this.x = x;
            this.y = y;
            this.x2 = x+size-1;
            this.y2 = y+size-1;
            this.glyph = glyph;
            this.name = name;
            this.blocks = blocks;
            this.render_order = render_order;
            this.maxStamina = maxStamina;
            this.stamina = 0;
            this._map = _map;
            this.ai = ai;
            this.fighter = fighter;
            this.equipment = equipment;

            if (this.ai != undefined) {
                this.ai.owner = this;
                this.ai.startCountDown(this.maxStamina);
                this.sight = 5;
            } else this.sight = 15;

            if (this.fighter != undefined) {
                this.fighter.owner = this;
            }
        }

    move(dx: number, dy: number, map: Map) {
        let tx = this.x + dx;
        let tx2 = this.x2 + dx;
        let ty = this.y + dy;
        let ty2 = this.y2 + dy;
        if (dx == 0 && dy == 0) return;
        if (map.getMovableArea(tx, tx2, ty, ty2)) {
            let targets: Entity[] = [];
            targets = map.getEntitiesAt(tx, tx2, ty, ty2);
            if (targets.length == 0) {
                this.x = tx;
                this.x2 = tx2;
                this.y = ty;
                this.y2 = ty2;
            } else {
                console.log('cant move');
                if (this.fighter != undefined && this.glyph.char == '@') {
                    this._map.messageLog.addMessage("you kicked a %c{green}" + targets[0].name + "%c{}!");
                    this.fighter.hp -=1;
                } else {
                    let player: any = undefined;
                    targets.forEach(element => {
                        if (element.glyph.char == '@') {
                            player = element;
                        }
                    });
                    console.log(player);
                    if (this.fighter != undefined && player != undefined) { 
                        this._map.messageLog.addMessage("you apanhou de um %c{green}" + targets[0].name + "%c{}!");
                        console.log('apanhar');
                    }
                }
            }
        } else {
            if (this.glyph.char == '@') this._map.messageLog.addMessage("this is a %c{goldenrod}wall%c{}!");
            else this._map.messageLog.addMessage("hey fungi, this is a %c{goldenrod}wall%c{}!");
        }
    }

    // startCountDown(seconds: number){
    //     var counter = seconds;
    //     var interval = setInterval(() => {
    //         //(counter);
    //         counter--;
    //         if (counter < 0 ) {
                
    //             // code here will run when the counter reaches zero.
                
    //             //clearInterval(interval);
    //             counter = this.maxStamina;
    //             this.act();
    //         }	
    //     }, 1000);
    // }

    act() {
    }
}