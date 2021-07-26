'use strict'
// Типы данных

// NaN - тип данных number
// String - строка (любой тип данных)
// Boolean - булевый тип данных (true, false)
// Undefined - неопределенность (симантически создан для того чтобы его просчитывал компьютер, а не программист)
// Null - ничего, для явного указания значения

// типизация -классификация информации

/* let a; // переменная без значения на самом деле имеет тип undefined (ничего)
console.log(a);
typeof a; // undefined */

// динамическая и статическая типизация (когда)
// код конвертируется в понятную для запуска компьютером форму - компиляция.
// промежуток времени. за который это происходит - стадия компиляции (compile time)

// проверка типов и поиск ошибок типизации на стадии компиляции (статическая). 
// перед запуском программы (С#, C++, Java)

// проверка типов и поиск ошибок типизации на стадии исполнения (динамическая).
// в период исполнения программы (js, php, ruby)

// слабая и сильная типизация (насколько серьезно)
// слабая - нестрогая типизация
// сильная - более строгая типизация

// 4 * '7' = 28 // js имеет представление о типах данных => у него слабая типизация

/* const simpleNum = num => {
    let answer = true;
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            answer = false;
        }
    }
    return answer;
}

console.log(simpleNum(5)); */

// домашка
// написать функцию, которая переворачивает строку задом наперед, используя рекурсию 

/* // Вариант 1.
function reverseString(str) {
    // Шаг 1. Используйте метод split (), чтобы вернуть новый массив.
    let splitString = str.split(""); // let splitString = "Elvira".split("");
    // ["E", "l", "v", "i", "r", "a"]
 
    // Шаг 2. Используйте метод reverse (), чтобы отменить новый созданный массив.
    let reverseArray = splitString.reverse(); // let reverseArray = ["E", "l", "v", "i", "r", "a"].reverse();
    // ["a", "r", "i", "v", "l", "E"]
 
    // Шаг 3. Используйте метод join (), чтобы объединить все элементы массива в строку.
    let joinArray = reverseArray.join(""); // let joinArray = ["a", "r", "i", "v", "l", "E"].join("");
    // "Elvira"
    
    //Шаг 4. Верните перевернутую строку
    return joinArray; // "arivlE"
}
 
console.log(reverseString("Elvira")); */

// Вариант 2.
// цикл for
/* function reverseString(str) {
    // Шаг 1. Создайте пустую строку, в которой будет размещена новая созданная строка.
    let newString = "";
 
    // Шаг 2. Создайте цикл FOR
    /* Начальной точкой цикла будет (str.length - 1), что соответствует
        последний символ строки, «о»
        Пока i больше или равно 0, цикл будет продолжаться
        Мы уменьшаем i после каждой итерации */
    /* for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Здесь длина Elvira равна 6
        Для каждой итерации: i = str.length - 1 and newString = newString + str[i]
        Первая итерация:    i = 6 - 1 = 5,         newString = "" + "a" = "a"
        Вторая итерация:    i = 5 - 1 = 4,         newString = "a" + "r" = "ar"
        Третья итерация:    i = 4 - 1 = 3,         newString = "ar" + "i" = "ari"
        Четвертая итерация: i = 3 - 1 = 2,         newString = "ari" + "v" = "ariv"
        Пятая итерация:     i = 2 - 1 = 1,         newString = "ariv" + "l" = "arivl"
        Шестая итерация:    i = 1 - 1 = 0,         newString = "arivl" + "E" = "arivlE"
    Конец цикла FOR*/
 
    // Шаг 3. Верните перевернутую строку
    /* return newString; // "arivlE"
}

console.log(reverseString("Elvira")); */


// Вариант 3
// с помощью рекурсии
/* function reverseString(str) {
    if (str === "") // Это крайний случай, который завершит рекурсию
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0); */
  /* 
  Первая часть метода рекурсии
  Вы должны помнить, что у вас будет не один звонок, у вас будет несколько вложенных звонков.
  
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Elvira")   will return   reverseString("lvira")           + "E"
  2nd call – reverseString("lvira")    will return   reverseString("vira")            + "l"
  3rd call – reverseString("vira")     will return   reverseString("ira")             + "v"
  4th call – reverseString("ira")      will return   reverseString("ra")              + "i"
  5th call – reverseString("ra")       will return   reverseString("a")               + "r"
  6th call – reverseString("a")       will return   reverseString("")                 + "a"
  
  Вторая часть метода рекурсии
  Метод попадает в условие if, и наиболее вложенный вызов немедленно возвращается.  
  6th call will return reverseString("") + "a" = "a"
  5th call will return reverseString("a") + "r" = "a" + "r"
  4th call will return reverseString("ar") + "i" = "a" + "r" + "i"
  3rd call will return reverseString("ari") + "v" = "a" + "r" + "i" + "v"
  2nd call will return reverserString("ariv") + "l" = "a" + "r" + "i" + "v" + "l"
  1st call will return reverserString("arivl") + "E" = "a" + "r" + "i" + "v" + "l" + "E" 
  */
  /* }
  console.log(reverseString("Elvira")); */

// Вариант 3, записанный с помощью тернарных операторов
// 
/*   function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("Elvira")); */



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

/* let solution = 'hello, world!';
let result = '';

for(let i = 0; i < solution.length; i++) {
    if(i === 0) {
        debugger
        result += solution[i].toUpperCase();
    }else if(solution[i-1] === ' ') {
        result += solution[i].toUpperCase()
    }else {
        result +=solution[i]
    }
}

console.log(result); */

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

// 

/* const cities = ['moscow', 'london', 'berlin', 'porto'];

const get = (arr, index, defaultValue = null) => {
    if (index >= arr.length || index < 0) {
        return defaultValue;
    }
    return arr[index];
}

console.log(get(cities,10)); */

// ссылки при работе с массивами
// let, const хранят два вида данных: примитивные (числа, строки, булеан) и ссылочные (объекты)

/* const items = [1, 2];
const items2 = items; // ссылаются на один и тот же массив

items2.push(3);

console.log(items2); // [1, 2, 3]
console.log(items); // [1, 2, 3] */

/* const f = coll => coll.push('wow');
const items = ['one'];
f(items);
console.log(items); // ['one', 'wow'] */

// переворот массива

const names = ['john', 'smith', 'karl', 'asd']; 
// reverse(); // ['karl', 'smith', 'john'];
const reverse = coll => {
    const lastIndex = coll.length - 1;
    const middleIndex = lastIndex / 2;
    for (let i = 0; i < middleIndex; i += 1) {
        const mirrorIndex = lastIndex - i;
        const temp = coll[i];
        coll[i] = coll[mirrorIndex];
        coll[mirrorIndex] = temp;
    }
};
reverse(names);
console.log(names);
