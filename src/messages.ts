export class Messagelog {
    messages: string[];
    x: number;
    width: number;
    height: number;

    constructor(x: number, width: number, height: number) {
        this.messages = [];
        this.x = x;
        this.width = width;
        this.height = height;
    }

    addMessage(message: string) {
        if (this.messages.length == this.height) {
            this.messages.shift();
        }
        this.messages.push(message);
    }
}