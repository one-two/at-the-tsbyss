import { Glyph } from "./glyph";
import { Map } from "./map";
import { Fighter } from "./components/fighter";
import { Path } from "../lib";
import { randint } from "./helper/randint";
import { Equipment } from "./components/equipment";
import { DamageBlock } from "./components/damageBlock";

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
    cooldown: number;
    face: string;
    // item
    // inventory
    // cooldown
    // maxCooldown 
    damage: DamageBlock;
    // stairs
    // level
    equipment: Equipment;
    // equippable
    owner: Entity;

    constructor(x:number, y:number, glyph: Glyph, name: string, size:number = 0, blocks: boolean = false, maxStamina:number=0,
                render_order:number = 99, fighter: Fighter = undefined, ai: any = undefined,
                item: any = undefined, inventory: any = undefined, damage: DamageBlock = undefined, stairs: any = undefined, level: any = undefined, 
                equipment: Equipment = undefined, equippable: any = undefined, _map: Map = undefined, _entities: Entity[] = undefined) {
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
        this.cooldown = 0;
        this.face = 'n';
        this.damage = damage;

        if (this.ai != undefined) {
            this.ai.owner = this;
            this.ai.startCountDown(this.maxStamina);
            this.sight = 10;
        } else this.sight = 12;

        if (this.fighter != undefined) {
            this.fighter.owner = this;
        }

        if (this.equipment != undefined) {
            this.equipment.owner = this;
        }

        if (this.damage != undefined) {
            this.damage.owner = this;
        }
    }

    move(dx: number, dy: number, map: Map) {
        if (dx == -1) this.face = 'w';
        if (dx == 1) this.face = 'e';
        if (dy == -1) this.face = 'n';
        if (dy == 1) this.face = 's';
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
                this.attack(targets);
            }
        } else {
            // if (this.glyph.char == '@') this._map.messageLog.addMessage("this is a %c{goldenrod}wall%c{}!");
            // else this._map.messageLog.addMessage("hey fungi, this is a %c{goldenrod}wall%c{}!");
        }
    }

    equip(item: Entity) {
        if (this.equipment == undefined) {
            this.equipment = item.equipment;
        } else {
            // colocar na backpack
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
                } else {
                    
                }
            }
        }
    }

    skill(targets: Entity[]) {
        targets.forEach((entity, i) => {
            if (entity != this.owner) {
                if (entity.fighter != undefined) entity.fighter.takeDamage(99);//this.owner.fighter.power());
            }
        })
    }


    hunt(target: Entity){
        let source = this;
        var path = new Path.AStar(target.x, target.y, function(x: number, y: number) {
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
                source.move(dx, dy, source._map);
            }
            if (count > 1) {
                return;
            }
            count++;
        });
    }

    wander() {
        let dy = 0;
        let dx = 0
        while ( dy ==0 && dx == 0) {
            dy = randint(-1,1);
            dx = randint(-1,1);
        }
        this.move(dx, dy, this._map);
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