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

/* const names = ['john', 'smith', 'karl', 'asd']; 
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
console.log(names); */

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

// Задача. Ф-цию, которая принимает на вход массив и строковый префикс, и возвращает новый массив,
// в котором каждому элементу исходного массива добавляется переданный префикс. Ф-ция предназначена для работы со строковыми эл-ми.
// newNames(); // ['Mr john', 'Mr smith', 'Mr karl']

/* const names = ['john', 'smith', 'karl'];

const newNames = (arrays, prefix) => {
    let result = [];
    for (let i = 0; i <= arrays.length - 1; i++ ) {
        // prefixArays = `${prefix} ${arrays[i]}`;
        // result.push(prefixArays);
        result[i] = `${prefix} ${arrays[i]}`;
    }
    return result;
};

console.log(newNames(names, 'Mr')); */

// Агрегация - вычисления, которые строятся на основе всего набора данных (поиск минимального, среднего, суммы, макс)
// Поиск максимального значения в массиве.
// console.log(calculateMax([3, 2, -10, 38, 0])); // 38
// console.log(calculateMax([])); null

/* const calculateMax = arr => {
    // если [], то не можем искать максимальное значение
    if (arr.length === 0) {
        return null;
    }
    // сравнение элементов нужно начать с какого-то первого эл-та
    let max = arr[0];
    // начинаем обход со второго элемента
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement > max) {
            max = currentElement;
        }
    }
    return max;
};
console.log(calculateMax([3, 2, -10, 38, 0, 50, 70, 200])); */

// поиск суммы в массиве
/* const calculateSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(calculateSum([3, 2, -10, 38, 0])); */

// процесс поиска вычислений 
// let sum = 0;
// sum = sum + 3; // 3
// sum = sum + 2; // 5
// sum = sum + -10; // -5
// sum = sum + 38; // 33
// sum = sum + 0; // 33


// сумма всех элементов, которые делится на 3
/* const calculateSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value % 3 === 0) {
            sum += value;
        }
    }
    return sum;
}

console.log(calculateSum([3, 2, -10, 38, 0])); */

// сортировка - базовая алгоритмическая задача
// в JS есть метод sort

/* const numbers = [8, 3, 10, 15, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.reverse();
console.log(numbers); */

// сортировка пузырьком
// алгоритм состоит из повторяющихся проходов по сортируемому массиву, за каждый проход элементы сравниваются попарно и, если порядок в паре неверный, выполняется обмен элементов
// при каждом обходе алгоритма по внутр. циклу, очередной наибольший элемент массива ставится на свое место в конце массива рядом с предудыщим (наибольшим элементом), а наименьший элемент сдвигается к началу массива
/* const bubbleSort = (arr) => {
    let stepsCount = arr.length - 1;
    
    let swapped; // значение которой показывает, был ли совершен во время перебора массива
    // работает аналогично while, разница только в проверке, здесь она делается не до выполнения тела, а после
    do {
        swapped = false;
        for(let i = 0; i < stepsCount; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]; // временная константа, для хранения текущего элемента
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCount -= 1;
    } while (swapped); // продолжаем пока swapped === true
    return arr;
}

console.log(bubbleSort([3, 2, 10, -2, 0, -10, 24, 7, -200])); */

// структуры данных (стек)
// структура данных - конкретный способ хранения и организации данных
// структуры данных: списки, хеш-таблицы, деревья, графы, стек, очередь и т.д. 
// стек - упорядоченная коллекция элементов, в которой добавление новых и удаление старых элементов всегда происходит с одного конца коллекции. Обычно его называют вершиной стека

// работа со стеком включает в себя операции: 
// добавить стек (push)
// взять из стека (pop) 
// вернуть элемент с вершины стека без удаления (peekBack)
// проверить на пустоту (isEmpty)
// вернуть размер

/* const stacks = [];

stacks.push(3);
console.log(stacks); //[3]
stacks.push('winterfall');
console.log(stacks); //[3, 'winterfall']
stacks.push(true);
console.log(stacks); //[3, 'winterfall', true]

const element1 = stacks.pop();
console.log(element1); // true
console.log(stacks);

const element2 = stacks.pop(); // не только изменяет исходный массив, но и возвращает элемент, снятый со стека
console.log(element2); // true
console.log(stacks); */

//деструктуризация - синтаксическая возможность раскладывать элементы массива, и не только, в отдельные константы или перемнные

/* let age = 29;
console.log(`i am ${age} years old`); */  //интерполяция

/* const point = [3, 5];
console.log(`${point[0]} : ${point[1]}`); // 3: 5 */

/* const point = [3, 5];
const [x, y] = point; // массив слева повторяет структуру с правого массива, но вместо значений используется id
console.log(`${x} : ${y}`); // 3: 5 */

// деструктуризация строк

/* const [first, second, third] = 'two';
console.log(first); // t
console.log(second); // w
console.log(third); // o */

// декструктуризация в циклах
/* const points = [
    [4, 3],
    [0, -3]
]

for (const [x, y] of points) {
    console.log([x, y]);
} */

// rest оператор (rest - оставшиеся) позволяет свернуть часть элементов во время деструктуризации
// он не может появляться нигде кроме конца массива
// например, можно разложить массив на первый элемент и все остальные
//const fruits = ['apple', 'orange', 'banana', 'pineaplle'];

/* const [first, ...rest] = fruits; // ...rest -взять все элементы, которые остались от деструктуризации и поместить в массив rest
console.log(first);
console.log(rest); */

//const [first, second, ...rest] = fruits;

// если в массиве нет элементов, то rest возвращает пустой массив
// при деструктуризации строк на выходе получаем массив, а нестроку

// метод slice - нас нтересует только часть массива, но не важные первые элементы
/* const fruits = ['apple', 'orange', 'banana', 'pineaplle'];
const rest = fruits.slice(1); //возвращает новый массив, а не изменяет старый

console.log(rest);
console.log(first); */

// spread оператор - растягивает элементы, с его помощью копируют или сливают массивы
/* const russianCities = ['moscow', 'kazan'];
//const cities = ['milan', 'rome', ...russianCities];
const cities = russianCities.concat(['milan', 'rome']); // метод concat, добавляет элементы в начале массива
console.log(cities);
console.log(russianCities); */

//отличие rest от spred 
// rest появляется слева от знака *=*
// spread появляется справа от знака *=*
// spread оператор может появляться в любой части массива

/* const russianCities = ['moscow', 'kazan'];
const ukrainCities = ['kiev', 'odessa'];
const cities = [...russianCities, ...ukrainCities];
console.log(cities); */

/* const russianCities = ['moscow', 'kazan'];
// spread
//const copy = [...russianCities];
// без spread
// const copy = russianCities.slice();
copy.push('samara');
console.log(copy); */

