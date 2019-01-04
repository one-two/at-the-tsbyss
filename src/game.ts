import { Display } from "../lib/index";
import { Tile } from "./tiles";
import { Entity } from "./entity";
import { playScreen, startScreen, winScreen, loseScreen } from "./screens";
import { KEYS } from "../lib/constants";
import { Objeto } from "./interface/objeto";
import { Glyph } from "./glyph";
import { Fighter } from "./components/fighter";
import { Messagelog, Message } from "./messages";


export class Game {
	_display : Display;
	_inventory: Display;
	_messaging: Display;
	_currentScreen : any;
	_screenWidth: number = 90;
	_screenHeight: number = 30;
	_centerX: number;
	_centerY: number;
	Screen : any;
	_map : any;
	_player: Entity;
	_entities: Entity[] = [];
	timer: boolean = true;

	constructor() {
		this._centerX = 0;
		this._centerY = 0;
		this._display= null;
		this._currentScreen= null;
		this.Screen = {
			startScreen : startScreen(),
			playScreen : playScreen(),
			winScreen : winScreen(),
			loseScreen : loseScreen()
		}
		this._map = null;
		this._entities = new Array<Entity>();
	}

	init() {
		// Any necessary initialization will go here.
		this._display = new Display({width: this._screenWidth, height: this._screenHeight});
		this._inventory = new Display({width: 10, height: this._screenHeight});
		this._messaging = new Display({width: this._screenWidth, height: 8});
		this._inventory.drawText(0, 1, 'ola');
		//let game = this; // So that we don't lose this
		let event = "keydown";

		let menu = document.getElementById("menu")
		window.addEventListener(event, e => {
			// When an event is received, send it to the
			// screen if there is one
			console.log(this._player);
			
			if (this._currentScreen !== null) {
				// Send the event type and data to the screen
				this._currentScreen.handleInput(event, e, this);
				this._display.clear();
				this._currentScreen.render(this._display, this);
			}
		});
		//add event listener to inv
		menu.addEventListener("click", e => {
			console.log(this._inventory.eventToPosition(e));
			console.log('hey');
			this._currentScreen.handleInput("click", e, this);
			this._display.clear();
			this._currentScreen.render(this._display, this);
		});

		let log = new Messagelog(0, 100, 10);
		log.addMessage(new Message("teste1"));
		log.addMessage(new Message("teste%c{red}2%c{} !"));
		log.addMessage(new Message("teste%c{#00cc00}3%c{} heh"));
		this.writeMessages(log);
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

	writeMessages(log: Messagelog) {
		let x = 0;
		for (const iterator of log.messages) {
			console.log(iterator.text);
			this._messaging.drawText(1, x, iterator.text);
			x += 1
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
        }, 100);
	}

}


window.onload = function() {
	let game = new Game();
	// Initialize the game
	let fighter = new Fighter(30, 1, 4, 0);
	let player = new Entity(200, 150, new Glyph('@', 'black', 'deepskyblue'), 'Player', 0, undefined, 5, 1, fighter);
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

	//doc = game.getDisplay().getContainer();
	//document.body.appendChild(game.getDisplay().getContainer());
	console.log(document.body);
	// Load the start screen
	game.switchScreen(game.Screen.startScreen);
}


  
