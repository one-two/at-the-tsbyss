export class Message {
    text: string;
    color: string;

    constructor(text: string) {
        this.text = text;
    }
}

export class Messagelog {
    messages: Message[];
    x: number;
    width: number;
    height: number;

    constructor(x: number, width: number, height: number) {
        this.messages = [];
        this.x = x;
        this.width = width;
        this.height = height;
    }

    addMessage(message: Message) {
        if (this.messages.length == this.height) {
            this.messages.shift();
        }
        this.messages.push(message);
    }
}