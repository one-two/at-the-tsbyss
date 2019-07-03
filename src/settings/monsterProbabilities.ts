import { from_dungeon_level } from "../helper/randFromLevel";

export function monsterProbabilities(dungeon_level: number) {
    return {
        'fungi': from_dungeon_level([[15, 1]], dungeon_level),
        'orc': from_dungeon_level([[40, 1], [20, 3], [10, 7]], dungeon_level),
        'troll': from_dungeon_level([[10, 1], [20, 3], [30, 5], [60, 7]], dungeon_level),
        'wyvern': from_dungeon_level([[5, 1], [20, 2], [30, 3], [50, 5]], dungeon_level),
        'ranger': from_dungeon_level([[5, 1], [15, 2]], dungeon_level),
        'crawler': from_dungeon_level([[10, 2], [20, 5]], dungeon_level),
        'dragon': from_dungeon_level([[5, 3], [20, 7]], dungeon_level),
    };
}