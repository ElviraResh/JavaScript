//Строчки
'use strict';

/* const string = 'hello';

const string1 = "they call \"Harry\", and he likes it"; // с помощью \ можно экранировать значение символа */
/* конкатинация - склеивание строки (таким способом лучше не пользоваться, так как может подтянуть за собой очень много ошибок, т.е. результат может получиться не тот, который ожидаете) */


/* const skip = str => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = result + str[i]; // склеиваем и конкатинируем результирующую строку с символом [i]
        i = i + 2;
    }
    return result;
}
console.log(skip('California')); */

// length - длина
// квадртные скобки позволяют получать индивидуальные символы из строки

// 'California'
// количество символов в строке 10
// количество индексов 9 (индексация элементов в строке начинается с 0)

//Неизменяемость (immutable)
// в js строки неизменяемы. какие бы функции не применяли, они не производят изменения первоначальной строки

/* const str = '    hello    ';
console.log(str.toUpperCase()); // HELLO
console.log(str); // hello
console.log(str[0].toUpperCase()); // H
console.log(str.trim()); // метод. который убирает лишние пробелы */

// лексикографический порядок

/* 'ab' > 'bc' // false
'8' > '7' // true */

// интерполяция 
// кроме '' и "" в js есть `` (backticks);

const name = 'Elvira';
const a = 10;
const b = 20;
console.log(`Her name is ${name} and her age is ${a + b}`); // такие синтаксические конструкции работают только с обратными кавычками ``;