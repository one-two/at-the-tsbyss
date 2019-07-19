import { Entity } from "../entity";
import { Glyph } from "../glyph";
import { Fighter } from "../components/fighter";
import { Boss } from "../../logo/boss"
import { Angel } from "../content/bosses/angel";
import { randperc } from "./randperc";

export function CreateBoss(monster_choice: string, x: number, y: number, dungeon_level: number): Entity{
    let dl = dungeon_level;
    let fighter_component = new Fighter(dl > 8 ? 1000*(dl/3.5) : 1000,2*(dl/3.5),10*(dl/3.5),1000*(dl/3.5));
    let skin = Boss();
    let ai_component = new Angel();//new Fungi();
    let monster = new Entity(x, y, new Glyph('!', [0,0,0], [0, 153, 255]), 'angel', 10, true, 3, 2, fighter_component, ai_component, false, undefined, undefined, undefined, undefined, undefined, undefined, skin);

    return monster;
}