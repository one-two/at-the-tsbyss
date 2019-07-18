import { Glyph } from "./glyph";
import { Map } from "./map";
import { Fighter } from "./components/fighter";
import { Path } from "../lib";
import { randint } from "./helper/randint";
import { Equipment } from "./components/equipment";
import { DamageBlock } from "./components/damageBlock";
import { Enemy } from "./helper/enemy";
import { deathFunction } from "./helper/deathFunction";
import { MessageType } from "./helper/messageType";
import { CreateDropItem } from "./helper/createItens";
import { Exit } from "./content/itens/exit";

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
    item: Equipment;
    inventory: number;
    // cooldown
    // maxCooldown 
    damage: DamageBlock;
    stairs: Exit;
    level: number;
    nextLevel: number;
    equipment: Equipment;
    subequipment: Equipment;
    exp: {amount: number, readonly base: number, gain: number}
    boss: any;
    owner: Entity;
    player: boolean;
    regen: any = undefined;
    regenMax: number = 10;
    lastxp: number =0;
    killedby: string = '';

    constructor(x:number, y:number, glyph: Glyph, name: string, size:number = 0, blocks: boolean = false, maxStamina:number=0,
                render_order:number = 99, fighter: Fighter = undefined, ai: any = undefined, player: boolean = false,
                item: Equipment = undefined, inventory: any = undefined, damage: DamageBlock = undefined, stairs: Exit = undefined, level: any = undefined, 
                equipment: Equipment = undefined, boss: any = undefined, _map: Map = undefined, _entities: Entity[] = undefined) {
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
        this.subequipment = undefined;
        this.cooldown = 0;
        this.face = 'n';
        this.damage = damage;
        this.player = player;
        this.item = item;
        this.inventory = 1;
        this.stairs = stairs;
        this.boss = boss;

        if (this.player == true) {
            this.startMoveCountDown();
            this.startAttackCountDown();
        }

        if (this.ai != undefined) {
            this.ai.owner = this;
            this.ai.startCountDown(this.maxStamina);
            this.sight = 10;
            this.startAttackCountDown();
        } else this.sight = 12; //12

        if (this.fighter != undefined) {
            this.fighter.owner = this;
        }

        if (this.equipment != undefined) {
            this.equipment.owner = this;
        }

        if (this.damage != undefined) {
            this.damage.owner = this;
        }

        if (this.item != undefined) {
            this.item.owner = this;
        }

        if(this.inventory != undefined) {
            this.inventory = 1;
        }
        
    }

    move(dx: number, dy: number, map: Map) {
        let moveerror = this.changeFace(dx, dy);
        //if (moveerror) return;
        //if (this.player == true && this.stamina < this.maxStamina && moveerror ) return;
        //else if (this.player == true && this.stamina >= this.maxStamina) this.stamina = 0;
        let tx = this.x + dx;
        let tx2 = this.x2 + dx;
        let ty = this.y + dy;
        let ty2 = this.y2 + dy;
        if (dx == 0 && dy == 0) return;
        if (map.getMovableArea(tx, tx2, ty, ty2)) {
            let targets: Entity[] = [];
            targets = map.getEntitiesAt(tx, tx2, ty, ty2, this);
            if (targets.length == 0) {
                this.x = tx;
                this.x2 = tx2;
                this.y = ty;
                this.y2 = ty2;
            } else {
                if (this.player == true) {
                    if (this.cooldown == 0) {
                        this.attack(targets);
                        this.cooldown = 5;
                    }
                } else {
                    if (this.cooldown == 0) {
                        this.attack(targets);
                        this.cooldown = 20;
                    }
                }
            }
        } else {
        }
    }

    angelMove(dx: number, dy: number, map: Map): number[] {
        let moveerror = this.changeFace(dx, dy);
        let nextDir = [dx,dy];
        if (this.player == true && this.stamina < this.maxStamina && moveerror ) return;
        else if (this.player == true) this.stamina = 0
        let tx = this.x + dx;
        let tx2 = this.x2 + dx;
        let ty = this.y + dy;
        let ty2 = this.y2 + dy;
        if (dx == 0 && dy == 0) return;
        let targets: Entity[] = [];
        targets = map.getEntitiesAt(tx, tx2, ty, ty2, this);
        if (targets.length == 0) {
            this.x = tx;
            this.x2 = tx2;
            this.y = ty;
            this.y2 = ty2;
        } else {
            if (this.player == true) {
                if (this.cooldown == 0) {
                    this.attack(targets);
                    this.cooldown = 5;
                }
            } else {
                this.attack(targets);
                return [nextDir[0], nextDir[1]]
            }
        }
        if (this.x2 >= 55) nextDir = [-2,nextDir[1]]
        if (this.x <= 10) nextDir = [2,nextDir[1]]
        if (this.y <= 3) nextDir = [nextDir[0], 2] 
        if (this.y2 >= 35) nextDir = [nextDir[0], -2]
        return nextDir
    }

    private changeFace(dx: number, dy: number):boolean {
        if (dx == -1) {
            if (this.face == 'w') return true;
            this.face = 'w';
            return false;
        }
        if (dx == 1) {
            if (this.face == 'e') return true;
            this.face = 'e';
            return false;
        }
        if (dy == -1) {
            if (this.face == 'n') return true;
            this.face = 'n';
            return false;
        }
        if (dy == 1) {
            if (this.face == 's') return true;
            this.face = 's';
            return false;
        }
    }

    startMoveCountDown(){
        var moveinterval = setInterval(() => {
            if (this.stamina <= this.maxStamina) {
                this.stamina++;
            }
                // code here will run when the counter reaches zero.
            if (this.fighter.hp == 0) {
                clearInterval(moveinterval);
                deathFunction(this);
            }
        }, 100);
    }
    startAttackCountDown(){
        var attackinterval = setInterval(() => {
            if (this.cooldown > 0) {
                this.cooldown--;
            }
                // code here will run when the counter reaches zero.
            if (this.fighter.hp == 0) {
                clearInterval(attackinterval);
                deathFunction(this);
            }
        }, 100);
    }

    equipStart(item:Entity) {
        this.equipment = item.item;
        this.equipment.owner = this;
        item.item.expire = true;
    }

    equip(item: Entity) {
        if (item.item.type == "main") {
            if (this.equipment == undefined) {
                this.equipment = item.item;
                this.equipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'pickup', item)
            } else {
                let drop = CreateDropItem(this.equipment, this.x, this.y);
                let droppedItem = new Entity(this.x, this.y, drop.item.glyph, drop.item.fullname, 1, false, 5, 2, undefined, undefined, false, drop.item); //cria entidade para dropar
                this._map._entities.push(droppedItem);
                this.equipment = item.item;
                this.equipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'switchEquip', droppedItem, item)
            }
        }
        else if (item.item.type == "sub") {
            if (this.subequipment == undefined) {
                this.subequipment = item.item;
                this.subequipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'pickup', item)
            } else {
                let drop = CreateDropItem(this.subequipment, this.x, this.y);
                let droppedItem = new Entity(this.x, this.y, drop.item.glyph, drop.item.fullname, 1, false, 5, 2, undefined, undefined, false, drop.item); //cria entidade para dropar
                this._map._entities.push(droppedItem);
                this.subequipment = item.item;
                this.subequipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'switchEquip', droppedItem, item);
            }
        }
        else if (item.item.type == "bag") {
            if (item.item.expire == false) {
                this.inventory += 1;
                this._map.messageLog.newMessage(this, 'pickup', item);
            }
            item.item.expire = true;
        }

    }

    usePotion() {
        if (this.inventory == 0 ) {
            this._map.messageLog.newMessage(this, 'potionZero');
            return;
        }
        this._map.messageLog.newMessage(this, 'potion');
        this.inventory -= 1;

        if (this.regen == undefined) {
            this.regen = setInterval(() => {
                if (this.regenMax > 0) {
                    this.fighter.heal(this.fighter.max_hp()*0.035);
                    this.regenMax -= 1;
                }
                if (this.regenMax == 0) {
                    this.regenMax = 10;
                    clearInterval(this.regen);
                    this.regen = undefined;
                }
            }, 500);
        }

    }

    attack(targets: Entity[]) {
        if (this.fighter != undefined) {
            if (this.glyph.char == '@') {
                this.fighter.attack(targets[0])
            } else {
                let player: any = undefined;
                targets.forEach(element => {
                    if (element.glyph.char == '@') {
                        player = element;
                    }
                });
                if (player != undefined) { 
                    this.fighter.attack(player)
                } else {
                    
                }
            }
        }
    }

    skill(targets: Entity[]) {
        targets.forEach((entity, i) => {
            if (entity != this.owner) {
                if (entity.fighter != undefined) {
                    this.owner.fighter.equipment_skill(entity, this);
                }
            }
        })
    }


    hunt(target: Entity){
        let source = this;
        var path = new Path.AStar(target.x, target.y, function(x: number, y: number) {
            // If an entity is present at the tile, can't move there.
            let entity = source._map.getEntitiesAt(this.x1, this.x2, this.y1, this.y2, this);
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

    kite(target: Entity) {
        let source = this;
        let targetx = this.x - (target.x - this.x);
        let targety = this.y - (target.y - this.y);
        var path = new Path.AStar(targetx, targety, function(x: number, y: number) {
            // If an entity is present at the tile, can't move there.
            if (targetx > this._width-1 || targetx < 1 ) return false; 
            if (targety > this._height-1 || targety < 1 ) return false;

            let entity = source._map.getEntitiesAt(this.x1, this.x2, this.y1, this.y2, this);
            if (entity.length > 0) {
                return false;
            }
            return source._map.getTile(x, y)._isWalkable;
        }, {topology: 8});
        var count = 0;
        path.compute(source.x, source.y, function(x: number, y: number) {
            if (count == 1) {
                let dx = (x - source.x);
                let dy = (y - source.y);
                source.move(dx, dy, source._map);
            }
            if (count > 1) {
                return;
            }
            count++;
        });
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