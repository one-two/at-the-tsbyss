export class Glyph {
    char: string = ' ';
    foreground: [number, number, number] = [255,255,255];
    background: [number, number, number] = [0,0,0];

    constructor(char: string, background: [number, number, number], foreground: [number, number, number]) {
        this.char = char;
        this.background = background;
        this.foreground = foreground;
    }
}