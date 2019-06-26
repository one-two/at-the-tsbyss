export function randperc(perc:number): number {
    let t = (Math.random() * (perc))-Math.ceil(perc/2);
    return (t/100);
}
