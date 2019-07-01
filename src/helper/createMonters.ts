import { Entity } from "../entity";
import { Fungi } from "../content/monsters/fungi";
import { Orc } from "../content/monsters/orc";
import { Troll } from "../content/monsters/troll";
import { Glyph } from "../glyph";
import { Fighter } from "../components/fighter";
import { Ranger } from "../content/monsters/ranger";
import { Wyvern } from "../content/monsters/wyvern";
import { Dragon } from "../content/monsters/dragon";
import { randperc } from "./randperc";

export function CreateMonster(monster_choice: string, x: number, y: number): Entity{
    let qHp = randperc(100)+0.2;
    let qAtk = randperc(50);
    let qDef = randperc(30);
    let qExp = qHp+(qAtk*3)+(qDef*5);
    qExp = qExp/3;

    if (monster_choice == 'fungi') {
        let fighter_component = new Fighter(30+30*qHp, 2+2*qDef, 4+4*qAtk, 25+25*qExp)
        let ai_component = new Fungi();
        let monster = new Entity(x, y, new Glyph('f', [0,0,0], [0, 200, 0]), 'Fungi', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'orc') {
        let fighter_component = new Fighter(40+40*qHp, 2+2*qDef, 4+4*qAtk, 35+35*qExp)
        let ai_component = new Orc();
        let monster = new Entity(x, y, new Glyph('o', [0,0,0], [0, 128, 0]), 'Orc', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'troll') {
        let fighter_component = new Fighter(90+90*qHp, 3+3*qDef, 8+8*qAtk, 60+60*qExp)
        let ai_component = new Troll()
        let monster = new Entity(x,y, new Glyph('t', [0,0,0], [128, 0, 128]), 'Troll', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'wyvern') {
        let fighter_component = new Fighter(30+30*qHp, 2+2*qDef, 5+5*qAtk, 20+20*qExp)
        let ai_component = new Wyvern()
        let monster = new Entity(x,y, new Glyph('w', [0,0,0], [148, 0, 211]), 'Wyvern', 1, true, 5, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'ranger') {
        let fighter_component = new Fighter(40+40*qHp, 3+3*qDef, 8+8*qAtk, 40+40*qExp)
        let ai_component = new Ranger()//Ranger()
        let monster = new Entity(x,y, new Glyph('r', [0,0,0], [233, 150, 122]), 'Ranger', 1, true, 5, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'dragon') {
        let fighter_component = new Fighter(100+100*qHp, 6+6*qDef, 14+14*qAtk, 300+300*qExp)
        let ai_component = new Dragon()
        let monster = new Entity(x,y, new Glyph('Đ', [0,0,0], [220, 20, 60]), 'Dragon', 1, true, 5, 2, fighter_component, ai_component);
        return monster 
    }
}