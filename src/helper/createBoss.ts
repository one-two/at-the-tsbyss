import { Entity } from "../entity";
import { Glyph } from "../glyph";
import { Fighter } from "../components/fighter";
import { Boss } from "../../logo/boss"
import { Fungi } from "../content/monsters/fungi";
import { Angel } from "../content/bosses/angel";

export function CreateBoss(monster_choice: string, x: number, y: number, dungeon_level: number): Entity{
    let fighter_component = new Fighter(1,1,1,1);
    let skin = Boss();
    let ai_component = new Angel();//new Fungi();
    let monster = new Entity(x, y, new Glyph('!', [0,0,0], [0, 200, 0]), 'angel', 10, true, 6, 2, fighter_component, ai_component, false, undefined, undefined, undefined, undefined, undefined, undefined, skin);

    return monster;
}