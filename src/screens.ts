import { Game } from "./game"
import { Map } from "./map"
import { KEYS } from "../lib/constants"
import * as Color from "../lib/color"
import { Tile } from "./tiles";
import * as maps from "../lib/map"
import { Glyph } from "./glyph";
import { Entity } from "./entity";
import { Fungi } from "./content/monsters/fungi";

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
            let emptyTile = new Tile('Empty', ' ', 'black', 'white', true, false, false);
            console.log("Entered play screen.");
            for (let x = 0; x < mapWidth; x++) {
                // Create the nested array for the y values
                game._map._tiles.push([]);
                // Add all the tiles
                for (let y = 0; y < mapHeight; y++) {
                    game._map._tiles[x].push(emptyTile);
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
                    game._map._tiles[x][y] = new Tile('Floor', '.', Color.toRGB([0,0,0]) , Color.toRGB([84, 54, 11]), true, false); //floor
                } else {
                    game._map._tiles[x][y] = new Tile('Wall', '#', 'black', 'goldenrod', false, true, true);
                }
            });
            game._player._map = game._map;  
            game.timer = true;
            game.startCountDown();
            game._map._entities.push(game._player);
            game._map.addEntityToMap();
            console.log(game._map._entities);
            game._entities = game._map._entities;
        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display : any, game: Game) => {
            let screenWidth = game._screenWidth;
            let screenHeight = game._screenHeight;
            let player = game._player;
            // Make sure the x-axis doesn't go to the left of the left bound
            let topLeftX = Math.max(0, player.x - (screenWidth / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftX = Math.min(topLeftX, game._map._width - screenWidth);
            // Make sure the y-axis doesn't above the top bound
            let topLeftY = Math.max(0, player.y - (screenHeight / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftY = Math.min(topLeftY, game._map._height - screenHeight);
            for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
                for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
                    // Fetch the glyph for the tile and render it to the screen
                    //game._map.setFOV(x, y);
                    let cell = game._map.getTile(x, y) as Tile;
                    cell.visited ?
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        cell.tile.char, 
                        cell.tile.foreground, 
                        cell.tile.background) :
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        ' ', 
                        Color.toRGB([0,0,0]), 
                        Color.toRGB([0,0,0]));
                    game._map.setupFov(display);
                }
            }
            let szet = game._entities.length;
            for (let i = 0; i < game._entities.length; i++) {
                //console.log(game._entities[i]);
                display.draw(
                    game._entities[i].x - topLeftX,
                    game._entities[i].y - topLeftY,
                    game._entities[i].glyph.char,
                    game._entities[i].glyph.foreground,
                    game._entities[i].glyph.background);
                
            }
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        game.switchScreen(game.Screen.winScreen);
                        game.timer = false;
                        break;
                    case KEYS.VK_ESCAPE:
                        game.switchScreen(game.Screen.loseScreen);
                        game.timer = false;
                        break;
                    case KEYS.VK_SPACE:
                        game.switchScreen(game.Screen.playScreen);
                        break;
                    case KEYS.VK_LEFT:
                        game._player.move(-1, 0, game._map);
                        break;
                    case KEYS.VK_DOWN:
                        game._player.move(0, 1, game._map);
                        break;
                    case KEYS.VK_UP:
                        game._player.move(0, -1, game._map);
                        break;
                    case KEYS.VK_RIGHT:
                        game._player.move(1, 0, game._map);
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