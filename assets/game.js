import { Display } from "../../lib/index.js";
import { Tiles } from "./tiles.js"
import { playScreen, startScreen, winScreen, loseScreen } from "./screens.js"
import { KEYS } from "../lib/constants.js"


export class Game {
	constructor() {
		this._display= null;
		this._currentScreen= null;
		this.Screen = {
			startScreen : startScreen(),
			playScreen : playScreen(),
			winScreen : winScreen(),
			loseScreen : loseScreen()
		}
		this._glyphs = Tiles();
		this._map = null;
	}

	init() {
		// Any necessary initialization will go here.
		this._display = new Display({width: 80, height: 24});
		let game = this; // So that we don't lose this
	}

	getDisplay() {
		return this._display;
	}

	switchScreen(screen) {
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
	        this._currentScreen.render(this._display);
	    }
	}

}


window.onload = function() {
	// Check if rot.js can work on this browser
	let game = new Game();
	// Initialize the game
	game.init();
	// Add the container to our HTML page
	document.body.appendChild(game.getDisplay().getContainer());
	// Load the start screen
	game.switchScreen(game.Screen.startScreen);

	let event = "keydown";
	window.addEventListener(event, e => {
		// When an event is received, send it to the
		// screen if there is one
		console.log(game._glyphs['wallTile']['char'])
		if (game._currentScreen !== null) {
			// Send the event type and data to the screen
			game._currentScreen.handleInput(event, e, game);
		}
	});
}