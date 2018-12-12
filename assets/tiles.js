import { Glyphs } from "./glyph.js"

export function Tiles() {
    return {
        nullTile: Glyphs(),
        floorTile: Glyphs('.'),
        wallTile: Glyphs('#', 'goldenrod')
    }
}