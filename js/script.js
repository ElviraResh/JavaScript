//Строчки
'use strict';

/* const string = 'hello';

const string1 = "they call \"Harry\", and he likes it"; // с помощью \ можно экранировать значение символа */
// конкатинация - склеивание строки


const skip = str => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = result + str[i]; // склеиваем и конкатинируем результирующую строку с символом [i]
        i = i + 2;
    }
    return result;
}
console.log(skip('California'));

// length - длина
// квадртные скобки позволяют получать индивидуальные символы из строки

// 'California'
// количество символов в строке 10
// количество индексов 9 (индексация элементов в строке начинается с 0)