import { Game } from "./game"
import { Map } from "./map"
import { KEYS } from "../lib/constants"
import * as Color from "../lib/color"
import { Tiles } from "./tiles";
import * as maps from "../lib/map"
import { Glyph } from "./glyph";

export function startScreen() {
    //Game.Screen.startScreen = {
    return {
        enter : () => {
            console.log('enter');
        },
        exit : () => { 
            console.log("Exited start screen."); 
        },
        render : (display : any) => {
             // Render our prompt to the screen
            display.drawText(1,1, "%c{yellow}Javascript Roguelike");
            display.drawText(1,2, "Press [Enter] to start!");
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            // When [Enter] is pressed, go to the play screen
            if (inputType === "keydown") {
                if (inputData.keyCode === KEYS.VK_RETURN) {
                    game.switchScreen(game.Screen.playScreen);
                }
            }
        }
    }
}

export function playScreen() {
    return {
        enter : (game : Game) => {   
            game._map = new Map(80, 24);
            let tiles = new Tiles();
            console.log("Entered play screen.");
            for (let x = 0; x < 80; x++) {
                // Create the nested array for the y values
                game._map._tiles.push([]);
                // Add all the tiles
                for (let y = 0; y < 24; y++) {
                    game._map._tiles[x].push(tiles.nullTile);
                }
            }

            let generator = new maps.default.Cellular(80, 24);
            generator.randomize(0.5);
            let totalIterations = 3;
            // Iteratively smoothen the map
            for (let i = 0; i < totalIterations - 1; i++) {
                generator.create();
            }
            // Smoothen it one last time and then update our map
            generator.create(function(x,y,v) {
                if (v === 1) {
                    game._map._tiles[x][y] = tiles.floorTile;
                } else {
                    game._map._tiles[x][y] = tiles.wallTile;
                }
            });
            // Create our map from the tiles
            this._map = game._map;
        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display : any) => {
            // Iterate through all map cells
            for (let x = 0; x < this._map._width; x++) {
                for (let y = 0; y < this._map._height; y++) {
                    // Fetch the glyph for the tile and render it to the screen
                    let glyph = this._map.getTile(x, y) as Glyph;
                    display.draw(x, y,
                        glyph.char, 
                        glyph.foreground, 
                        glyph.background);
                }
            }
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                // If enter is pressed, go to the win screen
                // If escape is pressed, go to lose screen
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        game.switchScreen(game.Screen.winScreen);
                        break;
                    case KEYS.VK_ESCAPE:
                        game.switchScreen(game.Screen.loseScreen);
                        break;
                    case KEYS.VK_SPACE:
                        game.switchScreen(game.Screen.playScreen);
                    default:
                        break;
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
        render : (display: any) => {
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
        handleInput : (inputType: any, inputData: any) => {
            // Nothing to do here      
        }
    }
}

// Define our winning screen
export function loseScreen() {
    return {
        enter : () => {    console.log("Entered lose screen."); },
        exit : () => { console.log("Exited lose screen."); },
        render : (display: any) => {
            // Render our prompt to the screen
            for (var i = 0; i < 22; i++) {
                display.drawText(2, i + 1, "%b{red}You lose! :(");
            }
        },
        handleInput : (inputType: any, inputData: any) => {
            // Nothing to do here      
        }
    }
}