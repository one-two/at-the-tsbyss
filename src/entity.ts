import { Glyph } from "./glyph";
import { Map } from "./map";
import { Fighter } from "./components/fighter";
import { Path } from "../lib";

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
            this.sight = 10;
        } else this.sight = 12;

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
                
            }
        } else {
            if (this.glyph.char == '@') this._map.messageLog.addMessage("this is a %c{goldenrod}wall%c{}!");
            else this._map.messageLog.addMessage("hey fungi, this is a %c{goldenrod}wall%c{}!");
        }
    }

    attack(targets: Entity[]) {
        if (this.fighter != undefined) {
            if (this.glyph.char == '@') {
                let result = this.fighter.attack(targets[0])
                this._map.messageLog.addMessage(result);
            } else {
                let player: any = undefined;
                targets.forEach(element => {
                    if (element.glyph.char == '@') {
                        player = element;
                    }
                });
                if (player != undefined) { 
                    let result = this.fighter.attack(player)
                    this._map.messageLog.addMessage(result);
                }
            }
        }
    }

    hunt(player: Entity){
        let source = this;
        var path = new Path.AStar(player.x, player.y, function(x: number, y: number) {
            // If an entity is present at the tile, can't move there.
            let entity = source._map.getEntitiesAt(this.x1, this.x2, this.y1, this.y2);
            if (entity.length > 0) {
                return false;
            }
            return source._map.getTile(x, y)._isWalkable;
        }, {topology: 8});
        var count = 0;
        path.compute(source.x, source.y, function(x: number, y: number) {
            if (count == 1) {
                let dx = x - source.x;
                let dy = y - source.y;
                console.log("dx:" + dx + " dy: "+ dy);
                source.move(dx, dy, source._map);
                console.log('hunt');
            }
            count++;
        });
    }

    wander() {

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