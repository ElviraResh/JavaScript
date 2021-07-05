//Домашнее задание 
/* Реализуйте (с использованием рекурсивного процесса) функцию, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности.  */
//sequenceSum(1,5); // 1 + 2 + 3 + 4 + 5 = 15
//sequenceSum(4,10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49

//Подсказки 
// * Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является пустой. Возвращаем NaN.
// * Сумма чисел последовательности, в которой begin === end, равна begin (или end)

const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN;
    } if (begin === end) {
        return begin || end;
    } 
    return begin + sequenceSum(begin + 1, end);
}
console.log(sequenceSum(10, 5));
console.log(sequenceSum(1, 5));
console.log(sequenceSum(4, 10));
console.log(sequenceSum(1, 1));

//Задача 2
// 1) Создайте ошибку типа type error.

/* const number = 4;
const sumNumber = (a, number) => {
    return a % number(3);
}
console.log(sumNumber(3, 7)); */

// 2) Создайте ошибку типа reference error.

/* const sumNumber = (a, b, c) => {
    return a + b + c;
}
console.log(sumNumber(3, num, 8)); */

// 3) Создайте ошибку типа syntax error.

/* const sumNumber = (a, b, c) => {
    return a + b + c;
}
console.log(sumNumber(3, '5', 8)); */

// 4) Создайте ошибку типа logic error.

//Куб суммы - (a+b)^3 = a^3 + b^3 + 3*a*b*(a+b)

/* const cubSum = (a,b) => {
    return a ** 3 + b ** 3 + 3 * a * b * a + b;
}

console.log(cubSum(2,3)); */