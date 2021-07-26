'use strict'

// Массивы

// это любые упорядоченные наборы элементов (или коллекции)
// задача массива - представить такие коллекции в виде единой структуры.

// при работе с массивами всегда надо их называть в множественном числе

// создание пустого массива
// const items = [];

// создание массива с тремя элементами
// const animals = [ 'cats', 'dogs', 'birds']

// получение данных из массива

// каждый элемент имеет порядковый номер, называемый индексом
/* console.log(animals[0]); // cats
console.log(animals[2]); // birds */

// узнаем размер массива, братившись к свойству length
// console.log(animals.length);

// в реальных задачах индекс часто вычисляется динамически, поэтому обращение к конкретному элементу происходит с использованием переменных
/* let i = 1;
const animals = [ 'cats', 'dogs', 'birds'];
console.log(animals[i]); // dogs */

/* let i = 1;
let j = 1;
const animals = [ 'cats', 'dogs', 'birds'];
console.log(animals[i+j]); // birds */

// нахождение последнего элемента
// console.log(animals[animals.length - 1]);

// Модификации
/* const name = 'Amazon';
console.log(name.toUpperCase()); // AMAZON
console.log(name); // Amazon */

// с массивами такое правило не работает, потому что массивы могут меняться: увеличиваться, уменьшаться, изменять значения по индексам.
// константа хранит ссылку на данные, а не сами данные. Это значит что менять данные можно, но нельзя заменить ссылку
/* const animals = [ 'cats', 'dogs', 'birds'];
animals[0] = 'horses'; // меняем первый элемент массива
animals[3] = 'cats'; // добавление данных в массив
console.log(animals);

animals = [ 'cats', 'fish']; // type error, так как идет замена константы */

/* // перебор в обратном порядке
const userNames = [ 'petya', 'vasya', 'evgeny' ];
// начальное значение счетчика i = 0
// условие остановки i < userNames.length - выполняется перед каждой итерацией
// изменение счетчика i += 1 - выполняется после каждой итерации.
for (let i = 0; i < userNames.length; i += 1) {
    const index = (userNames.length - 1) - i;
    console.log(userNames[index]);
} */