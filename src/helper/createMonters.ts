import { Entity } from "../entity";
import { Fungi } from "../content/monsters/fungi";
import { Orc } from "../content/monsters/orc";
import { Troll } from "../content/monsters/troll";
import { Glyph } from "../glyph";
import { Fighter } from "../components/fighter";

export function CreateMonster(monster_choice: string, x: number, y: number): Entity{
    if (monster_choice == 'fungi') {
        let fighter_component = new Fighter(200, 0, 4, 35)
        let ai_component = new Fungi();
        let monster = new Entity(x, y, new Glyph('f', [0,0,0], [0, 200, 0]), 'fungi', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'orc') {
        let fighter_component = new Fighter(200, 0, 4, 35)
        let ai_component = new Orc();
        let monster = new Entity(x, y, new Glyph('o', [0,0,0], [0, 128, 0]), 'orc', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'troll') {
        let fighter_component = new Fighter(30, 2, 8, 60)
        let ai_component = new Troll()
        let monster = new Entity(x,y, new Glyph('o', [0,0,0], [128, 0, 128]), 'troll', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'wyvern') {
        // fighter_component = Fighter(hp=20, defense=0, power=5, xp=40)
        // ai_component = Wyvern()
        // monster = Entity(x,y, 'w', libtcod.dark_violet, 0, 'wyvern', 200, blocks = True, render_order=RenderOrder.ACTOR, fighter=fighter_component, ai=ai_component)
        // return monster
    }
    else if (monster_choice == 'ranger') {
        // fighter_component = Fighter(hp=40, defense=1, power=7, xp=40)
        // ai_component = Ranger()
        // monster = Entity(x,y, 'r', libtcod.dark_sepia, 0, 'ranger', 200, blocks = True, render_order=RenderOrder.ACTOR, fighter=fighter_component, ai=ai_component)
        // return monster
    }
    else if (monster_choice == 'dragon') {
        // fighter_component = Fighter(hp=100, defense=5, power=16, xp=300)
        // ai_component = Dragon()
        // monster = Entity(x,y, 'D', libtcod.crimson, 0, 'dragao', 200, blocks = True, render_order=RenderOrder.ACTOR, fighter=fighter_component, ai=ai_component)
        // return monster 
    }
}