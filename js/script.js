'use strict'
// json - javascript object notation. json - это представление объекта в виде текста. 
// код написан на основе https://github.com/airbnb/javascript#objects
// линтер - программа, позволяющая уменьшить количество ошибок
// Объекты
/* const user = {
    name: 'Inna',
    email: 'inna@example.ru',
    password: 'qwerty',
    married: false,
    age: 25,
    weight: 50, // всегда ставить запятую, так как с точки зрения контроля версий это лучшая запись
};

const rectangle = {
    width: 10, // property: value
    height: 5,
}; */
// обращение к свойствам объекта - используется точечный синтаксис
// console.log(user.name); // при обращении к несуществуему свойству js выдаст undefined, поэтому при обращении всегда праверять правильное написание id свойства
// альтернативный способ обращения к объекту через []
// console.dir(user['name]); // 'Inna'
// console.log(user['password]); // qwerty

//динамическое изменение имени свойства
/* const user = { name: 'Vasya', married: true, age: 25, };
let propertyName = 'name';
console.log(user[propertyName]);

propertyName = 'married';
console.log(user[propertyName]); */

// модификация - для создания и обнавления значений св-в используется операция - присваивание. 
/* const user = { name: 'Vasya', married: true, age: 25, };

user.married = false;
// то же самое
// user['married'] = false

user.surname = 'Petrov';
// то же самое
// user['surname'] = 'Petrov';

console.log(user); // name: 'Vasya', married: false, age: 25, surname: 'Petrov'  */

// не смотря на то, что объект объявлен как константа, он поменялся. Потому что объект менять можно, но заменить на другой нельзя

/* const user = { name: 'Maria' };
user.name = 'Igor';
console.log(user);

user = { name: 'Mike' }; // ошибка! 
console.log(user); */

// изменяемость объектов
/* const course = {};
course.name = 'JS: Объекты';
course.description = 'Базовый синтаксис';
console.log(course.name);
console.log(course); */

// удаление элемента из объекта
/* const user = { name: 'Vasya', wrongProp: 'bug', };
console.log(user);
delete user.wrongProp; // удалять св-во из объекта - плохая практика
console.log(user); */

// ссылки - переменные и константы, хранят не сами объекты (их данные), а ссылку на них, поэтому возникает ощущение, что const в JS изменяемы, но это не так

// ссылочная природа при сравнении объектов
// объекты равны между собой не тогда, когда у них одинаковая структура, а когда это один и тот же объект

//console.log(company === { name = 'Amazon' }); // false
/* const company = {name: 'Amazon'};
const copyOfCompany = company; // передается ссылка
console.log(company === copyOfCompany); // true

company.createdAt = 1994; // свойство добавится в оба объекта
console.log(company); // name: 'Amazon', createdAt: 1994
console.log(copyOfCompany); // name: 'Amazon', createdAt: 1994 */

// проверка существования св-ва
// написать функцию, которая должна посчитать количество повторяющихся элементов в массиве

// вход 
/* const bag = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
]; */
// выход
// const result = {
//     apple: 3, 
//     banana: 2,
//     pear: 2,
//     orange: 1,
//     apricot: 1,
// };
// решение
/* const countFruits = bag => {
    const result = {};
    for(const name of bag) {
        // проверка на существование
        if(result[name] === undefined) {
            result[name] = 1;
        } else {
            result[name] += 1;
        }
    }
    return result;
};
console.log(countFruits(bag)); */

// обход всех свойств объекта
// объект не является коллекцией и его нельзя обойти с помощью for...of 

// for...in 
//const course = { name: 'JS: React', slug: 'js-raect' };

/* for (const prop in course) {
    console.log(`course.${prop} = ${course[prop]}`);
} */

// for...in выводит не только св-ва самого объекта, но и св-ва, добавленные в прототип этого объекта
// объекты в js могут быть связаны друг с другом и обращение к св-ву в одном объекте может приводить к обращению (неявному) к св-ву в другом объекте (прототипе).

// другой способ обхода Object.keys(obj)
// метод позволяет получить массив всех ключей объекта
/* const keys = Object.keys(course); 
console.log(keys); // [ 'name', 'slug' ]

// обход в цикле 
for (const key of keys) {
    console.log(course[key]);
} */

// другой способ, если ключи в процессе не используются, то можно сразу получить массив значений св-в объекта
// метод Object.values(obj)
/* const values = Object.values(course);
console.log(values);

// обход в цикле 
for (const value of values) {
    console.log(value);
} */

// еще один метод, который возвращает сразу ключи и значения объекта
// каждый элемент сам будет массивом, содержащим ключ и соответ-ее ему значение [key, value]
/* const entries = Object.entries(course);

console.log(entries); // [ [ 'name', 'JS: React' ], [ 'slug', 'js-raect' ] ]

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
} */

// реал-ть функцию, которая возвращает список ключей объекта, значение которых равно переданному значению

const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructuting: 2,
    arra: 2,
}

// логика работы функции
// 1. обход свойств объекта
// 2. если значение в св-ве совпадает с переданным, то добавляем ключ в результат

/* const searhKeys = (lessonMembers, expectedValue) => {
    const result = [];
    const entries = Object.entries(lessonMembers);
    // return entries;
    for (const [key, value] of entries) {
        if (value === expectedValue) {
            result.push(key);
        }
    }
    return result;
};

console.log(searhKeys(lessonMembers, 10)); // [ 'foreach', 'operations' ] */

// слияние объектов
//const user = { name: 'Tirion', email: 'support@yandex.ru', age: 44};
// из формы пришли данные
//const data = { name: 'Tirion2', age: 45};

// { name: 'Tirion2', email: 'support@yandex.ru', age: 45}

// первый метод - решение в лоб, перенести все значения свойств, сохранив бд
/* user.name = data.name;
user.age = data.age; */

//Object.assign(user, data); // берет объект, переданный первым параметром, и переносит в него все из объектов, переданных остальными параметрами
//console.log(user); // { name: 'Tirion2', email: 'support@yandex.ru', age: 45 }

/* const obj1 = { a:'a', b:'b'};
const obj2 = { c:'c', b:'v'};
Object.assign(obj1, obj2);
console.log(obj1); // { a: 'a', b: 'v', c: 'c' } */

// 1. если какое то свойство было в первом объекте, то оно остается каким и было
// 2. если св-во присутствует во втором и далее объекте, то оно записывается в первый, независимо от того было оно там или нет
// 3. если св-во присутствовало и в первом и втором объектах, то оно будет перезаписано значением из второго

// ограничение Object.assign() - оно выполняет только поверхностное слияние. вложенные объекты не сравниваются, а просто заменяются

const obj1 = { a: {a: 1} };
const obj2 = { a: {b: 1} };
Object.assign(obj1, obj2);
console.log(obj1); // { a: { b: 1 } }