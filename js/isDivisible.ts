'use strict'
function isDivisible(a: number, divisor:number) {
    return a % divisor === 0;
}

let a = [14,18,21,49];
let divisor = 7;

function familyNumbers(tab:number[], divisor: number) {
    return tab.filter(x => isDivisible(x, divisor));
}

function intruders(tab:number[], divisor: number) {
    let intruders = [];
    for(const a of tab) {
        if(isDivisible(a, divisor)) intruders.push(a);
    }
    return intruders;
}

let b = [21,14,49];
function findComunDivisor(tab: number[]): number {
    const countDivisors = (acc: number, currentValue: number) => {
        if(!isDivisible(currentValue, divisor)) acc += 1;
        return acc;
    };
    let divisor = 2;
    do {
        if(tab.reduce(countDivisors, 0) === 0) return divisor;
        divisor += 1;
    }while(divisor <= 30);
    return -1;
}
