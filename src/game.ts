import { Display } from "../lib/index";
import { Tile } from "./tiles";
import { Entity } from "./entity";
import { playScreen, startScreen, winScreen, loseScreen } from "./screens";
import { KEYS } from "../lib/constants";
import { Objeto } from "./interface/objeto";
import { Glyph } from "./glyph";
import { Ai } from "./ai";


export class Game {
	_display : any;
	_currentScreen : any;
	_screenWidth: number = 100;
	_screenHeight: number = 36;
	_centerX: number;
	_centerY: number;
	Screen : any;
	_map : any;
	_player: Entity;
	_entities: Entity[];
	GlobalTime: number;

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
	}

	init() {
		// Any necessary initialization will go here.
		this._display = new Display({width: this._screenWidth, height: this._screenHeight});
		//let game = this; // So that we don't lose this
		let event = "keydown";
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
	}

	getDisplay() {
		return this._display;
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
		this.GlobalTime = 0;
		this._currentScreen = screen;
	    if (!this._currentScreen !== null) {
			this._currentScreen.enter(this)
			this.refresh();
	    }
	}

	move(dX: number, dY: number) {
		// Positive dX means movement right
		// negative means movement left
		// 0 means none
		this._centerX = Math.max(0,
			Math.min(this._map._width - 1, this._centerX + dX));
		// Positive dY means movement down
		// negative means movement up
		// 0 means none
		this._centerY = Math.max(0,
			Math.min(this._map._height - 1, this._centerY + dY));
	}

	refresh() {
		this._display.clear();
		this._currentScreen.render(this._display, this);
	}

}


window.onload = function() {
	let game = new Game();
	// Initialize the game
	game.init();
	let player = new Entity(150, 150, new Glyph('@', 'black', 'deepskyblue'), 'Player', 1, undefined, 20);
	let player2 = new Entity(150, 150, new Glyph('@', 'black', 'deepskyblue'), 'Player', 1, undefined, 13);
	game._player = player;
	// Add the container to our HTML page
	document.body.appendChild(game.getDisplay().getContainer());
	// Load the start screen
	game.switchScreen(game.Screen.startScreen);
	let event = "keydown";
	// window.addEventListener(event, e => {
	// 	// When an event is received, send it to the
	// 	// screen if there is one
	// 	if (game._currentScreen !== null) {
	// 		// Send the event type and data to the screen
	// 		game._currentScreen.handleInput(event, e, game);
	// 		game._display.clear();
	// 		game._currentScreen.render(game._display, game);
	// 	}
	// });
}

