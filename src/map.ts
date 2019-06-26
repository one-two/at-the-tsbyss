import { Tile } from "./tiles"
import { Glyph } from "./glyph";
import { Entity } from "./entity";
import { from_dungeon_level, random_choice_from_dict } from "./helper/randFromLevel";
import { randint } from "./helper/randint";
import { CreateMonster } from "./helper/createMonters"
import { Color, FOV, Display } from "../lib";
import { Messagelog } from "./messages";
import { CreateItem } from "./helper/createItens";
import { monsterProbabilities } from "./settings/monsterProbabilities";
import { itemProbabilities } from "./settings/itemProbabilities";
import { Game } from "./game";
import { Exit } from "./content/itens/exit";

export class Map {
    _display: Display;
    messageLog: Messagelog;
    _width: number;
    _height: number;
    dungeon_level: number;
    _entities: Entity[];
    _tiles: Tile[][];
    _fov: any[];
    owner: Game;

    constructor(width : number, height : number) {
        this._width = width;
        this._height = height;
        this._tiles = [];
        this.dungeon_level = 1;
        this._entities = [];
    }

    getTile(x: number, y: number) {
        let emptyTile = new Tile('empty', ' ', [0,0,0], [255,255,255]);
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return emptyTile;
        } else {
            return this._tiles[x][y] || emptyTile;
        }
    }

    getMovableArea(x: number, x2: number, y:number, y2: number): boolean {
        let moveable = true;
        for (let i = x; i <= x2; i++) {
            for (let j = y; j <= y2; j++) {
                if (!this.getTile(i,j)._isWalkable) {
                    moveable = false;
                }
            }
        }
        return moveable;
    }

    getEntitiesAt(x: number, x2: number, y:number, y2: number): Entity[] {
        let targets: Entity[] = [];
        for (let index = 0; index < this._entities.length; index++) {
            for (let i = x; i <= x2; i++) {
                for (let j = y; j <= y2; j++) {
                    if (this._entities[index].x == i && this._entities[index].y == j && this._entities[index].blocks == true) {
                        targets.push(this._entities[index]);
                    }
                }
            }
        }
        return targets;
    }

    getItemAt(x: number, x2: number, y:number, y2: number): Entity[] {
        let targets: Entity[] = [];
        for (let index = 0; index < this._entities.length; index++) {
            for (let i = x; i <= x2; i++) {
                for (let j = y; j <= y2; j++) {
                    if (this._entities[index].x == i && this._entities[index].y == j 
                        && this._entities[index].item != undefined 
                        && this._entities[index].item.expire == false) {
                        targets.push(this._entities[index]);
                    }
                    if (this._entities[index].x == i && this._entities[index].y == j 
                        && this._entities[index].stairs != undefined) {
                        targets.push(this._entities[index]);
                    }
                }
            }
        }
        return targets;
    }

    getPlayer(): Entity {
        let player: Entity;
        for (let index = 0; index < this._entities.length; index++) {
            if (this._entities[index].glyph.char == '@') player = this._entities[index];
        }
        return player;
    }

    addEntityToMap(): void {
        let max_monsters_per_room = from_dungeon_level([[30, 1], [40, 4], [40, 6]], this.dungeon_level)
        let max_items_per_room = from_dungeon_level([[30, 1], [15, 4]], this.dungeon_level)

        let number_of_monsters = randint(Math.ceil(max_monsters_per_room/2), max_monsters_per_room)
        let number_of_items = randint(1, max_items_per_room);
        
        let monster_chances = monsterProbabilities(this.dungeon_level);

        let item_chances = itemProbabilities(this.dungeon_level);

        for (let index = 0; index < number_of_monsters; index++) {
            let x = randint(0, this._width - 1)
            let y = randint(0, this._height - 1)
            let emptyspace = true;
            for (let index = 0; index < this._entities.length; index++) {
                if (this._entities[index].x == x && this._entities[index].y == y) {
                    emptyspace = false;
                }

            }

            if (this.getTile(x, y)._isWalkable == false) {
                emptyspace = false;
            }

            if (emptyspace == true) {
                let monster_choice = random_choice_from_dict(monster_chances);
                let q = CreateMonster(monster_choice, x, y);
                //console.log(q);
                q._map = this;
                this._entities.push(q);
            } else {
                index -= 1;
            }
        }

        for (let index = 0; index < number_of_items; index++) {
            let x = randint(0, this._width - 1)
            let y = randint(0, this._height - 1)
            let emptyspace = true;
            for (let index = 0; index < this._entities.length; index++) {
                if (this._entities[index].x == x && this._entities[index].y == y) {
                    emptyspace = false;
                }

            }

            if (this.getTile(x, y)._isWalkable == false) {
                emptyspace = false;
            }

            if (emptyspace == true) {
                let item_choice = random_choice_from_dict(item_chances);
                let q;
                if (index == 1 ) q = CreateItem("potion", 61, 45);
                else q = CreateItem(item_choice, x, y);
                console.log(item_choice + '- '+ x + ' ' + y);
                console.log(q);
                q._map = this;
                this._entities.push(q);
            } else {
                index -= 1;
            }
        }

        let xexit = randint(0, this._width - 1)
        let yexit = randint(0, this._height - 1)
        let emptyspace = true;

        while (emptyspace) {
            console.log('exit: ' +xexit + ' ' + yexit);
            let dist = Math.sqrt( (this._entities[0].x - xexit)**2+(this._entities[0].y - yexit)**2 );
            if ( dist > 30 && this.getTile(xexit, yexit)._isWalkable) emptyspace = false;
            else {
                xexit = randint(0, this._width - 1)
                yexit = randint(0, this._height - 1)
            }
        }

        
        let exit = new Exit(this);
        let newex = new Entity(xexit, yexit, new Glyph("E", [0,0,0], [20,150,200]), "saida", 1, false, -1,2, undefined, undefined, false, undefined, undefined, undefined, exit);
        this._entities.push(newex);

        return null;
    }



    lightPasses(x: number,y: number) {
        return this._tiles[x][y]._blocksLight;
    }


    setupFov(topleftX: number, topleftY: number) {
        
        let fov = new FOV.PreciseShadowcasting((x,y): boolean => {
            // x = x <= 0 ? this._entities[0].sight+1 : x >= this._width ? this._width-this._entities[0].sight-1 : x;
            // y = y <= 0 ? this._entities[0].sight+1 : y >= this._height ? this._height-this._entities[0].sight-1 : y;
            if ( x >= this._width) x = this._width-1;
            if ( x <= 0) x = 0;
            if ( y >= this._height) y = this._height-1;
            if ( y <= 0) y = 0;
            return !this._tiles[x][y]._blocksLight;
        });

        fov.compute(this._entities[0].x, this._entities[0].y, this._entities[0].sight, (x, y, r, visibility) => {
            let dx = Math.pow(this._entities[0].x - x, 2);
            let dy = Math.pow(this._entities[0].y - y, 2);
            let dist = Math.sqrt(dx+dy);
            if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
                return;
            }
            if (visibility == 0 ) {
                this._tiles[x][y].visibility = visibility;
            } else {
                let fogRGB = this._tiles[x][y].baseTile.foreground;
                let perc = visibility + 0.1
                this._tiles[x][y].visibility = visibility;
                if (dist <= this._entities[0].sight-2) {
                    if (dist <= this._entities[0].sight/2) this._tiles[x][y].visited = true;
                    perc = 1-((dist)/this._entities[0].sight)+0.2;
                    
                    this._tiles[x][y].tile.foreground = [Math.floor(fogRGB[0]*perc), Math.floor(fogRGB[1]*perc), Math.floor(fogRGB[2]*perc)];
                }
                else {
                    this._tiles[x][y].tile.foreground = [Math.floor(fogRGB[0]*0.2), Math.floor(fogRGB[1]*0.2), Math.floor(fogRGB[2]*0.2)];
                }
                
                this._display.draw(x - topleftX, y - topleftY, this._tiles[x][y].tile.char, Color.toRGB(this._tiles[x][y].tile.foreground), Color.toRGB([0,0,0]));
            }

        })
        //this._fov.push(new FOV.DiscreteShadowcasting(this.lightPasses(x,y)) ) 
    }

    getFov() {
        return this._fov;
    }
}


