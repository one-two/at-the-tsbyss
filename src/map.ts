import { Tile } from "./tiles"
import { Glyph } from "./glyph";
import { Entity } from "./entity";

export class Map {
    _width: Number;
    _height: Number;
    _tiles: Tile[][];

    constructor(width : number, height : number) {
        this._width = width;
        this._height = height;
        this._tiles = [];
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

    getEntitiesAt(x: number, x2: number, y:number, y2: number, entities: Entity[]): Entity[] {
        let targets: Entity[] = [];
        for (let entity of entities) {
            for (let i = x; i <= x2; i++) {
                for (let j = y; j <= y2; j++) {
                    if (entity.x == i && entity.y == j) {
                        targets.push(entity);
                    }
                }
            }
        }
        return targets;
    }
}


