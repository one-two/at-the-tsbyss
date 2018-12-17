export class Glyph {
    char: string = ' ';
    foreground: string = 'white';
    background: string = 'black';

    constructor(char: string, background: string, foreground: string) {
        this.char = char;
        this.background = background;
        this.foreground = foreground;
    }
}