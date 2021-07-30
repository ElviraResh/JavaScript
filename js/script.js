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

/* const simpleNum = num => {
    let answer = 'true';
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            answer = 'false';
        }
    }
    return answer;
}

console.log(simpleNum(5)); */

// линтер - это утилита, которая проверяет код на соответствие стандартам

// цикл for...of
/* const userNames = ['petya', 'vasya', 'evgeny'];

for (const name of userNames) {
    console.log(name);
} */

// обход массива через один элемент
/* for (let i = 0; i < items.length; i++) {
    // какой-то кодж
} */

// обратный обход массива 
/* for (let i = items.length - 1; i >= 0; i -= 1) {
    // какой-то код
} */

// перебор чисел в определенном диапозоне
/* for (let i = 5; i < 10; i++) {
    // какой-то код
} */

// во время обхода изменение исходного массива
/* for(let i = 0; i < items.length; i++) {
    items[i] = // что-то делаем
}  */

// sum
/* const calculateSum = arr => {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}

console.log(calculateSum([5, 7, 6, 9, 10])); */

/* const greeting = 'Hello';

for (const symbol of greeting) {
    console.log(symbol);
} */
// результат данного перебора
// H
// e
// l
// l
// o

// Задача. Ф-ия, которая высчитывает среднее арифметическое элементов переданного массива
// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
// calculateAverage(temperatures1); // 38.5
// const temperatures2 = [];
// calculateAverage(temperatures2); // null

/* const calculateAverage = temperatures => {
    const arrLength = temperatures.length;
    if (arrLength === 0) {
        return null;
    }
    let sum = 0;
    for (const values of temperatures) {
        sum += values;
    }
    return sum/arrLength;
}

console.log(calculateAverage([37.5, 34, 39.3, 40, 38.7, 41.5])); */

// удаление элементов из массива

// это корявый способ удаления
/* const numbers = [1, 10];
delete numbers[0];
console.log(numbers); // [<1 empty item>, 10]
console.log(numbers.length); // 2 */

// [0, 1, false, null, true, 'wow', null]; // операция compact - удаление null значений из массива
//  ! изменение массива должно трансформироваться в создание нового массива, в котором отсутствуют удаляемые элементы
/* const arr = [0, 1, false, null, true, 'wow', null];
const compact = arr => {
    // инициализация результата
    const result = [];

    for (const item of arr) {
        // проверка значения
        if (item !== null) {
            result.push(item);
        }
    }
    return result;
}

console.log(compact(arr));
console.log([]); */

// пример агригации. удаление элементов по определенным условиям массива

// break и continue - не являются необходимостью
// break производит выход из цикла (не из функции!)
/* const arr = [0, 1, false, null, true, 'wow', null];
for (const item of arr) {
    if (item === true) {
        break;
    }
    console.log(item);
} */

// continue - позволяет пропустить итерацию цикла
/* const arr = [0, 1, false, null, true, 'wow', null];
const compact = arr => {
    // инициализация результата
    const result = [];

    for (const item of arr) {
        if (item === null) {
            continue;
        }
        // проверка значения
        //if (item !== null) {
        //    result.push(item);
        //}
        result.push(item);
    }
    return result;
};

console.log(compact(arr)); */

// Задача 
/* Если задано целое число x, верните, true если x это целое число палиндрома.
Целое число является палиндромом, когда оно читается так же, как вперед и назад. Например, 121 это палиндром, а число 123 нет.
Пример 1:
Вход: x = 121
 Выход: истина
Пример 2:
Ввод: x = -121
 Выход: false
 Объяснение: Слева направо, читается -121. Справа налево становится 121-. Следовательно, это не палиндром.
Пример 3:
Ввод: x = 10
 Выход: false
 Объяснение: 01 считывается справа налево. Следовательно, это не палиндром.
Пример 4:
Ввод: x = -101
 Выход: ложь */

/* const palindrome = num => {
    if (num < 0) {
        return false;
    }
    const str = num.toString(); // перевод числа в строку
    // 
    if (str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    } 
} */

// дополненное решение из инета условием проверки отрицательного числа, но сложное для понимания
// при отладке кода не показывает как строку переворачивает
/* const palindrome = num => {
    if (num < 0) {
        return false;
    };
    if ((num += "").split("").reverse().join("") === num) {
        return true;
    } else {
        return false;
    }
} */

/* console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(10));
console.log(palindrome(-101)); */ 

// решение из инета
/* const IsPalindrome = num => (num+="").split("").reverse().join("") === num;
console.log(IsPalindrome(23));     // false
console.log(IsPalindrome(-121));    // true
console.log(IsPalindrome(9889));   // true
console.log(IsPalindrome(-989));    // true
console.log(IsPalindrome(1));      // true */

// метод splice - изменяет содержимое массива путем удаления или замены существующих элементов и/или добавление новых элементов на месте

// синтаксис
//splice(start) 
//start - это индекс, с которого начинается длина массива, если start > arr.length то 
//из этого массива ни один элемент не будет удален, а метод будет вести себя как функция добавления
//при отрицательном значении start изменение массива начнется с конца
//splice(start, deleteCount) 
//deleteCount (указывают по желанию) - целое число, указывающее элементов в массиве, из которых нужно удалить start
//если deleteCount опущено, или deleteCount >= arr.length - start => то все элементы от start до arr.length будут удалены
//если deleteCount <= 0, то элементы не удаляется, но придется дописать item
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2, itemN)
// itemN - это элементы, которые добавятся в массив

/* // пример 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// вставляет в индекс 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// заменяет 1 элемент с индексом 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(5, 2, 'June', 'July'); 
// вставляет 2 элемента с индексом 5 и 6 
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May", "June", "July"]
console.log(months.length); // 7 */

// практическая задача (придуманная на аналогии с примером выше)
// Маша забыла как по порядку идут месяца и составила неправильный список
/* const orderMonths = ['September', 'December', 'March', 'April', 'May', 'June', 'August', 'July', 'October', 'November', 'February', 'January'];
// создаем ф-ию correctOrderMonths
const correctOrderMonths = arr => {
// проверяем длину массива
    arr = orderMonths;
    const correctArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (arr.length !== 12) {
        
    }
}; */


