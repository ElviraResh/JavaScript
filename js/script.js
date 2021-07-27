'use strict'

// область видимости
// как интерпретатор в разных местах кода видит разные штуки (переменные, функции)
// лексическая область видимости - механизм поиска значений: смотрим в текущей области, если нет - идем на уровень выше, и так далее
// видимость задается исключительно текстом программы, исходным кодом
// Окружение - область памяти, где записываются идентификаторы и значения из областей видимости

/* const age = 29; // внешняя (глобальная) область видимости
const multiplier = (num) => {
    const x = 10; // локальная константа
    return num * x; 
}

let result = true; */

/* let a = 0;

const changer = () => {
    a++;
}

console.log(a); // вызов глобальной // 0;
changer(); // вызов функции // 0;
console.log(a); // вызов глобальной // 1; */

// лексическая область видимости
/* let a = 7;
let b = 10;
 
const multiplier = () => {
    let a = 5;
    return a * b;
}

console.log(a); // 7; - глобальная переменная, и вызов происходит глобально
console.log(multiplier()); // 50; - так как используется локальная переменная
 */

// функция замкнула в себе некоторую информацию из области видимости 
/* const createPrinter = () => {
    const name ="King";
 
    const printName = () => {
        console.log(name);
    }
 
    return printName;
}
 
const myPrinter = createPrinter();
myPrinter(); */

/* const value = 777;
const func = value => value + 1;
console.log(func(5)); // 6; так как не затронута глобальная константа */

// Задача 
// Счастливым билет называют с номером, в котором сумма первой половины цифр равна второй половине цифр

/* const isHappyTicket = num => {
    const ns = String(num);
    if (ns.length != 6) return false;
    const sum = (s) => {
        if (s.length === 1) return s;
        return Number(s.substr(0, 1)) + Number(sum(s.substr(1, s.length - 1)));
    };
 
    const left = ns.substr(0, 3);
    const right = ns.substr(3, 3);
    return sum(left) === sum(right) ? true : false;
};
 
console.log(isHappyTicket('385916'));
console.log(isHappyTicket('1222')); */

// Чистые функции

// детерминированная функция - функция, которая всегда производит тот же результат при одинаковых вводных данных
// выдается одинаковый результат из определенного начального состаяния
// При вычислении значения этой функции, она не принимает никакого другого аргумента кроме того, что мы дали
/* const surfaceAreaCalculator = (radius) => {
    return 4 * 3.14 * radius * radius;
}

console.log(surfaceAreaCalculator(3390)); */
// чистые функции - предсказуемы, прозрачны, такие функции близки к математическим (х в квадрате с одним и тем же значением х, всегда будет давать одинаковый результат, а вычисления квадрата х не будет менять сам х)

// недетерминированная функция - непредсказуема, ее результат зависит от чего-то еще
// метод Math.random(); - генератор случайных чисел (от 0 до 1)
// пример: функция, которая принимает почтовый индекс и возвращает погоду на данный момент

// Побочные эффекты
// функция ниже имеет побочные эффекты
// console.log(); - вывод на экран - просто действие, что выполняет функция (но так же возвращает значение - всегда undefined)
/* let a = 0;
const f = () => {
    a = a + 1;
    console.log(a);
    return true;
}

console.log(f()); */

// Задача 1
// Реализуйте функцию, которая делает заглавной первую букву каждого слова в предложении

// Решение из инета, доработанное мной
/* const solution = str => {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        (i === 0) ? result += str[i].toUpperCase() : // первая буква в слове (индекс 0)
        (str[i - 1] === ' ') ? result += str[i].toUpperCase() : // пробел в строке 
        result += str[i];
    }
    return result;
}

console.log(solution('hello, world!')); */

// Решение от преподавателя
/* const solution = str => {
    let pieces = str.split('');
    for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}
console.log(solution('hello, world!')); */


/* const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM' ];
console.log(emails);
for (let i = 0; i < emails.length; i += 1) {
    const email = emails[i];
    
    const normalizedEmail = email.toLowerCase();
    emails[i] = normalizedEmail;
}
console.log(emails); */

// Реализуйте getWeekends(), которая возвращает массив из двух элементов - названий выходных дней на английском. Функция принимает на вход параметр - формат возврата. Всего есть два возможных значения: 
// 'long' (по умолчанию) - массив содержит значения saturday и sunday
// 'short' - массив содержит значения sat и sun
// getWeekends('long');
// getWeekends('short');

const getWeekends = length => {
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    switch(length) {
        case 'long':
            return long;
        case 'short':
            return short;
        default:
            return length;
    }
};

console.log(getWeekends('long'));
console.log(getWeekends('short'));
console.log(getWeekends('world'));

/* const cities = ['moscow', 'london', 'berlin', 'porto'];

const get = (arr, index, defaultValue = null) => {
    if (index >= arr.length || index < 0) {
        return defaultValue;
    }
    return arr[index];
}

console.log(get(cities,10)); */