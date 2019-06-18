import { MessageType } from "./helper/messageType";
import { Glyph } from "./glyph";
import { Entity } from "./entity";
import { Game } from "./game";

export class Messagelog {
    messages: MessageType[];
    x: number;
    width: number;
    height: number;
    game: Game;

    constructor(x: number, width: number, height: number, game: Game) {
        this.messages = [];
        this.x = x;
        this.width = width;
        this.height = height;
        this.game = game;
    }

    addMessage(message: MessageType) {
        if (this.messages.length == this.height) {
            this.messages.shift();
        }
        this.messages.push(message);
    }

    newMessage(actor: Entity, type: string, target1: Entity, target2: Entity = undefined, extrainfo: string = '') {
        let newMessage: MessageType = {
            message: '',
            type: type,
            color0: actor.glyph.foreground,
            color1: target1 == undefined ? [255,255,255] : target1.glyph.foreground,
            color2: target2 == undefined ? [255,255,255] : target2.glyph.foreground,
        }
        switch (this.game.lang) {
            case "En":
                    if (type == 'pickup') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} equipped a %c{1}" + target1.name + "%c{base} !";
                    }
                    if (type == 'switchEquip') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} switched a %c{1}" + target1.name.toString() + "%c{base} for a %c{2}"+ actor.subequipment.name.toString() +" %c{base}!";
                    }
                    if (type == 'fight') {
                        let damage = extrainfo;
                        newMessage.message = "%c{0}" + actor.name + "%c{base} hit a %c{0}" + target1.name + "%c{base} and dealt "+ damage + " damage! (" +target1.fighter.hp.toFixed(2) +")";
                    }
                    if (type == 'fightZeroDamage') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} hit a %c{0}" + target1.name + "%c{base} but it was ineffective!";
                    }
                    if (type == 'skill') {
                        let damage = extrainfo;
                        newMessage.message = "%c{0}" + actor.name + "%c{base} used a %c{2}" + target2.name + "%c{base} in a %c{1}" + target1.name + "%c{base} and caused "+ damage + " damage! (" +target1.fighter.hp.toFixed(2) +")";
                    }
                    if (type == 'skillZeroDamage') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} hit a %c{2}" + target2.name + "%c{base} but it was ineffective!";
                    }
                break;
            case "Pt":
                    if (type == 'pickup') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} empunhou uma %c{1}" + target1.name + "%c{base} !";
                    }
                    if (type == 'switchEquip') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} trocou uma %c{1}" + target1.name.toString() + "%c{base} por uma %c{2}"+ actor.subequipment.name.toString() +" %c{base}!";
                    }
                    if (type == 'fight') {
                        let damage = extrainfo;
                        newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em um %c{0}" + target1.name + "%c{base} com "+ damage + " de dano! (" +target1.fighter.hp.toFixed(2) +")";
                    }
                    if (type == 'fightZeroDamage') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em um %c{0}" + target1.name + "%c{base} mas não causou dano!";
                    }
                    if (type == 'skill') {
                        let damage = extrainfo;
                        newMessage.message = "%c{0}" + actor.name + "%c{base} usou uma %c{2}" + target2.name + "%c{base} em um %c{1}" + target1.name + "%c{base} com "+ damage + " de dano! (" +target1.fighter.hp.toFixed(2) +")";
                    }
                    if (type == 'skillZeroDamage') {
                        newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em um %c{2}" + target2.name + "%c{base} mas não causou dano!";
                    }
                break;
            default:
                break;
        }

        this.addMessage(newMessage);
        
    }
}