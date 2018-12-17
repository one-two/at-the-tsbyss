import { Glyph } from "./glyph"

export class Tile {
    tile: Glyph;
    _isWalkable: boolean = false;
    _isDiggable: boolean = false;
    name: string;

    constructor(name: string, char: string=' ', background: string='black', foreground: string='white', walkable: boolean=false, diggable: boolean=false) {
        this.name = name;
        this._isDiggable = diggable;
        this._isWalkable = walkable;
        this.tile = new Glyph(char, background, foreground);
    }
}