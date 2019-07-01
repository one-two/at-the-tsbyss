export function randperc(perc:number): number {
    /// Return -(0.perc/2) ~ +(0.perc/2)
    let t = (Math.random() * (perc))-Math.ceil(perc/2);
    return (t/100);
}
