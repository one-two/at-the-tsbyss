import { Entity } from "../entity";
import { Fungi } from "../content/monsters/fungi";
import { Orc } from "../content/monsters/orc";
import { Troll } from "../content/monsters/troll";
import { Glyph } from "../glyph";
import { Fighter } from "../components/fighter";
import { Ranger } from "../content/monsters/ranger";
import { Wyvern } from "../content/monsters/wyvern";

export function CreateMonster(monster_choice: string, x: number, y: number): Entity{
    if (monster_choice == 'fungi') {
        let fighter_component = new Fighter(200, 0, 4, 35)
        let ai_component = new Fungi();
        let monster = new Entity(x, y, new Glyph('f', [0,0,0], [0, 200, 0]), 'Fungi', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'orc') {
        let fighter_component = new Fighter(200, 0, 4, 35)
        let ai_component = new Orc();
        let monster = new Entity(x, y, new Glyph('o', [0,0,0], [0, 128, 0]), 'Orc', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'troll') {
        let fighter_component = new Fighter(30, 2, 8, 60)
        let ai_component = new Troll()
        let monster = new Entity(x,y, new Glyph('t', [0,0,0], [128, 0, 128]), 'Troll', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'wyvern') {
        let fighter_component = new Fighter(20, 0, 5, 40)
        let ai_component = new Wyvern()
        let monster = new Entity(x,y, new Glyph('w', [0,0,0], [148, 0, 211]), 'Wyvern', 1, true, 5, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'ranger') {
        let fighter_component = new Fighter(40, 1, 7, 40)
        let ai_component = new Ranger()//Ranger()
        let monster = new Entity(x,y, new Glyph('r', [0,0,0], [233, 150, 122]), 'Ranger', 1, true, 5, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'dragon') {
        let fighter_component = new Fighter(100, 5, 16, 300)
        let ai_component = new Orc()//Dragon()
        let monster = new Entity(x,y, new Glyph('d', [0,0,0], [220, 20, 60]), 'Dragon', 1, true, 5, 2, fighter_component, ai_component);
        return monster 
    }
}