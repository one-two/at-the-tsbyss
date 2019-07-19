import { from_dungeon_level } from "../helper/randFromLevel";

export function itemProbabilities(dungeon_level: number) {
    return {
        'potion': 35,
        'knife': from_dungeon_level([[10, 1], [5, 3]], dungeon_level),
        'dagger': from_dungeon_level([[10, 1], [5, 3]], dungeon_level),
        'sword': from_dungeon_level([[2, 1], [10, 3], [5, 5]], dungeon_level),
        'spear': from_dungeon_level([[2, 1], [10, 3], [10, 5]], dungeon_level),
        'firerod': from_dungeon_level([[1, 1], [5, 3], [5, 5]], dungeon_level),
        'icerod': from_dungeon_level([[5, 3], [5, 5]], dungeon_level),
        'crossedswords': from_dungeon_level([[5, 3], [5, 5]], dungeon_level),
        'shield': from_dungeon_level([[1, 0], [5, 2]], dungeon_level),
        'offdagger': from_dungeon_level([[1, 0], [10, 4]], dungeon_level),
        'blademail': from_dungeon_level([[10, 5]], dungeon_level),
    };
}