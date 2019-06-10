import { Entity } from "../entity";
import { Equipment } from "../components/equipment";
import { Knife } from "../content/itens/knife";
import { Glyph } from "../glyph";
import { Sword } from "../content/itens/sword";
import { Spear } from "../content/itens/spear";

// function ItemFactory(name: string, x: number, y): Entity{
//     return new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
// }

export function CreateItem(item_choice: string, x: number, y: number): Entity{
    if (item_choice == 'knife') {
        let item_component = new Knife()
        let item = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph= item.glyph;
        return item;
    }
    else if (item_choice == 'sword') {
        let item_component = new Sword()
        let item = new Entity(x, y, new Glyph('ރ', [0,0,0], [200, 200, 0]), 'sword', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'spear') {
        let item_component = new Spear()
        let item = new Entity(x, y, new Glyph('ﴽ', [0,0,0], [200, 200, 0]), 'spear', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'dagger') {
        let item_component = new Knife()
        let item = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [200, 200, 0]), 'dagger', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
}

export function CreateDropItem(item: Equipment, x: number, y: number): Entity{
    let item_choice = item.name;
    if (item_choice == 'knife') {
        let item_component = new Knife()
        let item = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph= item.glyph;
        return item;
    }
    else if (item_choice == 'sword') {
        let item_component = new Sword()
        let item = new Entity(x, y, new Glyph('ރ', [0,0,0], [200, 200, 0]), 'sword', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'spear') {
        let item_component = new Spear()
        let item = new Entity(x, y, new Glyph('ﴽ', [0,0,0], [200, 200, 0]), 'spear', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'dagger') {
        let item_component = new Knife()
        let item = new Entity(x, y, new Glyph('Ϯ', [0,0,0], [200, 200, 0]), 'dagger', 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
}