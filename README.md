# Функции #

Любая **функция это объект**, и следовательно ею можно манипулировать как объектом, в частности:

* передавать как аргумент и возвращать в качестве результата при вызове других функций (*функции высшего порядка*);
* создавать анонимно и присваивать в качестве значений переменных или свойств объектов.

**Функция в JS** специальный тип объектов, позволяющий формализовать средствами языка определенную логику поведения и обработки данных.

Для понимания работы функций необходимо (и достаточно?) иметь представление о следующих моментах:

* способы **объявления**
* способы **вызова**
* параметры и аргументы вызова (*arguments*)
* область данных (*Scope*) и замыкания (*Closures*)
* объект привязки (*this*)
* возвращаемое значение (*return*)
* исключения (*throw*)
* использование в качестве конструктора объектов
* сборщик мусора (*garbage collector*)
  
Объявление функции
==================
  
## Функции вида "function declaration statement"

Объявление функции (*function definition*, или *function declaration*, или *function statement*) состоит из ключевого слова **function** и следующих частей:

* Имя функции
* Список параметров (принимаемых функций) заключенных в круглые скобки **()** и разделенных запятыми
* Инструкции, которые будут выполнены после вызова функции, заключаются **{}**

```sh
function square(number) { //square - функция, number - параметр, который функция принимает в себя 
  return number * number; // инструкция return указывает на значение, кторое будет возвращено функцией
}
```
 
Примитивные парметры (например, число) передаются функции значением; **значение** передается в функцию, но если функция меняет значение параметра, **это изменение отразится глобально или после вызова функции**.

Если вы передадите объект как параметр (не примитив, например, *массив* или определяемые пользователем объекты), и функция изменит свойство переданного в нее объекта, это изменение будет видно и вне функции:

```sh
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x получает значение "Honda"

myFunc(mycar);
y = mycar.make; // y получает значение "Toyota"
                // (свойство было изменено функцией)
```

## Функции вида "function definition expression"

Функция вида "function declaration statement" по синтаксису является инструкцией (statement), еще функция может быть вида "function definition  expression". Такая функция может быть **анонимной** (она не имеет имени).

```sh
var square = function(number) { return number * number; };
var x = square(4); // x получает значение 16
```

Однако, имя может быть и присвоено для вызова самой себя внутри самой функции и для отладчика (debugger) для идентифицированные функции в стек-треках (stack traces; "trace" — "след" / "отпечаток").

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));
Copy to Clipboard
Функции вида "function definition expression" удобны, когда функция передаётся аргументом другой функции. Следующий пример показывает функцию map, которая должна получить функцию первым аргументом и массив вторым.

```sh
function map(f, a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```

В следующим коде наша функция принимает функцию, которая является function definition expression, и выполняет его для каждого элемента принятого массива вторым аргументом.

```sh
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
      return result;
}
var f = function(x) {
   return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
```

Функция возвращает: [0, 1, 8, 125, 1000].

В JavaScript функция может быть объявлена с условием. Например, следующая функция будет присвоена переменной myFunc только, если num равно 0: 

```sh
var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}
```
