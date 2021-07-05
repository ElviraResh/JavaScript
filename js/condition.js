// Задача. Написать функцию, которая принимает на вход число и возвращает его абсолютное значение.

/* const absoluteNumber = (num) => {
    if (num > 0) {
        return num; 
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}

console.log(-10) */
/* let num = -4;
const absoluteNumber = (num > 0 || num === 0) ? num : -num; // тернарная операция является выражением

console.log(absoluteNumber) */

/* const absoluteNumber = (num) => (num > 0 || num === 0) ? num : -num;
console.log(absoluteNumber(-4)) // еще один вариант написания тернарной операции */

/* let num = 0;
const type = (num > 0) ? 'positive' :  (num < 0) ? 'negative' : 'zero';

console.log(type); */

/* const isEven = num => num % 2 === 0; 
const increaseNum = num => num + 10;
const num = 6;
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num; // (16+1)/2 без остатка 
console.log(result); */

/* const getColour = (colour) => {
    if (colour === 'white') {
        return 'white';
    } else {
        return 'black';
    }
}; */

/* const getColour = (colour) => colour === 'white' ? 'white' : 'black';

console.log(getColour('white')); */

/* Реализуйте функцию `finalGrade()`, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.
Функция принимает два аргумента:
- `exam` — оценка за экзамен, число от 0 до 100;
- `projects` — количество проектов, число от 0 и выше.
Функция возвращает: число (итоговую оценку).
Есть четыре возможных итоговых оценки:
- 100, если оценка за экзамен выше 90 или есть больше 10 проектов
- 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
- 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
- 0 в любом другом случае
пример вызова // что должна вернуть функция при таком вызове
finalGrade(100, 12); // 100
finalGrade(85, 5); // 90
finalGrade(55, 3); // 75
finalGrade(55, 0); // 0 */

const finalGrade = (exam, projects) => {
    debugger;
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else return 0;        
}
    
console.log(finalGrade(55, 0));