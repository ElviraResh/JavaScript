'use strict'

//DOM - document object model - это представление документа в виде дерева тегов. Это дерево образуется за счет вложенной структуры тегов плюс текстовые фрагменты страницы, каждый из которых образует отдельный узел.
// 

//window - глобальный объект, предоставляемый браузером, внутри которого содержатся все встроенные в браузерный JS функции и св-ва 
/* alert('hello!'); // window.alert('hello!')
Math.abs(5); // window.Math.abs(5) */ 

//BOM - browser object model - набор глобальных объектов, управляющих поведением браузера. все они находятся внутри window
// 1. navigator - информация о браузере (версия, название, доступные права, подключенные плагины)
// 2. location - позволяет управлять адресной строкой. например, так можно инициировать загрузку другой страницы location.href = 'https://www/airbnb.ru/'

// history - можно перемещаться по истории переходов, а так же формировать ее в тех ситуациях, когда не происходит реального перехода по страницам
// fetch - современный метод выполнения ajax запросов. именно с помощью функции fetch происходит общение с сервером и другими сайтами (fetch('https://www.airbnb.ru').then((res)=>res.text()).then(console.log(body));)

//DNS - domen name system - доменная система имен

// что делает браузер для отображения страницы:
// 1) браузер делает запрос на сервер (предварительно выяснив этот адрес с помощью DNS)
// 2) когда HTML получен, браузер начинает его разбор (парсинг) и формирование внутренней структуры под названием DOM-дерево
// 3) затем это дерево (а не исходный HTML) используется для физической отрисовки страницы, которую мы и наблюдаем 

// декларативный поиск по DOM-дереву
// поиск по id
/* const element = document.getElementById('content');
console.log(element); */

//поиск по class
// возвращаются все элементы с таким классом
/* const collection = document.getElementbyClassName('row');
console.log(collection); */

//поиск по тегу
// возвращаются все элементы с таким тегом
/* const collection = document.getElementsByTagName('div');
console.log(collection); */

// поиск по селектору
// возвращает первый найденный элемент по указанному селектору
// ищется элемент с id = menu
/* const ul = document.querySelector('#menu');
console.log(ul);

const spans = ul.querySelectorAll('.odd > span');
console.log(spans); */

//метод matches - проверяет, удовлетворят ли el селектору css
const el = document.querySelector('p');
console.log(el.matches('.unknow-class'));
console.log(el.matches('.font-weitgh'));

// метод closest - ищет ближайший элемент выше по ирархии, удовлетворяющий селектору. Сам элемент тоже анализируется. Если такой элемент найден, то возвращается он, иначе возвращается null

const element = document.querySelector('span');
const ancestor = element.closest('.row');
console.log(ancestor.id); // three