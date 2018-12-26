import { randint } from "./randint";

export function from_dungeon_level(table: number[][], dungeon_level: number) {
    for (let x = table.length-1; x > -1; x--) {
        if (dungeon_level >= table[x][1]) return table[x][0]
    }
    return 0;
}

export function random_choice_index(chances: number[]) {
    let sum = chances.reduce((a, b) => a + b, 0);
    let random_chance = randint(0, sum)
    let running_sum = 0
    let choice = 0
    for (const n of chances) {
        running_sum += n;
        if (random_chance <= running_sum) return choice;
        choice += 1;
    }
    return 0;
}

export function random_choice_from_dict(choice_dict: any) {
    let chances = [];
    let choices = [];
    for (let key in choice_dict) {
        choices.push(key);
        chances.push(choice_dict[key]);
    }

    return choices[random_choice_index(chances)]

}