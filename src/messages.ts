import { MessageType } from "./helper/messageType";

export class Messagelog {
    messages: MessageType[];
    x: number;
    width: number;
    height: number;

    constructor(x: number, width: number, height: number) {
        this.messages = [];
        this.x = x;
        this.width = width;
        this.height = height;
    }

    addMessage(message: MessageType) {
        if (this.messages.length == this.height) {
            this.messages.shift();
        }
        this.messages.push(message);
    }
}