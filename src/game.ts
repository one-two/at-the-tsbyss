import { Display } from "../lib/index";
import { Tile } from "./tiles";
import { Entity } from "./entity";
import { playScreen, startScreen, winScreen, loseScreen } from "./screens";
import { KEYS } from "../lib/constants";
import { Objeto } from "./interface/objeto";
import { Glyph } from "./glyph";


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
	let player = new Entity(150, 150, new Glyph('@', 'black', 'deepskyblue'), 'Player', 0, undefined, 5);
	game._player = player;
	game.init();
	// Add the container to our HTML page
	document.body.appendChild(game.getDisplay().getContainer());
	// Load the start screen
	game.switchScreen(game.Screen.startScreen);
}

