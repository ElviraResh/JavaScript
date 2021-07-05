//Рекурсия

/* const surfaceAreaCalculator = (radius) => {
    const pi = 3.14;
    return 4 * 3.14 * square(radius);
}

const square = num => {
    return num * num;
}

const surfaceOfMars = surfaceAreaCalculator(3390);
const surfaceOfMercury = surfaceAreaCalculator(2440); 

console.log(surfaceOfMars);
console.log(surfaceOfMercury); */

// На столе 3 книги. Сколько способов их перестановки у меня есть?

// 3 книги - 6 способов
// 4 книги - 24 способа

// n! - вариантов перестановки книг. Факториал означает - умножить все числа от 1 до n
// 3! - 0 * 1 * 2 * 3
// 4! - 0 * 1 * 2 * 3 * 4

// Функция нахождения факториала при помощи рекурсии
/* const factorial = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(3)); */

// требования для рекурсии:
// 1) Базовый случай (когда остановиться). В нашем примере это 0
// 2) Правило углубления (правило передвижения). В нашем случае это n * factorial(n - 1) 

// как пошагово считает компьютер:
/* factorial(3);
3 * factorial(2);
3 * 2 * factorial(1);
3 * 2 * 1 * factorial(0);
3 * 2 * 1 * 1; 
3 * 2 * 1;
3 * 2;
6;
*/

// первый вызов
/* const factorial = 3 => {
    if (3 === 0) {
        return 1;
    } else {
        return 3 * factorial(3 - 1);
    }
}
*/

// второй вызов
/* const factorial = 2 => {
    if (2 === 0) {
        return 1;
    } else {
        return 2 * factorial(2 - 1);
    }
}
*/

// третий вызов
/* const factorial = 1 => {
    if (1 === 0) {
        return 1;
    } else {
        return 1 * factorial(1 - 1);
    }
}
*/

// четвертый вызов
/* const factorial = 0 => {
    if (0 === 0) {
        return 1;
    }
}
*/

// Задача
// Реализовать функцию, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями:
// 1) begin - начало последовательности;
// 2) end - конец последовательности

// Пример: begin = 2 и end = 6; // 2, 3, 4, 5, 6. Сумма такой последовательности равна 20
// * Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является пустой. Возвращаем NaN.
// * Сумма чисел последовательности, в которой begin === end, равна begin

const sumOfConsecutiveNumbers = (begin, end) => {
    if (begin > end) {
        return NaN;
    } if (begin === end) {
        return begin;
    } 
    return begin + sumOfConsecutiveNumbers(begin + 1, end);
}

console.log(sumOfConsecutiveNumbers(2, 6));

