import { Display, Color } from "../lib/index";
import { Tile } from "./tiles";
import { Entity } from "./entity";
import { playScreen, startScreen, winScreen, loseScreen, debugScreen } from "./screens";
import { KEYS } from "../lib/constants";
import { Objeto } from "./interface/objeto";
import { Glyph } from "./glyph";
import { Fighter } from "./components/fighter";
import { Messagelog } from "./messages";
import { Map } from "./map";
import { Logo } from "../logo/logo";



export class Game {
	_display : Display;
	_inventory: Display;
	_messaging: Display;
	messageLog: Messagelog;
	_messageBoxSize: number = 10;
	_currentScreen : any;
	_screenWidth: number = 74;
	_screenHeight: number = 40;
	//_screenWidth: number = 120;
	//_screenHeight: number = 90;
	_centerX: number;
	_centerY: number;
	Screen : any;
	_map : Map;
	_player: Entity;
	_entities: Entity[] = [];
	timer: boolean = true;
	logo: any;
	level: number = 1;
	blinkLevel: number = 0;

	constructor() {
		this._centerX = 0;
		this._centerY = 0;
		this._display= null;
		this._currentScreen= null;
		this.Screen = {
			startScreen : startScreen(),
			debugScreen : debugScreen(),
			playScreen : playScreen(),
			winScreen : winScreen(),
			loseScreen : loseScreen()
		}
		this._map = null;
		this._entities = new Array<Entity>();
	}

	init() {
		// Any necessary initialization will go here.
		
		
		this.logo = Logo();
		
		this._display = new Display({
			width: this._screenWidth, 
			height: this._screenHeight, 
			forceSquareRatio:true,
			fontFamily: "Courier",
			fontStyle: "bold", 
			spacing : 0.75});
		this._inventory = new Display({width: 20, height: this._screenHeight*0.75});
		this._messaging = new Display({width: this._screenWidth*1.5, height: this._messageBoxSize});
		this.messageLog = new Messagelog(0, this._screenHeight, this._messageBoxSize);
		this.messageLog.messages = [{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"}, 
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"}, 
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"},
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"},
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"},
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"},
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"},
			{message: '', color1 : [0,0,0], color2 : [0,0,0], type : "empty"}]
		//let game = this; // So that we don't lose this
		let event = "keydown";

		let menu = document.getElementById("menu")
		window.addEventListener(event, e => {
			// When an event is received, send it to the
			// screen if there is one
			if (this._currentScreen !== null) {
				// Send the event type and data to the screen
				this._currentScreen.handleInput(event, e, this);
				this._display.clear();
				this._currentScreen.render(this._display, this);
			}
		});
		//add event listener to inv
		menu.addEventListener("click", e => {
			this._currentScreen.handleInput("click", e, this);
			this._display.clear();
			this._currentScreen.render(this._display, this);
		});

		//this.messageLog.addMessage("teste1");
		//this.messageLog.addMessage("teste%c{red}2%c{} !");
		//this.messageLog.addMessage("teste%c{#00cc00}3%c{} welcome");
		//this.writeMessages();
	}

	getDisplay() {
		return this._display;
	}

	getInventory() {
		return this._inventory;
	}

	getMessaging() {
		return this._messaging;
	}

	writeMessages() {
		let x = 0;
		let alpha = 0;
		let fading = '';
		let fading2 = '';
		let out = '';
		let out2 = '';
		for (let message of this.messageLog.messages) {
			alpha += 0.1;
			if (message.type == 'death' || message.type == 'fight' || message.type == 'skill' || message.type == 'pickup') {
				fading = "%c{rgb(" + Math.round(message.color1[0]*alpha).toString() +","+Math.round(message.color1[1]*alpha).toString() +","+Math.round(message.color1[2]*alpha).toString() +")}";
				fading2 = "%c{rgb(" + Math.round(message.color2[0]*alpha).toString() +","+Math.round(message.color2[1]*alpha).toString() +","+Math.round(message.color2[2]*alpha).toString() +")}";
				out =  message.message.replace(/%c\{0}/g, fading);
				out2 =  out.replace(/%c\{1}/g, fading2);
				this._messaging.drawText(1, x, ''+fading2+out2, this._screenWidth*2);

			}
			x += 1
		}
	}

	writeStats() {
		let hp = this._player.fighter.hp.toFixed(2);
		let max_hp = this._player.fighter.max_hp();
		this._inventory.drawText(0, 1, "Status: ")
		this._inventory.drawText(1, 3, "%c{rgb(255,0,0)}HP: %c{}" +hp + "/" +max_hp);
		this._inventory.drawText(1, 4, "%c{blue}Atk: %c{}"+this._player.fighter.power());
		this._inventory.drawText(1, 5, "%c{yellow}Def: %c{}"+this._player.fighter.defense());

		if (this._player.fighter.unspentPoints > 0) {
			let blink = "";
			if (this.blinkLevel < 2) blink = "%c{rgb(140, 140, 140)}";
			if (this.blinkLevel >= 2) blink = "%c{rgb(240, 240, 240)}";
			if (this.blinkLevel > 5) this.blinkLevel = 0;
			this.blinkLevel += 1;

			this._inventory.drawText(1, 7, blink +" LEVEL UP! : "+this._player.fighter.unspentPoints);
			this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Força: %c{}"+this._player.fighter.base_power + blink + " (a)");
			this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Vitalidade: %c{}"+this._player.fighter.base_defense + blink + " (s)");
			this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}Hp base: %c{}"+ this._player.fighter.base_max_hp + blink + " (d)");
		} else {
			this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Força: %c{}"+this._player.fighter.base_power);
			this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Vitalidade: %c{}"+this._player.fighter.base_defense);
			this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}Hp base: %c{}"+ this._player.fighter.base_max_hp);
		}

		this._inventory.drawText(1, 12, "%c{rgb(140, 140, 160)}Rank: %c{}"+ this._player.fighter.rank);
		this._inventory.drawText(1, 13, "%c{rgb(140, 140, 160)}Exp: %c{}"+ this._player.fighter.current_exp + "/" + this._player.fighter.nextRank);

		if ( this._player.equipment != undefined) {
			this._inventory.drawText(1, 15, "%c{rgb(140, 140, 160)}Main: %c{}"+ this._player.equipment.name);
			this._inventory.drawText(3, 16, "%c{rgb(140, 140, 160)}atk: %c{}"+ this._player.equipment.power_bonus.toFixed(2));
			this._inventory.drawText(3, 17, "%c{rgb(140, 140, 160)}skl: %c{}"+ this._player.equipment.skill_bonus.toFixed(2));
			this._inventory.drawText(3, 18, "%c{rgb(140, 140, 160)}def: %c{}"+ this._player.equipment.defense_bonus.toFixed(2));
			this._inventory.drawText(3, 19, "%c{rgb(140, 140, 160)}hp: %c{}"+ this._player.equipment.hp_bonus.toFixed(2));
			this._inventory.drawText(3, 20, "%c{rgb(140, 140, 160)}cd: %c{}"+ (this._player.equipment.max_cooldown-this._player.equipment.cooldown).toFixed(0) + "/" + this._player.equipment.max_cooldown.toFixed(0));
			
		}

		if ( this._player.subequipment != undefined) {
			this._inventory.drawText(1, 22, "%c{rgb(140, 140, 160)}Sub: %c{}"+ this._player.subequipment.name);
			this._inventory.drawText(3, 23, "%c{rgb(140, 140, 160)}atk: %c{}"+ this._player.subequipment.power_bonus.toFixed(2));
			this._inventory.drawText(3, 24, "%c{rgb(140, 140, 160)}skl: %c{}"+ this._player.subequipment.skill_bonus.toFixed(2));
			this._inventory.drawText(3, 25, "%c{rgb(140, 140, 160)}def: %c{}"+ this._player.subequipment.defense_bonus.toFixed(2));
			this._inventory.drawText(3, 26, "%c{rgb(140, 140, 160)}hp: %c{}"+ this._player.subequipment.hp_bonus.toFixed(2));
			this._inventory.drawText(3, 27, "%c{rgb(140, 140, 160)}cd: %c{}"+ (this._player.subequipment.max_cooldown-this._player.subequipment.cooldown).toFixed(0) + "/" + this._player.subequipment.max_cooldown.toFixed(0));
			
		}
	}

	switchScreen(screen : any) {
	    // If we had a screen before, notify it that we exited
	    if (this._currentScreen !== null) {
	        this._currentScreen.exit();
	    }
	    // Clear the display
	    this.getDisplay().clear();
	    // Update our current screen, notify it we entered
		// and then render it
		this._currentScreen = screen;
	    if (!this._currentScreen !== null) {
			this._currentScreen.enter(this)
			this.refresh();
	    }
	}

	refresh() {
		this._display.clear();
		this._messaging.clear();
		this._inventory.clear();
		if (this._currentScreen == this.Screen.playScreen) {
			this.writeMessages();
			this.writeStats();
		}
		this._currentScreen.render(this._display, this);
	}

	startCountDown(){
		let counter = 1
        var interval = setInterval(() => {
			//console.log(counter);
			
            counter--;
            if (counter < 0) {
                
                // code here will run when the counter reaches zero.
				if (!this.timer) clearInterval(interval);
				else counter = 1;
				this.refresh();
            }	
        }, 50);
	}

}

window.onload = function() {
	let game = new Game();
	// Initialize the game
	let fighter = new Fighter(999, 1, 4, 0);
	let player = new Entity(60, 45, new Glyph('@', [0,0,0], [0, 191, 255]), 'Player', 1, true, 1, 1, fighter, undefined, true);
	player.fighter.unspentPoints = 0;
	game._player = player
	game._entities = [game._player];
	game.init();
	// Add the container to our HTML page
	let doc = document.getElementById("game");
	doc.appendChild(game.getDisplay().getContainer());
	let inv = document.getElementById("menu");
	inv.appendChild(game.getInventory().getContainer());
	let msg = document.getElementById("info");
	msg.appendChild(game.getMessaging().getContainer());

	// Load the start screen
	game.switchScreen(game.Screen.startScreen);
}


  
