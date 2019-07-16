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
import { Exit } from "./content/itens/exit";
import { Glyph } from "./glyph";
import { CreateMonster } from "./helper/createMonters";
import { Fighter } from "./components/fighter";

export function startScreen() {
    //Game.Screen.startScreen = {
    return {
        enter : (game: Game) => {
            let fighter = new Fighter(100, 1, 4, 0);
            let player = new Entity(60, 45, new Glyph('@', [0,0,0], [0, 191, 255]), 'The Princess', 1, true, 1, 1, fighter, undefined, true);
            player.fighter.unspentPoints = 2;
            game._player = player
            game._entities = [game._player];
            //let knife = new Knife();
            //knife.owner = game._player;
            //game._player.equipment = CreateItem('knife', game._player.x, game._player.y).item;
            game._player.equipStart(CreateItem('knife', game._player.x, game._player.y, 1));
            game._player.equipment.owner = game._player;
            console.log('enter');
            var http = new XMLHttpRequest();
            var url = 'http://localhost:3333/api/leaderboard';
            http.open('GET', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    game.scores = JSON.parse(http.responseText).docs;
                    console.log(game.scores);
                }
            }
            http.send('');
        },
        exit : () => { 
            console.log("Exited start screen."); 
        },
        render : (display : any, game: Game) => {
            display.drawText(0,0, "%c{rgb(70, 70, 70)}Beta: v.190711");
            let y = 8;
            for (const line of game.logo) {
                display.drawText(10,y, line);
                y+=1;
            }


            let blink = "";
			if (game.blinkLevel < 2) blink = "%c{rgb(140, 140, 140)}";
			if (game.blinkLevel >= 2) blink = "%c{rgb(240, 240, 240)}";
			if (game.blinkLevel > 5) game.blinkLevel = 0;
            game.blinkLevel += 1;

             // Render our prompt to the screen
            display.drawText((game._screenWidth/2),game._screenHeight-10, "%c{rgb(0, 191, 255)}We are lost...");
            display.drawText((game._screenWidth/2)-5,game._screenHeight-7, "%c{rgb(0, 191, 255)}Who are you? %c{}"+ game._entities[0].name + blink +"_");
            if (game.mainmenuOpt == 0) display.drawText((game._screenWidth/2)-1,game._screenHeight-5, "%c{yellow}>Eng%c{}      Port");
            if (game.mainmenuOpt == 1) display.drawText((game._screenWidth/2),game._screenHeight-5, "Eng     %c{yellow}>Port%c{}"); 

            display.drawText((game._screenWidth/10),game._screenHeight-4, "%c{yellow}Arrow%c{}: move/attack"); 
            display.drawText((game._screenWidth/10),game._screenHeight-3, "%c{yellow}Enter%c{}: pickup itens/open door"); 
            display.drawText((game._screenWidth/10),game._screenHeight-2, "%c{yellow}Space%c{}: use weapon skill"); 
            display.drawText((game._screenWidth/10),game._screenHeight-1, "%c{yellow}P Key%c{}: use potion"); 
            
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            // When [Enter] is pressed, go to the play screen
            if (inputType === "keydown") {
                // if (inputData.keyCode === KEYS.VK_E) {
                //     game.lang = "En";
                //     game.switchScreen(game.Screen.playScreen);
                // }
                // if (inputData.keyCode === KEYS.VK_P) {
                //     game.lang = "Pt";
                //     game.switchScreen(game.Screen.playScreen);
                // }
                if (inputData.keyCode === KEYS.VK_RETURN || inputData.keyCode === KEYS.VK_ENTER) {
                    if (game.mainmenuOpt == 0) game.lang = "En";
                    if (game.mainmenuOpt == 1) game.lang = "Pt";
                    let hash = hashStringToColor(game._entities[0].name);
                    game._entities[0].glyph.foreground[0] = Color.fromString(hash)[0];
                    game._entities[0].glyph.foreground[1] = Color.fromString(hash)[1];
                    game._entities[0].glyph.foreground[2] = Color.fromString(hash)[2];
                    game.switchScreen(game.Screen.playScreen);
                }
                if (inputData.keyCode === KEYS.VK_COMMA) {
                    game.switchScreen(game.Screen.debugScreen);
                }

                if (inputData.keyCode === KEYS.VK_LEFT) {
                    game.mainmenuOpt -= 1;
                    if (game.mainmenuOpt < 0) game.mainmenuOpt = 0;
                }
                if (inputData.keyCode === KEYS.VK_RIGHT) {
                    game.mainmenuOpt += 1;
                    if (game.mainmenuOpt > 1) game.mainmenuOpt = 1;
                }

                if (inputData.keyCode >= 65 && inputData.keyCode <= 90) game._entities[0].name = game._entities[0].name + inputData.key;
                if (inputData.keyCode == 8 && game._entities[0].name.length > 0) {
                    game._entities[0].name = game._entities[0].name.slice(0,-1);
                }
                if (inputData.keyCode == 32 && game._entities[0].name.length > 0) game._entities[0].name = game._entities[0].name + " ";
                if (inputData.keyCode == KEYS.VK_Q) {
                    game.switchScreen(game.Screen.scoreScreen);
                    // var http = new XMLHttpRequest();
                    // var url = 'http://localhost:3333/api/leaderboard';
                    // http.open('GET', url, true);

                    // //Send the proper header information along with the request
                    // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    // http.onreadystatechange = function() {//Call a function when the state changes.
                    //     if(http.readyState == 4 && http.status == 200) {
                    //         alert(http.responseText);
                    //     }
                    // }
                    // http.send('');
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
            //game.startCountDown();
            game._map.addEntityToMap('cave');
            
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
                        Color.toRGB(cell.tile.background))
                    
                }
            }
            removeExpiredDamage(game._entities)
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;
            for (let i = game._entities.length-1; i >= 0; i--) {
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
            let corr = 99;
            if (game.level == 0) {
                createStart(game);

                game._player.x = 10;
                game._player.x2 = 10;
                game._player.y = 28;
                game._player.y2 = 28;
                game._map._entities.push(game._player);
                game._player._map = game._map;  
                game._map._display = game._display;
                game._map.messageLog = game.messageLog;
                game.timer = true;
                //game.startCountDown();
                game._map.dungeon_level = game.level;
                let exit = new Exit(game._map);
                let newex = new Entity(10, 2, new Glyph("⍝", [0,0,0], [20,150,200]), "saida", 1, false, -1,2, undefined, undefined, false, undefined, undefined, undefined, exit);
                game._map._entities.push(newex);
                let dummy = CreateMonster('dummy', 10, 5, 1);
                dummy._map = game._map;
                game._map._entities.push(dummy);
                let posx = [6,10,14];
                let posy = [12,10,12];
                for (let i = 0; i < 3; i++) {

                    let rd = randint(0,3);
                    let item_choice = "";
                    if (rd == 0) item_choice = 'potion';
                    if (rd == 1) item_choice = 'knife';
                    if (rd == 2) item_choice = 'dagger';
                    if (rd == 3) item_choice = 'sword';
                    let q = CreateItem(item_choice, posx[i], posy[i], game.level);
                    q._map = this;
                    game._map._entities.push(q);
                }

                game._entities = game._map._entities;
                return;
            }
            let mapType = '';
            if (game.level > 0 && game.level <= 2) {
                corr = createCave(game);
                mapType = 'cave';
                if (game.level == 1) corr = 1;
            }
            if (game.level > 2 && game.level <= 4) {
                if( Math.random()*100 < 51 ) {
                    corr = createCave(game);
                    mapType = 'cave';
                } else {
                    corr = createDungeon(game);
                    mapType = 'dungeon';
                }
            }
            if (game.level >= 5 && game.level < 7 ) {
                corr = createDungeon(game);
                mapType = 'dungeon';
            }
            if (game.level == 8) {
                game.switchScreen(winScreen);
            }
            if (game.level == 7) {
                createArena(game);
                game._player.x = 10;
                game._player.x2 = 10;
                game._player.y = 28;
                game._player.y2 = 28;
                game._map._entities.push(game._player);
                game._player._map = game._map;  
                game._map._display = game._display;
                game._map.messageLog = game.messageLog;
                game.timer = true;
                //game.startCountDown();
                game._map.dungeon_level = game.level;
                game._map.addBossToMap();
                game._entities = game._map._entities;
                return;
            }
            
            // Sync map and game variables
            game._map._entities = [];
            game._map._entities.push(game._player); //player always [0]

            let newPlayerPositionBlocked = true;

            while (newPlayerPositionBlocked) {
                let x = randint(0, game._map._width - 1)
                let y = randint(0, game._map._height - 1)

                if (game._map.getTile(x, y)._isWalkable == false) {
                    newPlayerPositionBlocked = true;
                } else {
                    game._player.x = x;
                    game._player.x2 = x;
                    game._player.y = y;
                    game._player.y2 = y;
                    newPlayerPositionBlocked = false;
                }
            }



            game._player._map = game._map;  
            game._map._display = game._display;
            game._map.messageLog = game.messageLog;



            game.timer = true;
            //game.startCountDown();
            if (corr) {
                game._map.dungeon_level = game.level;
                game._map.addEntityToMap(mapType);
            } else {
                game._map.dungeon_level = game.level+2;
                game._map.addEntityToMap(mapType);
                game._map.dungeon_level -= 2
            }

            
            game._entities = game._map._entities;
        },
        exit : (game: Game) => { 
            console.log("Exited play screen."); 
            for (let i = 0; i < game._map._entities.length; i++) {
                let element = game._map._entities[i];
                if (element.fighter != undefined && element.player == false) element.fighter.hp = 0;
            }
            game._map._entities = [];
            game._map._tiles = [];
        },
        render : (display : Display, game: Game) => {
            let screenWidth = game._screenWidth;
            let screenHeight = game._screenHeight;
            if (game._player.fighter.status == 'dead') {
                game.switchScreen(game.Screen.loseScreen);
                return;
            }
            let player = game._player;
            // Make sure the x-axis doesn't go to the left of the left bound
            let topLeftX = Math.max(0, player.x - (screenWidth / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftX = Math.min(topLeftX, game._map._width - screenWidth);
            // Make sure the y-axis doesn't above the top bound
            let topLeftY = Math.max(0, player.y - (screenHeight / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftY = Math.min(topLeftY, game._map._height - screenHeight);

            if (game.level % 7 != 0) {
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
            } else {
                for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
                    for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
                        // Fetch the glyph for the tile and render it to the screen
                        let cell = game._map.getTile(x, y) as Tile;
                        if (cell.name == 'bossTile') game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [66, 7, 7]);
                        display.draw(
                            x - topLeftX, 
                            y - topLeftY,
                            cell.baseTile.char, 
                            Color.toRGB(cell.baseTile.foreground), 
                            Color.toRGB(cell.baseTile.background))

                    }
                }
            }


            removeExpiredDamage(game._entities)
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;

            if (game.level % 7 != 0) {
                for (let i = game._entities.length-1; i >= 0; i--) {
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
            } else {
                for (let i = game._entities.length-1; i >= 0; i--) {
                    if (game._entities[i].boss == undefined) {
                        display.draw(
                            game._entities[i].x - topLeftX,
                            game._entities[i].y - topLeftY,
                            game._entities[i].glyph.char,
                            Color.toRGB(game._entities[i].glyph.foreground),
                            Color.toRGB(game._entities[i].glyph.background)
                            );
                    } else {
                        for (let xhitbox = game._entities[i].x; xhitbox < game._entities[i].x2; xhitbox++) {
                            for (let yhitbox = game._entities[i].y; yhitbox < game._entities[i].y2; yhitbox++) {
                                game._map._tiles[xhitbox][yhitbox] = new Tile('bossTile', ' ');
                            }
                        }
                        for (let line = 0; line < game._entities[i].boss.length-1; line++) {
                            for (let letter = 0; letter < game._entities[i].boss[line].length; letter++) {
                                let l = game._entities[i].boss[line][letter];
                                let cell = game._map.getTile(game._entities[i].x+letter, game._entities[i].y+line) as Tile;
                                if (l != "·" && cell.name != 'wall') {
                                    //game._map._tiles[game._entities[i].x+letter-10][game._entities[i].y+line] = new Tile('bossTile', ' ');
                                    display.draw(
                                        game._entities[i].x+letter - topLeftX - 10,
                                        game._entities[i].y+line - topLeftY,
                                        l,
                                        Color.toRGB(game._entities[i].glyph.foreground),
                                        Color.toRGB(game._entities[i].glyph.background)
                                        );
                                }
                                else {
                                    game._map._tiles[game._entities[i].x+letter][game._entities[i].y+line] = new Tile('floor', '·', [0, 0, 0], [66, 7, 7]);
                                }
                            }
                        }
                    }
                }
            }


            if (game.level == 0) {
                display.drawText((game._screenWidth/10),game._screenHeight-4, "%c{yellow}Arrow%c{}: move/attack"); 
                display.drawText((game._screenWidth/10),game._screenHeight-3, "%c{yellow}Enter%c{}: pickup itens/open door"); 
                display.drawText((game._screenWidth/10),game._screenHeight-2, "%c{yellow}Space%c{}: use weapon skill"); 
                display.drawText((game._screenWidth/10),game._screenHeight-1, "%c{yellow}P Key%c{}: use potion"); 
            }
        },
        handleInput : (inputType : any, inputData : any, game : Game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case KEYS.VK_RETURN:
                        let gnd = game._map.getItemAt(game._entities[0].x, game._entities[0].x2, game._entities[0].y, game._entities[0].y2);
                        if (gnd.length > 0) {
                            if (gnd[0].stairs == undefined) {
                                game._entities[0].equip(gnd[0]);
                            } else {
                                gnd[0].stairs.climb();
                            }
                        } else {
                            console.log("nada")
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
                    case KEYS.VK_P:
                        game._entities[0].usePotion();
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
                            game._player.fighter.hp += 5;
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

function createStart(game: Game) {
    let mapWidth = 21;
    let mapHeight = 31;
    game._map = new Map(mapWidth, mapHeight);
    game._map.owner = game;
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
    for (let x = 0; x < mapWidth; x++) {
        for (let y = 0; y < mapHeight; y++) {
            if ((x < 4 || x > 16) && (y < 8 || y > 22)) {
                game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [128, 128, 128]); // false, true, true
            } else {
                game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [60, 60, 60]); //floor
            }
            if (x == 0 || x == mapWidth-1 || y == 0 || y == mapHeight-1) {
                game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [128, 128, 128]);
            } 
        }
    }
}

function createCave(game: Game): number {//60,11,85 - //102,33,218
    let mapWidth = 120;
    let mapHeight = 88;
    let corr = randint(0,9);
    game._map = new Map(mapWidth, mapHeight);
    game._map.owner = game;
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
        if (v === 1){ // || x == 0 || y == 0 || x == mapWidth - 1 || x == mapHeight - 1) {
            if (corr) game._map._tiles[x][y] = new Tile('floor', '.', [0, 0, 0], [84, 54, 11]); //floor
            else game._map._tiles[x][y] = new Tile('floor', '.', [0, 0, 0], [60, 11, 85]);
        }
        else {
            if (corr) game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [218, 165, 32]);
            else game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [102, 33, 218]);
        }
        if (x == 0 || y == 0 || x == mapWidth - 1 || y == mapHeight - 1) {
            if (corr) game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [218, 165, 32]);
            else game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [102, 33, 218]);
        }
    });
    return(corr);
}

function createDungeon(game: Game): number {
    let mapWidth = 120;
    let mapHeight = 88;
    let corr = randint(0,9);
    game._map = new Map(mapWidth, mapHeight);
    game._map.owner = game;
    let emptyTile = new Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
    //console.log("Entered debug screen.");
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
                if (corr) game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [128, 128, 128]); // false, true, true
                else game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [255, 30, 30]);
            }
            if (generator[x][y] == 0) {
                if (corr) game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [60, 60, 60]); //floor
                else game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [80, 15, 15]);
            }
            if (generator[x][y] == 2) {
                game._map._tiles[x][y] = new Tile('floor', 'E', [0, 0, 0], [200, 0, 0]);
            }
        }
    }
    return(corr);
}

export function createArena(game: Game) {
    let mapWidth = 70;
    let mapHeight = 38;
    game._map = new Map(mapWidth, mapHeight);
    game._map.owner = game;
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
    for (let x = 0; x < mapWidth; x++) {
        for (let y = 0; y < mapHeight; y++) {
            if (x == 0 || x == mapWidth-1 || y == 0 || y == mapHeight-1) {
                game._map._tiles[x][y] = new Tile('wall', '#', [0, 0, 0], [128, 128, 128]);
            } else game._map._tiles[x][y] = new Tile('floor', '·', [0, 0, 0], [66, 7, 7]);
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

            display.drawText(2, 16, "%c{rgb(200,200,200)}your future is here, welcome");
            display.drawText(25, 17, "%c{rgb(120,120,120)}l o o k a r o u n d");
        },
        handleInput : (inputType: any, inputData: any) => {
            // Nothing to do here      
        }
    }
}

// Define our winning screen
export function loseScreen() {
    return {
        enter : (game: Game) => {    
            console.log("Entered lose screen."); 
            var http = new XMLHttpRequest();
            var url = 'http://localhost:3333/api/score';
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    console.log(JSON.parse(http.responseText));
                }
            }
            http.send("name=" + game._player.name + "&score=" + game._player.fighter.xp);
        },
        exit : () => { console.log("Exited lose screen."); },
        render : (display: Display, game: Game) => {
            // Render our prompt to the screen
            let message = "[A] n d  s o . . . w e  f a l l  a g a i n . . . ?";
            for (let index = 0; index < game.iControl; index++) {
                display.draw(index+15, 10+( index > 18? 1 : 0 )*20, message[index], Color.toRGB([game.clr, game.clr, game.clr]), Color.toRGB([0,0,0]))
                game.clr -= 5;
            }
            if (game.iControl <= message.length) {
                game.iControl += 1;
            }
            game.clr = 255;



            // for (var i = 0; i < 22; i++) {
            //     display.drawText(2, i + 1, "%b{red}You lose! :(");
            // }
        },
        handleInput : (inputType: any, inputData: any, game: Game) => {
            if (inputType === "keydown") {
                if (inputData.keyCode === KEYS.VK_A || inputData.keyCode === KEYS.VK_R || inputData.keyCode === KEYS.VK_RETURN) {
                    game.switchScreen(game.Screen.startScreen);
                    game.clr = 255;
                    game.iControl = 0;
                }
            }     
        }
    }
}

// Define our leaderboards screen
export function scoreScreen() {
    return {
        enter : () => {    console.log("Entered score screen."); },
        exit : () => { console.log("Exited score screen."); },
        render : (display: Display, game: Game) => {
            // Render our prompt to the screen
            display.drawText(18, 2, "Name:");
            display.drawText(48, 2, "Score:");
            for (let i = 0; i < game.scores.length; i++) {
                display.drawText(20, 3+i, game.scores[i].name);
                display.drawText(50, 3+i, game.scores[i].score);
            }

            

        },
        handleInput : (inputType: any, inputData: any, game: Game) => {
            if (inputType === "keydown") {
                if (inputData.keyCode === KEYS.VK_A || inputData.keyCode === KEYS.VK_R || inputData.keyCode === KEYS.VK_RETURN) {
                    game.switchScreen(game.Screen.startScreen);
                    game.clr = 255;
                    game.iControl = 0;
                }
            }     
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

function djb2(str :string){
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
  }
  
  function hashStringToColor(str :string) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
  }
