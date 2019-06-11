import { from_dungeon_level } from "../helper/randFromLevel";

export function monsterProbabilities(dungeon_level: number) {
    return {
        'fungi': from_dungeon_level([[1, 1]], dungeon_level),
        'orc': from_dungeon_level([[1, 1], [60, 3], [40, 7]], dungeon_level),
        'troll': from_dungeon_level([[1, 1], [10, 3], [30, 5], [60, 7]], dungeon_level),
        'wyvern': from_dungeon_level([[1, 1], [50, 2], [50, 5]], dungeon_level),
        'dragon': from_dungeon_level([[1, 1], [10, 3], [20, 7]], dungeon_level),
        'ranger': from_dungeon_level([[1, 1]], dungeon_level),
    };
}