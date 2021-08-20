'use strict'

/* const isPerfect = num => {
    let sum = 0; // сумма
    let remainder; // остаток
    for (let i = 1; i < num - 1; i++) {
        remainder = num % i;
        if (remainder === 0) {
            sum += i; 
        }
    } 
    if (num === sum) {
        return true;
    } else {
        return false;
    }
}
console.log(isPerfect(6));
console.log(isPerfect(10));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(532));
console.log(isPerfect(33550336)); */

/* const isPerfect = num => {
    const perfectIndicators = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243, 110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221, 3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657, 37156667, 42643801, 43112609, 57885161, 74207281, 77232917, 82589933];
    for (let i = 0; i < perfectIndicators.length; i++) {
        if (num === ((2**(perfectIndicators[i] - 1))*((2**perfectIndicators[i])- 1))) {
            return true;
        } 
    }
    return false;
}

console.log(isPerfect(6));
console.log(isPerfect(10));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(532));
console.log(isPerfect(33550336));
console.log(isPerfect(2305843008139952128)); */