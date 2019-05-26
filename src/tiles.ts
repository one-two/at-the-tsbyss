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

    constructor(name: string, char: string=' ', background: [number,number,number]=[0,0,0], foreground: [number,number,number]=[255,255,255]) {
        let walkable = false;
        let diggable = false;
        let blockslight = false;

        switch (name) {
            case 'debugWall':
                blockslight = false;
            case 'wall':
                walkable = false;
                diggable = false;
                blockslight = false;
                break;
            case 'floor':
                walkable = true;
            case 'empty':
                walkable = true;
            default:
                break;
        }
        
        
        this.name = name;
        this._isDiggable = diggable;
        this._isWalkable = walkable;
        this._blocksLight = blockslight;
        this.tile = new Glyph(char, background, foreground);
        this.baseTile = new Glyph(char, background, foreground);
        this.visitedTile = new Glyph(char, background, foreground);
        let fogRGB = this.tile.foreground;
        this.visitedTile.foreground = [Math.floor(fogRGB[0]*0.2), Math.floor(fogRGB[1]*0.2), Math.floor(fogRGB[2]*0.2)];
    }
}