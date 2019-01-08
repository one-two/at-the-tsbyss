import { Glyph } from "./glyph"
import { Color } from "../lib";

export class Tile {
    tile: Glyph;
    baseTile: Glyph;
    visitedTile: Glyph;
    visibility: number = 0;
    visited: boolean = false;
    _isWalkable: boolean = false;
    _isDiggable: boolean = false;
    _blocksLight: boolean = false;
    name: string;

    constructor(name: string, char: string=' ', background: any=[0,0,0], foreground: any=[255,255,255], walkable: boolean=false, diggable: boolean=false, blockslight: boolean=false) {
        this.name = name;
        this._isDiggable = diggable;
        this._isWalkable = walkable;
        this._blocksLight = blockslight;
        this.tile = new Glyph(char, background, foreground);
        this.baseTile = new Glyph(char, background, foreground);
        this.visitedTile = new Glyph(char, background, foreground);
        let fogRGB = Color.fromString(this.tile.foreground);
        this.visitedTile.foreground = Color.toRGB([Math.floor(fogRGB[0]*0.2), Math.floor(fogRGB[1]*0.2), Math.floor(fogRGB[2]*0.2)]);
    }
}