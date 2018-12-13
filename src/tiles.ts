import { Glyph } from "./glyph.js"

export class Tiles {
        nullTile: Glyph;
        floorTile: Glyph;
        wallTile: Glyph;

        constructor() {
            this.nullTile = {char: " ", background: "black", foreground: "white"};
            this.floorTile = {char: ".", background: "black", foreground: "white"};
            this.wallTile = {char: "#", background: "black", foreground: "goldenrod"};
        }
}