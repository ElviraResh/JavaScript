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
        result = result * counter; // равносилен result *=counter; 
        counter = counter + 1; // равносилен counter++ (инкремент), counter-- (декремент)
        console.log(result);
    }
    return result;
}

console.log(factorial(3)); */

// инкремент, декремент
// postfix

/* let a = 3;
let b;
b = a++; // постфиксная нотация (фактическое сложение произойдет после того, как значение вернется)
console.log(a, b); // a = 4; b = 3;

// prefix

let a = 3;
let b;
b = ++a; // префиксная нотация (фактическое сложение произойдет перед тем, как значение вернется)
console.log(a, b); // a = 4; b = 43; */

// Пример

/* let x = 45;
let height = x++;
x = --height; */

/* let a = 4;
a -= 8 - a;

console.log(a); // 0 */

/* let b = 10;
b += b ** 2 > 20 ? 1 : 10; // ? - условие, если b ** 2 больше 20, то вернуть значение 1
console.log(b); // 11  */

/* let x = 5;
let y = 10;
console.log(x++ + ++y); */

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

// цикл for (более универсальный цикл)

/* const factorial = n => {
    let result = 1; // переменная счетчика, чтобы считать от 1 до верхнего предела
    for (let counter = 1; counter <= n; counter++) {
        result *= counter;
    }
    return result;
}
console.log(factorial(3)); */

// инициализация счетчика - let counter = 1;
// условие цикла - counter <= n;
// обновление счетчика - counter++;
// тело цикла - {result *= counter;}

// в блоке инициализации не требуется определять переменные
/* let counter = 1;
for (; counter <= n); counter++) {
    // любой код
} */

// блок с условием не обязателен
/* for (let counter = 1;; counter++) {
    if (counter <= n) break;
    // любой код
} */

// пропущены все 3 блока
/* let counter = 1;
for (;;) {
    if (counter <= n) break;
    // любой код
    counter++;
} */

/* let answer;

if (num === 1) {
    answer = "One";
} else if (num === 2) {
    answer = "Two";
} else {
    answer = "Nothing";
} */

// конструкция SWITCHCASE
/* switch(num) {
    case 1: // if (num === 1);
        answer = "One";
        break;
    case 2: // if (num === 2);
        answer = "Two";
        break;
    default: 
        answer = "Nothing";
        break;  
} */

// Задача
/* const absoluteNumber = (num) => {
    if (num > 0 || num === 0) {
        return num;
    } else {
    return -num;
    }
} */

/* switch(num) {
    case 1: num > 0;
        num;
        break;
    default: 
        -num;
        break;
}

console.log(-5); */

// функция должна считать сумму всех чисел от 1 до n
/* const sum = n => {
    let result = 0;
    for (let counter = 1; counter <= n; counter++) {
        return 10; // return прерывает цикл
        result += counter;
    }
    return result;
} 

console.log(sum(5)); // 10
console.log(sum(20)); // 10
console.log(sum(50)); // 10 */

// Домашнее задание
// Написать функцию, которая принимает число и возвращает true если число является простым и false в ином случае

/* простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя */

const simpleNum = num => {
    let answer = 'true';
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            answer = 'false';
        }
    }
    return answer;
}

console.log(simpleNum(5));

// линтер - это утилита, которая проверяет код на соответствие стандартам