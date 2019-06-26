import { Entity } from "../../entity";
import { Glyph } from "../../glyph";
import { Map } from "../../map";

export class Exit {
    _map: Map;
    glyph: Glyph;

    constructor(map: Map) {
        this._map = map;
    }

    climb() {
        this._map.owner.level += 1;

        this._map.owner.switchScreen(this._map.owner.Screen.playScreen);
    }
}