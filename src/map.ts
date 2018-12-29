import { Tile } from "./tiles"
import { Glyph } from "./glyph";
import { Entity } from "./entity";
import { from_dungeon_level, random_choice_from_dict } from "./helper/randFromLevel";
import { randint } from "./helper/randint";
import { CreateMonster } from "./helper/createMonters"
import { Color, FOV, Display } from "../lib";

export class Map {
    _display: any;
    _width: number;
    _height: number;
    dungeon_level: number;
    _entities: Entity[];
    _tiles: Tile[][];
    _fov: any[];

    constructor(width : number, height : number) {
        this._width = width;
        this._height = height;
        this._tiles = [];
        this.dungeon_level = 1;
        this._entities = [];
    }

    getTile(x: number, y: number) {
        let emptyTile = new Tile('Empty', ' ', 'black', 'white', false, false);
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
                    if (this._entities[index].x == i && this._entities[index].y == j) {
                        targets.push(this._entities[index]);
                    }
                }
            }
        }
        return targets;
    }

    addEntityToMap(): void {
        let max_monsters_per_room = from_dungeon_level([[20, 1], [3, 4], [5, 6]], this.dungeon_level)
        let max_items_per_room = from_dungeon_level([[1, 1], [2, 4]], this.dungeon_level)

        let number_of_monsters = 20;//randint(0, max_monsters_per_room)
        let number_of_items = randint(0, max_items_per_room);
        
        let monster_chances = {
            'fungi': from_dungeon_level([[200, 1]], this.dungeon_level),
            'orc': from_dungeon_level([[200, 1], [60, 3], [40, 7]], this.dungeon_level),
            'troll': from_dungeon_level([[5, 1], [10, 3], [30, 5], [60, 7]], this.dungeon_level),
            'wyvern': from_dungeon_level([[1, 1], [50, 2], [50, 5]], this.dungeon_level),
            'dragon': from_dungeon_level([[1, 1], [10, 3], [20, 7]], this.dungeon_level),
            'ranger': from_dungeon_level([[1, 1]], this.dungeon_level)
        }
        console.log('monster chances');
        console.log(monster_chances);

        let item_chances = {
            'healing_potion': 35,
            'dagger': from_dungeon_level([[10, 0]], this.dungeon_level),
            'sword': from_dungeon_level([[5, 0], [10, 2]], this.dungeon_level),
            'spear': from_dungeon_level([[5, 1], [10, 3]], this.dungeon_level),
            'shield': from_dungeon_level([[5, 0]], this.dungeon_level)
        }

        for (let index = 0; index < number_of_monsters; index++) {
            let x = randint(0, this._width - 1)
            let y = randint(0, this._height - 1)
            let emptyspace = true;
            for (let index = 0; index < this._entities.length; index++) {
                if (this._entities[index].x == x && this._entities[index].y == y) {
                    console.log('what');
                    emptyspace = false;
                }
            }

            if (emptyspace == true) {
                let monster_choice = random_choice_from_dict(monster_chances);
                let q = CreateMonster(monster_choice, x, y);
                q._map = this;
                this._entities.push(q);
            }
        }
        return null;
    }

    lightPasses(x: number,y: number) {
        console.log(this._tiles[x][y]);
        return this._tiles[x][y]._blocksLight;
    }


    setupFov(topleftX: number, topleftY: number) {
        let fov = new FOV.PreciseShadowcasting((x,y): boolean => {return !this._tiles[x][y]._blocksLight});

        fov.compute(this._entities[0].x, this._entities[0].y, this._entities[0].sight, (x, y, r, visibility) => {
            let dx = Math.pow(this._entities[0].x - x, 2);
            let dy = Math.pow(this._entities[0].y - y, 2);
            let dist = Math.sqrt(dx+dy);
            let fogRGB = Color.fromString(this._tiles[x][y].baseTile.foreground);
            if (dist <= this._entities[0].sight-2) {
                this._tiles[x][y].visited = true;
                let perc = 1-((dist)/this._entities[0].sight)+0.2;
                this._tiles[x][y].tile.foreground = Color.toRGB([Math.floor(fogRGB[0]*perc), Math.floor(fogRGB[1]*perc), Math.floor(fogRGB[2]*perc)]);
            }
            else {
                this._tiles[x][y].tile.foreground = Color.toRGB([Math.floor(fogRGB[0]*0.2), Math.floor(fogRGB[1]*0.2), Math.floor(fogRGB[2]*0.2)]);
            }
            
            //console.log('draw at: ' + x + ', ' + y);
            this._display.draw(x - topleftX, y - topleftY, this._tiles[x][y].tile.char, this._tiles[x][y].tile.foreground, 'black');
        })
        //this._fov.push(new FOV.DiscreteShadowcasting(this.lightPasses(x,y)) )
    }

    getFov() {
        return this._fov;
    }

    setFOV(x: number, y: number) {
        let dx = Math.pow(this._entities[0].x - x, 2)
        let dy = Math.pow(this._entities[0].y - y, 2)
        let dist = Math.sqrt(dx+dy)
        if (dist <= this._entities[0].sight) {
            this._tiles[x][y].visited = true;
            let fogRGB = Color.fromString(this._tiles[x][y].baseTile.foreground);
            let perc = 1-((dist)/this._entities[0].sight)+0.1;
            this._tiles[x][y].tile.foreground = Color.toRGB([Math.floor(fogRGB[0]*perc), Math.floor(fogRGB[1]*perc), Math.floor(fogRGB[2]*perc)]);
        }
        else {
            let fogRGB = Color.fromString(this._tiles[x][y].baseTile.foreground);
            this._tiles[x][y].tile.foreground = Color.toRGB([Math.floor(fogRGB[0]*0.1), Math.floor(fogRGB[1]*0.1), Math.floor(fogRGB[2]*0.1)]);
        }
    }
}


