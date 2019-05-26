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
            //map[x][y] = 2;
            break;
    }
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
            if (((here.x-1) % 4 == 0) && ((here.y-1) % 4 == 0)) {
                let nxt = testDirections(here, map, pathGO, maxx, maxy);
                nxt.forEach(element => {
                    pathGO.push(element);
                });
            }
            else {
                pathGO.push(digFront(here, pathGO, map));
            }
            db += 1;
            if (db == 10000) {
                const pate = pathGO;
                pathGO = [];
            };
        }
    }
}

function digBack(here: coordenada, map: number[][], maxx: number, maxy: number) {
    let digHere: coordenada[] = [];

    digHere.push(here);
    while (digHere.length == 1) {
        here = digHere.pop();
        let next: coordenada = {
            x : here.x,
            y : here.y
        };
        let walls = 0;
        if (here.x + 2 < maxx ) {
            if (map[here.x + 2][here.y] >= 1)
                walls += 1;
            else {
                next.x = here.x + 2;
                digHere.push(next);
            }
        } else walls += 1;

        if (here.x - 2 > 0) {
            if (map[here.x - 2][here.y] >= 1)
                walls += 1;
            else {
                next.x = here.x - 2;
                digHere.push(next);
            }
        } else walls += 1;

        if (here.y + 2 < maxy) {
            if (map[here.x][here.y + 2] >= 1)
                walls += 1;
            else {
                next.y = here.y + 2;
                digHere.push(next);
            }
        } else walls += 1;

        if (here.y - 2 > 0) {
            if (map[here.x][here.y - 2] >= 1)
                walls += 1;
            else {
                next.y = here.y - 2;
                digHere.push(next);
            }
        } else walls += 1;

        if (walls > 2) {
            map[here.x][here.y] = 1;
            map[here.x+1][here.y] = 1;
            map[here.x][here.y+1] = 1;
            map[here.x+1][here.y+1] = 1;

        }


    }
}

function openWalls(roomsInGame: room[], map: number[][], maxx: number, maxy: number) {
    let directions: string[] = [];
    let rooms = roomsInGame.length;
    for (let i = 0; i < rooms; i++) {
        if ( Math.random()*100 > 70) directions.push('n');
        if ( Math.random()*100 > 70) directions.push('e');
        if ( Math.random()*100 > 70) directions.push('s');
        if ( Math.random()*100 > 70) directions.push('w');
        if (directions.length == 0) directions.push('z');

        while (directions.length > 0) {
            let dir = directions.pop();
            let candidates: number[] = [];
            switch (dir) {
                case 'n':
                    if (roomsInGame[i].y - 3 > 0) {
                        for (let roomTop = 0; roomTop < roomsInGame[i].sizex; roomTop+=2) {
                            if (map[roomsInGame[i].x + roomTop][roomsInGame[i].y-3] < 1) {
                                candidates.push(roomTop);
                                //map[roomsInGame[i].x + roomTop][roomsInGame[i].y-3] = 1
                            } else {
                                if (candidates.length > 0) {
                                    let x = randint(0, candidates.length-1);
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y-1] = 0
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y-1] = 0
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y-2] = 0
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y-2] = 0
                                    candidates = [];
                                }
                            }
                        }
                        if (candidates.length > 0) {
                            let x = randint(0, candidates.length-1);
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y-1] = 0
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y-1] = 0
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y-2] = 0
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y-2] = 0
                            candidates = [];
                        }

                    }
                    break;
                case 'e':
                    if (roomsInGame[i].x + roomsInGame[i].sizex + 3 < maxx) {
                        for (let roomRight = 0; roomRight < roomsInGame[i].sizey; roomRight+=2) {
                            if (map[roomsInGame[i].x + roomsInGame[i].sizex + 3][roomsInGame[i].y + roomRight] < 1) {
                                candidates.push(roomRight);
                                //map[roomsInGame[i].x + roomsInGame[i].sizex + 3][roomsInGame[i].y + roomRight] = 2
                            } else {
                                if (candidates.length > 0) {
                                    let x = randint(0, candidates.length-1);
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x]] = 0
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x]] = 0
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x] + 1] = 0
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x] + 1] = 0
                                    candidates = [];
                                }
                            }
                            
                        }
                        if (candidates.length > 0) {
                            let x = randint(0, candidates.length-1);
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x]] = 0
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x]] = 0
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x] + 1] = 0
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x] + 1] = 0
                            candidates = [];
                        }

                    }
                    break;
                case 's':
                    if (roomsInGame[i].y + 3 < maxy) {
                        for (let roomBot = 0; roomBot < roomsInGame[i].sizex; roomBot+=2) {
                            if (map[roomsInGame[i].x + roomBot][roomsInGame[i].y+3 + roomsInGame[i].sizey] < 1) {
                                candidates.push(roomBot);
                                //map[roomsInGame[i].x + roomBot][roomsInGame[i].y+3 + roomsInGame[i].sizey] = 2
                            } else {
                                if (candidates.length > 0) {
                                    let x = randint(0, candidates.length-1);
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y+1 + roomsInGame[i].sizey] = 0
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y+1 + roomsInGame[i].sizey] = 0
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y+2 + roomsInGame[i].sizey] = 0
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y+2 + roomsInGame[i].sizey] = 0
                                    candidates = [];
                                }
                            }
                            
                        }
                        if (candidates.length > 0) {
                            let x = randint(0, candidates.length-1);
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y+1 + roomsInGame[i].sizey] = 0
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y+1 + roomsInGame[i].sizey] = 0
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y+2 + roomsInGame[i].sizey] = 0
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y+2 + roomsInGame[i].sizey] = 0
                            candidates = [];
                        }

                    }
                    break;
                case 'w':
                    if (roomsInGame[i].x - 3 > 0) {
                        for (let roomLeft = 0; roomLeft < roomsInGame[i].sizey; roomLeft+=2) {
                            if (map[roomsInGame[i].x - 3][roomsInGame[i].y + roomLeft] < 1) {
                                candidates.push(roomLeft);
                                //map[roomsInGame[i].x - 3][roomsInGame[i].y + roomLeft] = 2
                            } else {
                                if (candidates.length > 0) {
                                    let x = randint(0, candidates.length-1);
                                    map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x]] = 0
                                    map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x]] = 0
                                    map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x] + 1] = 0
                                    map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x] + 1] = 0
                                    candidates = [];
                                }
                            }
                            
                        }
                        if (candidates.length > 0) {
                            let x = randint(0, candidates.length-1);
                            map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x]] = 0
                            map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x]] = 0
                            map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x] + 1] = 0
                            map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x] + 1] = 0
                            candidates = [];
                        }

                    }
                    break;
            
                default:
                    i--;
                    break;
            }
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

    openWalls(roomsInGame, map, maxx, maxy);
    removeDeadEnds(deadEnds, map, maxx, maxy);
    return map;
}

function removeDeadEnds(deadEnds: coordenada[], map: number[][], maxx: number, maxy: number) {
    deadEnds.push({x: 1, y: 1});
    let deadlen = deadEnds.length;
    let count = 0;
    for (let i = 0; i < deadlen; i = i + 1) {
        let walls = 0;
        if (deadEnds[i].x + 2 < maxx ) {
            if (map[deadEnds[i].x + 2][deadEnds[i].y] == 1)
                walls += 1;
        } else walls += 1;

        if (deadEnds[i].x - 2 > 0) {
            if (map[deadEnds[i].x - 2][deadEnds[i].y] == 1)
                walls += 1;
        } else walls += 1;

        if (deadEnds[i].y + 2 < maxy) {
            if (map[deadEnds[i].x][deadEnds[i].y + 2] == 1)
                walls += 1;
        } else walls += 1;

        if (deadEnds[i].y - 2 > 0) {
            if (map[deadEnds[i].x][deadEnds[i].y - 2] == 1)
                walls += 1;
        } else walls += 1;

        if (walls > 2) {
            count += 1;
            digBack(deadEnds[i], map, maxx, maxy);
            map[deadEnds[i].x][deadEnds[i].y] = 1;
        } else {
            map[deadEnds[i].x][deadEnds[i].y] = 0;
        }

    }
}
