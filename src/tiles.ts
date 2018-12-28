import { Glyph } from "./glyph"

export class Tile {
    tile: Glyph;
    baseTile: Glyph;
    visited: boolean = false;
    _isWalkable: boolean = false;
    _isDiggable: boolean = false;
    _blocksLight: boolean = false;
    name: string;

    constructor(name: string, char: string=' ', background: any='black', foreground: any='white', walkable: boolean=false, diggable: boolean=false, blockslight: boolean=false) {
        this.name = name;
        this._isDiggable = diggable;
        this._isWalkable = walkable;
        this._blocksLight = blockslight;
        this.tile = new Glyph(char, background, foreground);
        this.baseTile = new Glyph(char, background, foreground);
    }
}