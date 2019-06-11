import { from_dungeon_level } from "../helper/randFromLevel";

export function itemProbabilities(dungeon_level: number) {
    return {
        //'healing_potion': 35,
        'knife': from_dungeon_level([[10, 1]], this.dungeon_level),
        'dagger': from_dungeon_level([[10, 1]], this.dungeon_level),
        'sword': from_dungeon_level([[10, 0], [10, 2]], this.dungeon_level),
        'spear': from_dungeon_level([[5, 1], [10, 3]], this.dungeon_level),
        'shield': from_dungeon_level([[15, 0]], this.dungeon_level),
    };
}