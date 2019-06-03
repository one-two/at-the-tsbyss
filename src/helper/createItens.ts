import { Entity } from "../entity";
import { Equipment } from "../components/equipment";
import { Knife } from "../content/itens/knife";
import { Glyph } from "../glyph";
import { Sword } from "../content/itens/sword";

export function CreateItem(monster_choice: string, x: number, y: number): Entity{
    if (monster_choice == 'knife') {
        let item_component = new Knife()
        let monster = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
        return monster;
    }
    else if (monster_choice == 'sword') {
        let item_component = new Sword()
        let monster = new Entity(x, y, new Glyph('ރ', [0,0,0], [200, 200, 0]), 'sword', 1, false, 5, 2, undefined, undefined, false, item_component);
        return monster;
    }
    else if (monster_choice == 'spear') {
        let item_component = new Knife()
        let monster = new Entity(x, y, new Glyph('Î', [0,0,0], [200, 200, 0]), 'spear', 1, false, 5, 2, undefined, undefined, false, item_component);
        return monster;
    }
    else if (monster_choice == 'dagger') {
        let item_component = new Knife()
        let monster = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [200, 200, 0]), 'dagger', 1, false, 5, 2, undefined, undefined, false, item_component);
        return monster;
    }
}