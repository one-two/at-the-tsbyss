let func = () => { console.log("Entered start screen."); }

let Game =  {
	_display: null,
    _currentScreen: null,
    Screen : {
        startScreen : null,
        playScreen : null,
        winScreen : null,
        loseScreen : null
    },
	init() {
	    // Any necessary initialization will go here.
	    this._display = new ROT.Display({width: 80, height: 24});
	    // Create a helper function for binding to an event
	    // and making it send it to the screen
	    var game = this; // So that we don't lose this
	    var bindEventToScreen = function(event) {
	        window.addEventListener(event, function(e) {
	            // When an event is received, send it to the
                // screen if there is one
	            if (game._currentScreen !== null) {
	                // Send the event type and data to the screen
	                game._currentScreen.handleInput(event, e);
	            }
	        });
	    }
	    // Bind keyboard input events
	    bindEventToScreen('keydown');
	    bindEventToScreen('keyup');
        bindEventToScreen('keypress');
	},
	getDisplay() {
		return this._display;
	},
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
	        this._currentScreen.enter()
	        this._currentScreen.render(this._display);
	    }
	}
}

window.onload = function() {
    // Check if rot.js can work on this browser

	// Initialize the game
	Game.init();
	// Add the container to our HTML page
	document.body.appendChild(Game.getDisplay().getContainer());
	// Load the start screen
	Game.switchScreen(Game.Screen.startScreen);
}