import { Game } from "./game.js"
import { Map } from "./map.js"
import { KEYS } from "../lib/constants.js"
import * as Color from "../lib/color.js"

export function startScreen() {
    //Game.Screen.startScreen = {
    return {
        enter : () => {
            console.log('enter');
        },
        exit : () => { 
            console.log("Exited start screen."); 
        },
        render : (display) => {
             // Render our prompt to the screen
            display.drawText(1,1, "%c{yellow}Javascript Roguelike");
            display.drawText(1,2, "Press [Enter] to start!");
        },
        handleInput : (inputType, inputData, Game) => {
            // When [Enter] is pressed, go to the play screen
            if (inputType === "keydown") {
                if (inputData.keyCode === KEYS.VK_RETURN) {
                    Game.switchScreen(Game.Screen.playScreen);
                }
            }
        }
    }
}

export function playScreen() {
    return {
        enter : (game) => {   
            game._map = Map(50, 60);
            console.log(game._map)
            console.log("Entered play screen.");
        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display) => {
            display.drawText(3,5, "%c{red}%b{white}This game is so much fun!");
            display.drawText(4,6, "Press [Enter] to win, or [Esc] to lose!");
        },
        handleInput : (inputType, inputData, Game) => {
            if (inputType === 'keydown') {
                // If enter is pressed, go to the win screen
                // If escape is pressed, go to lose screen
                if (inputData.keyCode === KEYS.VK_RETURN) {
                    Game.switchScreen(Game.Screen.winScreen);
                } else if (inputData.keyCode === KEYS.VK_ESCAPE) {
                    Game.switchScreen(Game.Screen.loseScreen);
                }
            }    
        }
    }
}

export function winScreen() {
    return {
        enter : () => {    
            console.log("Entered win screen."); 
        },
        exit : () => { 
            console.log("Exited win screen."); 
        },
        render : (display) => {
            // Render our prompt to the screen
            for (var i = 0; i < 22; i++) {
                // Generate random background colors
                var r = Math.round(Math.random() * 255);
                var g = Math.round(Math.random() * 255);
                var b = Math.round(Math.random() * 255);
                var background = Color.toRGB([r, g, b]);
                display.drawText(2, i + 1, "%b{" + background + "}You win!");
            }
        },
        handleInput : (inputType, inputData) => {
            // Nothing to do here      
        }
    }
}

// Define our winning screen
export function loseScreen() {
    return {
        enter : () => {    console.log("Entered lose screen."); },
        exit : () => { console.log("Exited lose screen."); },
        render : (display) => {
            // Render our prompt to the screen
            for (var i = 0; i < 22; i++) {
                display.drawText(2, i + 1, "%b{red}You lose! :(");
            }
        },
        handleInput : (inputType, inputData) => {
            // Nothing to do here      
        }
    }
}