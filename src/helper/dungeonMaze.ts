import { Map } from "../map";
import { randint } from "./randint";

interface room {
    x: number,
    y: number,
    sizex: number,
    sizey: number
}

interface path {
    x: number,
    y: number,
    dir: string,
    past: string
}

interface coordenada {
    x: number,
    y: number,
}

function ones(maxx: number, maxy: number): number[][] {
    let array : number[][] = [[1]];

    for (let x = 0; x < maxx; x++) {
        // Create the nested array for the y values
        array.push([]);
        // Add all the tiles
        for (let y = 0; y < maxy; y++) {
            array[x].push(1);
        }
    }

    return array;
}

function randomRoom(maxx: number, maxy: number): room {
    let room : room;
    let roomsizex = randint(4, 16);
    while (roomsizex % 2 == 0) roomsizex-=1;
    roomsizex = (roomsizex*2)-1;

    let roomsizey = randint(4, 14);
    while (roomsizey % 2 == 0) roomsizey-=1;
    roomsizey = (roomsizey*2)-1;

    let roomx = randint(5, maxx-roomsizex-1);
    while (roomx % 4 != 0 ) roomx+=1;
    roomx+=1;

    let roomy = randint(5, maxy-roomsizey-1);
    while (roomy % 4 != 0 ) roomy+=1;
    roomy+=1;

    room = {
        x : roomx,
        y : roomy,
        sizex : roomsizex,
        sizey : roomsizey
    }
    //console.log(room)
    return room;
}

function digHere(here: path, map: number[][]) {
    let x = here.x;
    let y = here.y;
    switch (here.past) {
        case 'N':
            if (map[x-1][y] != 0 && map[x-1][y-1] != 0 && map[x][y-1] != 0 && map[x+2][y-1] != 0 && map[x+2][y] != 0) {
                map[x][y] = 0;
                map[x+1][y] = 0;
                map[x][y+1] = 0;
                map[x+1][y+1] = 0;
            } else {
                //map[x][y] = 2;
            }
            break;
        case 'S':
            if (map[x-1][y] != 0 && map[x-1][y+2] != 0 && map[x][y+2] != 0 && map[x+2][y+2] != 0 && map[x+2][y] != 0) {
                map[x][y] = 0;
                map[x+1][y] = 0;
                map[x][y+1] = 0;
                map[x+1][y+1] = 0;
            } else {
                //map[x][y] = 2;
            }
            break;
        case 'E':
            if (map[x][y-1] != 0 && map[x+2][y-1] != 0 && map[x+2][y] != 0 && map[x+2][y+2] != 0 && map[x][y+2] != 0) {
                map[x][y] = 0;
                map[x+1][y] = 0;
                map[x][y+1] = 0;
                map[x+1][y+1] = 0;
            } else {
                //map[x][y] = 2;
            }
            break;
        case 'W':
            if (map[x][y-1] != 0 && map[x-1][y-1] != 0 && map[x-1][y] != 0 && map[x-1][y+2] != 0 && map[x][y+2] != 0) {
                map[x][y] = 0;
                map[x+1][y] = 0;
                map[x][y+1] = 0;
                map[x+1][y+1] = 0;
            } else {
                //map[x][y] = 2;
            }
            break;    
        default:
            console.log('default');
            map[x][y] = 2;
            break;
    }
    // if (map[x][y] != 0 && map[x][y] != 0 && map[x][y] != 0 && map[x][y] != 0) {
    //     map[x][y] = 0;
    //     map[x+1][y] = 0;
    //     map[x][y+1] = 0;
    //     map[x+1][y+1] = 0;
    // }
}

function testDirections(here: path, map: number[][], path: path[], maxx: number, maxy: number) : path[] {
    let next : path[]=[];
    let nextCandidates : path[] = [];
    let y = here.y;
    let x = here.x;
    if (y+4 < maxy)
        if (map[x][y+4] == 1) {
            if (map[x-1][y+3] == 1 && map[x+2][y+3] == 1) 
                nextCandidates.push({
                    x: x,
                    y: y+2,
                    dir: 'S',
                    past: 'S'
                });
        }
    if (x+4 < maxx)
        if (map[x+4][y] == 1) {
            if (map[x+3][y-1] == 1 && map[x+3][y+2] == 1)
                nextCandidates.push({
                    x: x+2,
                    y: y,
                    dir: 'E',
                    past: 'E'
                });
        }
    if (y-3 > 0) 
        if (map[x][y-3] == 1) {
            if (map[x-1][y-3] == 1 && map[x+2][y-3] == 1)
                nextCandidates.push({
                    x: x,
                    y: y-2,
                    dir: 'N',
                    past: 'N'
                });
        }
    if (x-3 > 0)
        if (map[x-3][y] == 1) {
            if (map[x-3][y+2] == 1 && map[x-3][y-1] == 1)
                nextCandidates.push({
                    x: x-2,
                    y: y,
                    dir: 'W',
                    past: 'W'
                });
        }
    if (nextCandidates.length != 0) {
        if (nextCandidates.length == 1) {
            next.push(nextCandidates[0]);
        } else {
            let selected = randint(0, nextCandidates.length-1);
            let priority = (selected + 1) % nextCandidates.length;
            while (priority != selected) {
                next.push(nextCandidates[priority]);
                priority = (priority + 1) % nextCandidates.length;
                //console.log(priority);
            }
            next.push(nextCandidates[selected]);
        }
    } else {
        map[x][y] = 2;
        // map[x+1][y] = 2;
        // map[x+1][y+1] = 2;
        // map[x][y+1] = 2;
    }
    return next;
}

function digFront(here: path, pathFRONT: path[], map: number[][] ) : path {
    let next : path;
    if (here.dir == 'N') {
        next = {
            x: here.x,
            y: here.y-2,
            dir: 'z',
            past: 'N'
        }
    }
    if (here.dir == 'E') {
        next = {
            x: here.x+2,
            y: here.y,
            dir: 'z',
            past: 'E'
        }
    }
    if (here.dir == 'S') {
        next = {
            x: here.x,
            y: here.y+2,
            dir: 'z',
            past: 'S'
        }
    }
    if (here.dir == 'W') {
        next = {
            x: here.x-2,
            y: here.y,
            dir: 'z',
            past: 'W'
        }
    }
   return next;
}

function digUp(pathGO: path[], map: number[][], maxx: number, maxy: number) {
    let db = 0;
    while (pathGO.length > 0) {
        let here = pathGO.pop();
        if (map[here.x][here.y] != 0) {
            digHere(here, map);
            // if (((here.x-1) % 4 == 0) && ((here.y-1) % 4 == 0)) {
            //if (here.dir == 'z') {
            if (((here.x-1) % 4 == 0) && ((here.y-1) % 4 == 0)) {
                let nxt = testDirections(here, map, pathGO, maxx, maxy);
                //console.log(nxt);
                nxt.forEach(element => {
                    pathGO.push(element);
                });
                //console.log(pathGO);
            }
            else {
                pathGO.push(digFront(here, pathGO, map));
            }
            //console.log('pathGO: ' + pathGO.length.toString());
            //console.log(pathGO);
            db += 1;
            if (db == 10000) {
                const pate = pathGO;
                console.log('10000')
                console.log(pate);
                pathGO = [];
            };
        }
    }
}

export function generateDunMaze(maxx: number, maxy: number): number[][] {
    let map = ones(maxx, maxy);
    let rooms = 400;
    let roomsInGame : room[] = [];
    let path: path[] = [];
    let deadEnds: coordenada[] = [];
    
    let reject = 0;
    for (let i = 0; i < rooms; i++) {
        let room = randomRoom(maxx, maxy);
        for (let ri = room.x-1; ri <= room.x+room.sizex; ri++) {
            for ( let rj = room.y-1; rj <= room.y+room.sizey; rj++) {
                if (ri > maxx || rj > maxy) reject = 1;
                else if (map[ri][rj] == 0) {
                    ri = maxx;
                    reject = 1;
                }
            }
        }
        if (reject != 1) {
            roomsInGame.push(room);
            for (let ri = room.x; ri <= room.x+room.sizex; ri++) {
                for ( let rj = room.y; rj <= room.y+room.sizey; rj++) {
                    map[ri][rj] = 0;
                }
            }
        }
        reject = 0;
    }

    // path.push({
    //     x: 1,
    //     y: 1,
    //     dir: 'S',
    //     past: 'S'
    // })
    // digUp(path, map, maxx, maxy);

    for (let i = 1; i < maxx; i=i+4) {
        for (let j = 1; j < maxy; j=j+4) {
            if (map[i][j] == 1 && map[i+1][j] == 1 && map[i][j+1] == 1 && map[i+1][j+1] == 1) { // coordenada atual
                path.push({
                    x: i,
                    y: j,
                    dir: 'z',
                    past: 'S'
                })
                digUp(path, map, maxx, maxy);
            }
            if (map[i][j] == 2) deadEnds.push({x: i, y: j});
        }
    }
    console.log(roomsInGame);
    console.log(deadEnds);
    //console.log(map);
    return map;
}