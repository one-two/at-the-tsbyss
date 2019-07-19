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
import { Crawler } from "../content/monsters/crawler";
import { DummyTarget } from "../content/monsters/dummyTarget";

export function CreateMonster(monster_choice: string, x: number, y: number, dungeon_level: number): Entity{
    let dl = dungeon_level/10;
    let qHp = randperc(100)+0.2+dl;
    let qAtk = randperc(50)+dl;
    let qDef = randperc(30)+(dl/2);
    if (dungeon_level < 10 ) qDef = randperc(30)+dl;
    else qHp += dl/8;
    let qExp = (qHp > 0 ? qHp : qHp*0.5)+(qAtk > 0 ? qAtk*2 : qAtk*0.5)+(qDef > 0 ? qDef*3 : qDef*0.5);
    qExp = qExp/3;

    if (monster_choice == 'fungi') {
        let fighter_component = new Fighter(30+30*qHp, 2+2*qDef, 4+4*qAtk, 25+25*qExp)
        let ai_component = new Fungi();
        let monster = new Entity(x, y, new Glyph('f', [0,0,0], [0, 200, 0]), 'Fungi', 1, true, 8, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'orc') {
        let fighter_component = new Fighter(40+40*qHp, 2+2*qDef, 4+4*qAtk, 35+35*qExp)
        let ai_component = new Orc();
        let monster = new Entity(x, y, new Glyph('o', [0,0,0], [0, 128, 0]), 'Orc', 1, true, 7, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'dummy') {
        let fighter_component = new Fighter(40+40*qHp, 0, 0+0*qAtk, 0)
        let ai_component = new DummyTarget();
        let monster = new Entity(x, y, new Glyph('☺', [0,0,0], [128, 128, 0]), 'Dummy', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'troll') {
        let fighter_component = new Fighter(90+90*qHp, 3+3*qDef, 8+8*qAtk, 60+60*qExp)
        let ai_component = new Troll()
        let monster = new Entity(x,y, new Glyph('t', [0,0,0], [128, 0, 128]), 'Troll', 1, true, 7, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'wyvern') {
        let fighter_component = new Fighter(30+30*qHp, 2+2*qDef, 5+5*qAtk, 20+20*qExp)
        let ai_component = new Wyvern()
        let monster = new Entity(x,y, new Glyph('w', [0,0,0], [148, 0, 211]), 'Wyvern', 1, true, 6, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'ranger') {
        let fighter_component = new Fighter(40+40*qHp, 3+3*qDef, 8+8*qAtk, 40+40*qExp)
        let ai_component = new Ranger()//Ranger()
        let monster = new Entity(x,y, new Glyph('r', [0,0,0], [233, 150, 122]), 'Ranger', 1, true, 5, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'crawler') {
        let fighter_component = new Fighter(60+60*qHp, 5+5*qDef, 8+8*qAtk, 50+50*qExp)
        let ai_component = new Crawler()//Ranger()
        let monster = new Entity(x,y, new Glyph('c', [0,0,0], [172, 30 , 155]), 'Crawler', 1, true, 3, 2, fighter_component, ai_component);
        return monster
    }
    else if (monster_choice == 'dragon') {
        let fighter_component = new Fighter(100+100*qHp, 6+6*qDef, 12+12*qAtk, 300+300*qExp)
        let ai_component = new Dragon()
        let monster = new Entity(x,y, new Glyph('Đ', [0,0,0], [220, 20, 60]), 'Dragon', 1, true, 5, 2, fighter_component, ai_component);
        return monster 
    }
}