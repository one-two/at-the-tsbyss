import { Tiles } from "./tiles"
import { Glyph } from "./glyph";

export class Map {
    _width: Number;
    _height: Number;
    _tiles: Glyph[][];

    constructor(width : number, height : number) {
        this._width = width;
        this._height = height;
        this._tiles = [];
    }

    getTile(x: number, y: number) {
        let tiles = new Tiles();
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return tiles.nullTile;
        } else {
            return this._tiles[x][y] || tiles.nullTile;
        }
    }
}