'use strict'
function isDivisible(a: number, divisor:number) {
    return a % divisor === 0;
}

let a = [14,18,21,49];
let divisor = 7;

function foreignNumber(tab:number[], divisor: number) {
    return tab.filter(x => isDivisible(x, divisor));
}

console.log(foreignNumber(a, divisor));
