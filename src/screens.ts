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
            display.drawText(1,1, "%c{yellow}no rl");
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
            let mapWidth = 300;
            let mapHeight = 300;
            game._map = new Map(mapWidth, mapHeight);
            let tiles = new Tiles();
            console.log("Entered play screen.");
            for (let x = 0; x < mapWidth; x++) {
                // Create the nested array for the y values
                game._map._tiles.push([]);
                // Add all the tiles
                for (let y = 0; y < mapHeight; y++) {
                    game._map._tiles[x].push(tiles.nullTile);
                }
            }

            let generator = new maps.default.Cellular(mapWidth, mapHeight);
            generator.randomize(0.6);
            let totalIterations = 3;
            // Iteratively smoothen the map
            for (let i = 0; i < totalIterations - 1; i++) {
                generator.create();
            }
            // Smoothen it one last time and then update our map
            generator.create((x,y,v) => {
                if (v === 1) {
                    game._map._tiles[x][y] = tiles.floorTile;
                } else {
                    game._map._tiles[x][y] = tiles.wallTile;
                }
            });
        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display : any, game: Game) => {
            let screenWidth = game._screenWidth;
            let screenHeight = game._screenHeight;
            // Make sure the x-axis doesn't go to the left of the left bound
            let topLeftX = Math.max(0, game._centerX - (screenWidth / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftX = Math.min(topLeftX, game._map._width - screenWidth);
            // Make sure the y-axis doesn't above the top bound
            let topLeftY = Math.max(0, game._centerY - (screenHeight / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftY = Math.min(topLeftY, game._map._height - screenHeight);
            // Iterate through all map cells
            //console.log('topleftx: ' + topLeftX + ' ' + screenWidth)
            //console.log('toplefty: ' + topLeftY + ' ' + screenHeight)
            for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
                for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
                    // Fetch the glyph for the tile and render it to the screen
                    let glyph = game._map.getTile(x, y) as Glyph;
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        glyph.char, 
                        glyph.foreground, 
                        glyph.background);
                }
            }
            display.draw(
                game._centerX - topLeftX,
                game._centerY - topLeftY,
                '@',
                'deepskyblue',
                'black');
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        game.switchScreen(game.Screen.winScreen);
                        break;
                    case KEYS.VK_ESCAPE:
                        game.switchScreen(game.Screen.loseScreen);
                        break;
                    case KEYS.VK_SPACE:
                        game.switchScreen(game.Screen.playScreen);
                        break;
                    case KEYS.VK_LEFT:
                        game.move(-1, 0);
                        break;
                    case KEYS.VK_DOWN:
                        game.move(0, 1);
                        break;
                    case KEYS.VK_UP:
                        game.move(0, -1);
                        break;
                    case KEYS.VK_RIGHT:
                        game.move(1, 0);
                        break;
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