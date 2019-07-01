import { Entity } from "../entity";
import { Equipment } from "../components/equipment";
import { Knife } from "../content/itens/knife";
import { Glyph } from "../glyph";
import { Sword } from "../content/itens/sword";
import { Spear } from "../content/itens/spear";
import { Shield } from "../content/itens/shield";
import { Potion } from "../content/itens/potion";
import { Firerod } from "../content/itens/firerod";
import { Dagger } from "../content/itens/dagger";
import { Icerod } from "../content/itens/icerod";
import { CrossedSwords } from "../content/itens/crossedsword";
import { Offdagger } from "../content/itens/offdagger";
import { Blademail } from "../content/itens/blademail";

// function ItemFactory(name: string, x: number, y): Entity{
//     return new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
// }

export function CreateItem(item_choice: string, x: number, y: number): Entity{
    if (item_choice == 'potion') {
        let item_component = new Potion()
        let item = new Entity(x, y, new Glyph('ზ', [0,0,0], [50, 200, 50]), item_component.name, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph= item.glyph;
        return item;
    }
    if (item_choice == 'knife') {
        let item_component = new Knife()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph= item.glyph;
        return item;
    }
    else if (item_choice == 'sword') {
        let item_component = new Sword()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'spear') {
        let item_component = new Spear()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'dagger') {
        let item_component = new Dagger()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'firerod') {
        let item_component = new Firerod()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'icerod') {
        let item_component = new Icerod()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'crossedswords') {
        let item_component = new CrossedSwords()
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'shield') {
        let item_component = new Shield();
        console.log(item_component);
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'offdagger') {
        let item_component = new Offdagger();
        console.log(item_component);
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'blademail') {
        let item_component = new Blademail();
        console.log(item_component);
        let item = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
}

export function CreateDropItem(item: Equipment, x: number, y: number): Entity{
    console.log(item);
    let item_choice = item.name
    if (item_choice == 'knife') {
        let item_component = new Knife(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph= item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'sword') {
        let item_component = new Sword(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'spear') {
        let item_component = new Spear(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'dagger') {
        let item_component = new Dagger(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'firerod') {
        let item_component = new Firerod(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'icerod') {
        let item_component = new Icerod(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'crossedswords') {
        let item_component = new CrossedSwords(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'shield') {
        let item_component = new Shield(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'offdagger') {
        let item_component = new Offdagger(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'blademail') {
        let item_component = new Blademail(item);
        let itemDrop = new Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
}

