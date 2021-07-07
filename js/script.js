"use strict"
//Циклы

// Цикл while - блок кода, который повторяется, пока удовлетворяется какое-то условие
/* while (sun is up) {
    work; // проверить - исполнить, проверить - исполнить
} */

// функция нахождения факториала при помощи цикла while

/* const factorial = n => {
    let counter = 1; // переменная счетчика, чтобы считать от 1 до верхнего предела
    let result = 1; // текущий результат

    while (counter <= n) {
        result = result * counter;
        counter = counter + 1;
        console.log(result);
    }
    return result;
}

console.log(factorial(3)); */

//Задача.
// Реализовать тело функции, используя итеративный процесс.
// Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.
// Доп.условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является 1 (наименьшим делителем которой является так же 1).
// myFunction(15); // 3
// myFunction(17); // 17
// Идея
// 1) пробуем разделить число на 2
// 2) если число делится без остатка, то это наименьший делитель.
// 3) если нет, то пробуем следующий делитель
// 4) если ничего не делит число без остатка, то переданное число, яв-ся простым(так что его наименьший делитель - оно само).
/*  const smallestDivisor = num => {
     const iter = (acc) => {
         if (acc > num / 2) {
             return num;
         }
         if (num % acc === 0) {
             return acc;
         }
         return iter(acc + 1);
     };
     return iter(8);
 };
 console.log(smallestDivisor(15)); */

/* const smallestDivisor = num => {
    let divisor = 2;
    if (num < 1) {
        return NaN;
    } 
    if (num === 1) {
        return num;
    }

    while (num % divisor !== 0) {
        divisor = divisor + 1;
        console.log(divisor);
    }
    return divisor;
}

console.log(smallestDivisor(1)); */

// способы объявления переменных
// let age = 28; (современный стандарт)
// var age = 28; (был до стандарта ES6)

//бесконечный цикл (не запускать)
/* while (10 > 5) {
    console.log("ten is still larger than 5");
};

while (true) {console.log("...")} */