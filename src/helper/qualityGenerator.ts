import { randperc } from "./randperc";

export function qualityGenerator(type: string){
    let item = {
        power_bonus: 0,
        skill_bonus: 0,
        defense_bonus: 0,
        max_cooldown: 0,
        prefix: '',
        alpha: 0,
    }

    item.power_bonus = randperc(30);
    item.skill_bonus = randperc(30);
    item.defense_bonus = randperc(30);
    item.max_cooldown = randperc(40);
    let quality = item.power_bonus*100 + item.skill_bonus*100 + item.defense_bonus*100 + item.max_cooldown*100;
    if (quality <= -60) item.prefix = 'crappy ';
    else if (quality < -30) item.prefix = 'inferior ';
    else if (quality < -15) item.prefix = 'weak ';
    else if (quality < 15) item.prefix = '';
    else if (quality < 30) item.prefix = 'strong ';
    else if (quality < 45) item.prefix = 'superior ';
    else if (quality < 60) item.prefix = 'legendary ';
    else if (quality >= 60) item.prefix = 'infinite ';
    item.alpha = 180 + 180*Math.ceil(quality/100);

    if (type == "main") {
        if (item.power_bonus*100 > 13) item.prefix += 'fierce ';
        else if (item.skill_bonus*100 > 13) item.prefix += 'skillful ';
        else if (item.defense_bonus*100 > 13) item.prefix += 'parry ';
        else if (item.max_cooldown*100 > 17) item.prefix += 'quick ';
    }

    if (type == "sub") {
        if (item.power_bonus*100 > 13) item.prefix += 'empowered ';
        else if (item.skill_bonus*100 > 13) item.prefix += 'enchanted ';
        else if (item.defense_bonus*100 > 13) item.prefix += 'vanguard ';
        else if (item.max_cooldown*100 > 17) item.prefix += 'lightweight ';
    }

    return item;
}