import { Game } from "./game"
import { Map } from "./map"
import { KEYS } from "../lib/constants"
import * as Color from "../lib/color"
import { Tile } from "./tiles";
import * as maps from "../lib/map"
import { Entity } from "./entity";
import { randint } from "./helper/randint";
import { Knife } from "./content/itens/knife";
import { Display } from "../lib";
import { generateDunMaze } from "./helper/dungeonMaze";
import { CreateItem } from "./helper/createItens";

export function startScreen() {
    //Game.Screen.startScreen = {
    return {
        enter : () => {
            console.log('enter');
        },
        exit : () => { 
            console.log("Exited start screen."); 
        },
        render : (display : any, game: Game) => {
            let y = 8;
            for (const line of game.logo) {
                display.drawText(20,y, line);
                y+=1;
            }

             // Render our prompt to the screen
            display.drawText((game._screenWidth/2)+6,game._screenHeight-5, "%c{yellow}tfw no rl1");
            display.drawText((game._screenWidth/2),game._screenHeight-3, "Press [Enter] to start");
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            // When [Enter] is pressed, go to the play screen
            if (inputType === "keydown") {
                if (inputData.keyCode === KEYS.VK_RETURN) {
                    game.switchScreen(game.Screen.playScreen);
                }
                if (inputData.keyCode === KEYS.VK_COMMA) {
                    game.switchScreen(game.Screen.debugScreen);
                }
            }
        }
    }
}

export function debugScreen() {
    return {
        enter : (game : Game) => {
            createDungeon(game);
            //game._map._tiles[0][0] = new Tile('Floor', 'X', [0,0,0] , [200, 0, 200], true, false);
            // Sync map and game variables
            game._map._entities = [];

            // debug stuff
            let knife = new Knife();
            knife.owner = game._player;
            game._player.equipment = knife;
            game._map._entities.push(game._player); //player always [0]
            game._player._map = game._map;  
            game._map._display = game._display;
            game._map.messageLog = game.messageLog;

            
            //let ai_component = new Fungi();
            //let fighter_component = new Fighter(20, 0, 3, 35);
            //let monster = new Entity(60, 47, new Glyph('f', 'black', '#0000aa'), 'fungi', 1, true, 2, 2, fighter_component, ai_component, false);
            //monster._map = game._map;
            //game._map._entities.push(monster);

            //let knifeItem = new Entity()

            game.timer = true;
            game.startCountDown();
            game._map.addEntityToMap();
            
            game._entities = game._map._entities;

        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display : Display, game: Game) => {
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
                    let cell = game._map.getTile(x, y) as Tile;
                    //cell.visited ?
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        cell.visitedTile.char, 
                        Color.toRGB(cell.tile.foreground), 
                        Color.toRGB(cell.tile.background)) //:
                    /* display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        ' ', 
                        Color.toRGB([0,0,0]), 
                        Color.toRGB([0,0,0]));*/
                    
                }
            }
            //game._map.setupFov(topLeftX, topLeftY);
            removeExpiredDamage(game._entities)
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;
            for (let i = game._entities.length-1; i >= 0; i--) {
                //console.log(game._entities[i]); 
                let cell = game._map.getTile(game._entities[i].x, game._entities[i].y) as Tile;
                if (cell.visibility != 0) { // 0
                    let dx = Math.pow(game._entities[0].x - game._entities[i].x, 2);
                    let dy = Math.pow(game._entities[0].y - game._entities[i].y, 2);
                    let dist = Math.sqrt(dx+dy);
                    if (dist == 0 || dist <= game._entities[0].sight) {
                        display.draw(
                            game._entities[i].x - topLeftX,
                            game._entities[i].y - topLeftY,
                            game._entities[i].glyph.char,
                            Color.toRGB(game._entities[i].glyph.foreground),
                            Color.toRGB(game._entities[i].glyph.background)
                            );
                    }
                }
            }
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        //game.switchScreen(game.Screen.winScreen);
                        let gnd = game._map.getItemAt(game._entities[0].x, game._entities[0].x2, game._entities[0].y, game._entities[0].y2);
                        console.log(gnd);
                        if (gnd.length > 0) {
                            game._entities[0].equip(gnd[0]);
                        } else {
                        }
                        break;
                    case KEYS.VK_ESCAPE:
                        //game.switchScreen(game.Screen.loseScreen);
                        game.timer = false;
                        break;
                    case KEYS.VK_SPACE:
                        if (game._entities[0].equipment != undefined) {
                            game._entities[0].equipment.strike();
                        }
                        break;
                    case KEYS.VK_LEFT:
                        game._entities[0].move(-1, 0, game._map);
                        break;
                    case KEYS.VK_DOWN:
                        game._entities[0].move(0, 1, game._map);
                        break;
                    case KEYS.VK_UP:
                        game._entities[0].move(0, -1, game._map);
                        break;
                    case KEYS.VK_RIGHT:
                        game._entities[0].move(1, 0, game._map);
                        break;
                    default:
                        break;
                }
            }
            if (inputType === 'click') {
                let xx = randint(-5, 5);
                let yy = randint(-5, 5);
                game._entities[0].move(xx, yy, game._map);
            }
        }
    }
}


export function playScreen() {
    return {
        enter : (game : Game) => {
            if (game.level <= 2) {
                createCave(game);
            }
            if (game.level > 2 && game.level <= 4) {
                if( Math.random()*100 < 51 ) {
                    createCave(game);
                } else {
                    createDungeon(game);
                }
            }
            if (game.level >= 5 && game.level < 7 ) {
                createDungeon(game);
            }
            
            // Sync map and game variables
            game._map._entities = [];

            // debug stuff
            let knife = new Knife();
            knife.owner = game._player;
            game._player.equipment = CreateItem('knife', game._player.x, game._player.y).item;
            game._player.equipment.owner = game._player;
            game._map._entities.push(game._player); //player always [0]
            game._player._map = game._map;  
            game._map._display = game._display;
            game._map.messageLog = game.messageLog;

            
            //let ai_component = new Fungi();
            //let fighter_component = new Fighter(20, 0, 3, 35);
            //let monster = new Entity(60, 47, new Glyph('f', 'black', '#0000aa'), 'fungi', 1, true, 2, 2, fighter_component, ai_component, false);
            //monster._map = game._map;
            //game._map._entities.push(monster);

            //let knifeItem = new Entity()

            game.timer = true;
            game.startCountDown();
            game._map.dungeon_level = game.level;
            game._map.addEntityToMap();
            
            game._entities = game._map._entities;

        },
        exit : () => { console.log("Exited play screen."); 
        },
        render : (display : Display, game: Game) => {
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
                    let cell = game._map.getTile(x, y) as Tile;
                    cell.visited ?
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        cell.visitedTile.char, 
                        Color.toRGB(cell.visitedTile.foreground), 
                        Color.toRGB(cell.visitedTile.background)) :
                    display.draw(
                        x - topLeftX, 
                        y - topLeftY,
                        ' ', 
                        Color.toRGB([0,0,0]), 
                        Color.toRGB([0,0,0]));
                    
                }
            }
            game._map.setupFov(topLeftX, topLeftY);
            removeExpiredDamage(game._entities)
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;
            for (let i = game._entities.length-1; i >= 0; i--) {
                //console.log(game._entities[i]); 
                let cell = game._map.getTile(game._entities[i].x, game._entities[i].y) as Tile;
                if (cell.visibility > 0) {
                    let dx = Math.pow(game._entities[0].x - game._entities[i].x, 2);
                    let dy = Math.pow(game._entities[0].y - game._entities[i].y, 2);
                    let dist = Math.sqrt(dx+dy);
                    if (dist == 0 || dist <= game._entities[0].sight) {
                        display.draw(
                            game._entities[i].x - topLeftX,
                            game._entities[i].y - topLeftY,
                            game._entities[i].glyph.char,
                            Color.toRGB(game._entities[i].glyph.foreground),
                            Color.toRGB(game._entities[i].glyph.background)
                            );
                    }
                }
            }
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        //game.switchScreen(game.Screen.winScreen);
                        let gnd = game._map.getItemAt(game._entities[0].x, game._entities[0].x2, game._entities[0].y, game._entities[0].y2);
                        //console.log(gnd);
                        if (gnd.length > 0) {
                            game._entities[0].equip(gnd[0]);
                        } else {
                        }
                        break;
                    case KEYS.VK_ESCAPE:
                        //game.switchScreen(game.Screen.loseScreen);
                        game.timer = false;
                        break;
                    case KEYS.VK_SPACE:
                        if (game._entities[0].equipment != undefined) {
                            game._entities[0].equipment.strike();
                        }
                        break;
                    case KEYS.VK_LEFT:
                        game._entities[0].move(-1, 0, game._map);
                        break;
                    case KEYS.VK_DOWN:
                        game._entities[0].move(0, 1, game._map);
                        break;
                    case KEYS.VK_UP:
                        game._entities[0].move(0, -1, game._map);
                        break;
                    case KEYS.VK_RIGHT:
                        game._entities[0].move(1, 0, game._map);
                        break;
                    default:
                        break;
                }

                if (game._player.fighter.unspentPoints > 0) {
                    switch (inputData.keyCode) {
                        case KEYS.VK_A:
                            game._player.fighter.base_power += 0.8;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        case KEYS.VK_S:
                            game._player.fighter.base_defense += 0.8;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        case KEYS.VK_D:
                            game._player.fighter.base_max_hp += 10;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        default:
                            break;
                    }
                    if (game._player.fighter.unspentPoints < 0) game._player.fighter.unspentPoints = 0;
                }
            }
            if (inputType === 'click') {
                let xx = randint(-5, 5);
                let yy = randint(-5, 5);
                game._entities[0].move(xx, yy, game._map);
            }
        }
    }
}

function createCave(game: Game) {
    let mapWidth = 120;
    let mapHeight = 90;
    game._map = new Map(mapWidth, mapHeight);
    let emptyTile = new Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
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
    generator.randomize(0.66);
    let totalIterations = 3;
    // Iteratively smoothen the map
    for (let i = 0; i < totalIterations - 1; i++) {
        generator.create();
    }
    // Smoothen it one last time and then update our map
    generator.create((x, y, v) => {
        if (v === 1 || x == 0 || y == 0 || x == mapWidth - 1 || x == mapHeight - 1) {
            game._map._tiles[x][y] = new Tile('floor', '.', [0, 0, 0], [84, 54, 11]); //floor
        }
        else {
            game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [218, 165, 32]);
        }
    });
}

function createDungeon(game: Game) {
    let mapWidth = 120;
    let mapHeight = 88;
    game._map = new Map(mapWidth, mapHeight);
    let emptyTile = new Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
    console.log("Entered debug screen.");
    for (let x = 0; x < mapWidth; x++) {
        // Create the nested array for the y values
        game._map._tiles.push([]);
        // Add all the tiles
        for (let y = 0; y < mapHeight; y++) {
            game._map._tiles[x].push(emptyTile);
        }
    }
    let generator = generateDunMaze(mapWidth, mapHeight);
    for (let x = 0; x < mapWidth; x++) {
        for (let y = 0; y < mapHeight; y++) {
            // if (generator[x][y] == 1) {
            //     game._map._tiles[x][y] = new Tile('Wall', '#', [0,0,0], [218, 165, 32], true, true, false); // false, true, true
            // } else {
            //     game._map._tiles[x][y] = new Tile('Floor', '.', [0,0,0] , [84, 54, 11], true, false); //floor
            // }
            if (generator[x][y] == 1) {
                game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [218, 165, 32]); // false, true, true
            }
            if (generator[x][y] == 0) {
                game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [84, 54, 11]); //floor
            }
            if (generator[x][y] == 2) {
                game._map._tiles[x][y] = new Tile('floor', 'E', [0, 0, 0], [200, 0, 0]);
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

export function entityRenderSort(game: Game ) {
    return game._entities.sort(function (a: Entity, b: Entity) {
        if(a.render_order == b.render_order) return 0;
        if (a.render_order == 1) return -1;
        if (b.render_order == 1) return 1;
      
        if (a.render_order < b.render_order)
            return -1;
        if (a.render_order > b.render_order)
            return 1;
        return 0;
      });
}

export function removeExpiredDamage(entities: Entity[]) {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].damage != undefined) {
            if (entities[i].damage.expire) {
                entities.splice(i, 1);
                i--;
            }
        }
        if (entities[i].item != undefined) {
            if (entities[i].item.expire) {
                entities.splice(i, 1);
                i--;
            }
        }
    }
}
