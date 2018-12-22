export function randint(floor : number, ceil:number): number {
    let t = (Math.random() * (ceil-floor+1)) + floor-0.5;
    return Math.round(t);
}
