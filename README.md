# [Области видимости](https://y-doka.site/js/long/closures/)

Мы используем переменные, чтобы хранить в них временные значения, а потом получать к ним доступ в нужный момент.

Но в нашем коде не все переменные одинаково доступны. Области видимости определяют, доступна ли переменная и как получить к ней доступ.

*Область видимости* — это часть программы, в которой мы можем обратиться к переменной, функции или объекту. Этой частью может быть функция, блок или вся программа в целом — то есть мы всегда находимся как минимум в одной области видимости.

Области видимости можно представить как коробки, в которые мы кладём переменные. Переменные, которые лежат в одной коробке, могут общаться друг с другом.

![](https://github.com/ElviraResh/JavaScript/blob/Task-8/image/1.png)

Переменные также могут получить доступ к переменным из коробки, в которой лежит их коробка.

![](https://github.com/ElviraResh/JavaScript/blob/Task-8/image/2.png)

Области видимости помогают скрывать переменные от нежелательного доступа, управлять побочными эффектами и разбивать код на смысловые блоки.

Но прежде, чем мы рассмотрим, как их использовать, разберёмся с тем, какие области видимости в JS вообще есть.

### Глобальная область видимости

*Глобальная область видимости* — это самая внешняя коробка из всех. Когда мы «просто объявляем переменную», вне функций, вне модулей, то эта переменная попадает в область видимости.

```js
const a = 42
// Эта переменная сейчас находится
// в глобальной области видимости.
```

Глобальная она потому, что доступ к переменным в ней будет у всех внутренних областей.

```js
const a = 42
console.log(a) // 42

function wrap() {
  const b = a
  // Без проблем, a доступна в этой функции.
}

const c = {
  d: a,
  // Хорошо, a доступна и здесь.
}

function wrap() {
  const e = {
    f: a,
    // И тут ок, a всё ещё доступна.
  }
}
```
Переменные в глобальной области видимости называются глобальными переменными и доступны везде.

### Блочная область видимости

*Блочная область видимости* ограничена программным блоком, обозначенным через ```{``` и ```}```. Простейший пример такой области — это выражение внутри скобок:

```js
const a = 42;
console.log(a); // 42

if (true) {
  const b = 43;
  console.log(a); // 42
  console.log(b); // 43
};

console.log(b);
// ReferenceError: Can't find variable: b
// Переменная b скрыта внутри области видимости блока внутри скобок и доступна только внутри этого блока, но не снаружи.
```

Скобки могут, однако, не только отделять тело условия. Ими можно обрамлять и другие части кода. Это, например, бывает очень полезно в сложных switch-конструкциях. Например:

```js
switch (animalType) {
  case "dog": {
    // Если здесь нам надо выполнить несколько строчек,
    // удобно обернуть все операции в блок из {...}.
    // Тогда все переменные и операции
    // будут ограничены этим блоком —
    // блочной областью видимости.
    const legs = 4
    const species = "mammal"
    // ...
  }

  case "fish": {
    const legs = 0
    const swims = true
    // ...
  }
}
```

### Функциональная область видимости

*Функциональная область видимости* — это область видимости в пределах тела функции. Можно сказать, что она ограничена ```{``` и ```}``` функции.

```js
const a = 42

function scoped() {
  const b = 43
}

console.log(a) // 42
console.log(b) // Reference error.

// К переменной b есть доступ
// только внутри функции scoped.
```

*Функциональная область видимости* — очень мощный инструмент для разделения кода. Во-первых, используя её, мы можем не опасаться за «пересечение имён» переменных:

```js
// В одной области видимости
// объявить дважды let или const нельзя:

const a = 42
const a = 43 // SyntaxError: Cannot declare a const variable twice: 'a'.

// Но функции создают собственные области видимости,
// которые не пересекаются, поэтому в этом случае
// ошибки не будет:

function scope1() {
  const a = 42
}

function scope2() {
  const a = 43
}
```

Так как области видимости у функций не пересекаются и не связаны, первая функция не может обратиться к «внутренностям» соседней или вложенной функции:

```js
// Внутренности соседней функции
// скрыты в её области видимости
// и недоступны вне:

function scope1() {
  const a = 42
}

function scope2() {
  console.log(a) // Reference error.
}

// То же и с дочерними областями:

function outer() {
  function inner() {
    const a = 42
  }

  console.log(a) // Reference error.
}
```

Функциям доступны лишь переменные в её собственной области видимости (всё, что внутри её тела) и в родительских областях:

```js
function outer() {
  const a = 42

  function inner() {
    console.log(a) // 42
    // Здесь ошибки нет,
    // потому что функции доступна
    // своя область видимости,
    // а также — область видимости
    // функции outer.
  }
}

// Такое поведение, когда переменные родительских
// областей становятся доступны в дочерних,
// называется наследованием областей видимости.
```
Заметим, что у функции ```inner``` никаких локальных переменных нет — она работает только с локальной переменной функции ```outer```.

Такой особенный доступ к локальным переменным родительской функции часто называют лексической областью видимости.

Сокрытие «внутренностей» позволяет создавать независимые друг от друга блоки кода. Это, например, полезно, когда мы хотим запустить какой-то модуль в браузере, будучи уверенными, что он никак не повлияет на другой код.

### Функции внутри функций и замыкания 

Как мы видели выше, у дочерней функции есть доступ к области видимости родительской функции:

```js
function outer() {
  let a = 42

  function inner() {
    console.log(a)
  }

  inner()
}

outer()
// 42
```
Всё так же у функции ```inner``` локальных переменных нет, она лишь использует локальные переменные родительской функции ```outer```. И всё так же у кода снаружи ```outer``` нет никакого доступа к её внутренностям.

Но что, если мы вернём из функции ```outer``` функцию ```inner```?

```js
function outer() {
  let a = 42

  function inner() {
    console.log(a)
  }

  return inner
}

// Теперь мы можем не просто вызывать функцию outer,
// но присвоить результат вызова какой-то переменной:

const accessToInner = outer()

// Теперь в переменной accessToInner находится
// функция inner, у которой всё ещё есть доступ
// к *локальной переменной a* функции outer!

accessToInner()
// 42
```

То есть мы смогли «обойти» область видимости? Не совсем.

Мы действительно получили доступ к переменной ```a``` через функцию ```inner```, но только в том виде и с такими ограничениями, которые описаны при создании функции ```inner```.

У нас всё ещё нет прямого доступа к переменной ```a```. Мы, например, не можем её поменять — только вывести в консоль.

Грубо говоря, мы создали функцию, которая даёт нам читать переменные, но не изменять их. Это полезно, если мы хотим дать ограниченный доступ к внутренностям модуля.

Допустим, мы хотим сделать счётчик, который можно увеличивать и уменьшать только на единицу:

```js
function counter() {
  // Начальное значение счётчика будет 0.
  // Мы используем let, потому что будем менять значение,
  // const не подойдёт.
  let state = 0

  // Функция increase будет увеличивать счётчик на единицу.
  function increase() {
    state++
  }

  // Функция decrease будет уменьшать счётчик на единицу.
  function decrease() {
    state--
  }

  // Функция valueOf будет выводить значение.
  function valueOf() {
    console.log(state)
  }

  // А наружу мы дадим только лишь доступ к этим функциям.
  // Вернём объект, значениями полей которого будут функции
  // increase и decrease.
  //
  // Прямого доступа к переменной state всё ещё нет,
  // но внешний код может изменять её состояние опосредованно —
  // через функции increase и decrease.
  return {
    increase,
    decrease,
    valueOf,
  }
}

const ticktock = counter()
ticktock.increase()
ticktock.valueOf() // 1
ticktock.increase()
ticktock.valueOf() // 2
ticktock.decrease()
ticktock.valueOf() // 1
```
Такое контролируемое сокрытие доступа с помощью области видимости называется замыканием.

Замыкания удобны тем, что каждый новый вызов создаёт отдельную область, где значения абсолютно независимы друг от друга:

```js
const tick1 = counter()
const tick2 = counter()

tick1.valueOf() // 0
tick2.valueOf() // 0

tick1.increase()
tick1.valueOf() // 1
tick2.valueOf() // 0

tick1.increase()
tick1.valueOf() // 2
tick2.valueOf() // 0

tick2.increase()
tick1.valueOf() // 2
tick2.valueOf() // 1

tick2.decrease()
tick1.valueOf() // 2
tick2.valueOf() // 0

// Состояния обоих счётчиков друг от друга не зависят,
// хотя они создаются одной и той же функцией.
```

# [Чистые функции](https://habr.com/ru/post/437512/)

*Чистые функции* — строительные блоки в функциональном программировании. Их обожают за простоту и тестируемость.

#### Чек-лист

Функция должна удовлетворять двум условиям, чтобы считаться «чистой»:

* Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
* Нет побочных эффектов

**Одинаковый вход => Одинаковый выход**

Сравните это:
```js
const add = (x, y) => x + y;
add(2, 4); // 6
```
С этим:
```js
let x = 2;
const add = (y) => {
  x += y;
};
add(4); // x === 6 (the first time)
```
В первом случае значение возвращается на основании заданных параметров, независимо от того, где/когда вы его вызываете.

Если вы сложите 2 и 4, всегда получите 6.

Ничего не влияет на результат.

**Нечистые функции = непостоянные результаты**

Второй пример ничего не возвращает. Он полагается на общее состояние для выполнения своей работы путем увеличения переменной за пределами своей области.

Эта модель кошмар для разработчиков.

Разделяемое состояние вводит зависимость от времени. Вы получаете разные результаты в зависимости от того, когда вы вызвали функцию. В первый раз результат 6, в следующий раз 10 и так далее.

**Нет побочных эффектов**
*Примеры побочных эффектов:*

* Видоизменение входных параметров
* console.log
* HTTP вызовы (AJAX/fetch)
* Изменение в файловой системе
* Запросы DOM

#### Резюме

* Функция чистая, если не имеет побочных эффектов и каждый раз возвращает одинаковый результат, когда она вызывается с тем же набором аргументов.
* Побочные эффекты включают: меняющийся вход, HTTP-вызовы, запись на диск, вывод на экран.
* Вы можете безопасно клонировать, а затем менять входные параметры. Просто оставьте оригинал без изменений.
* Синтаксис распространения (… syntax) — это самый простой способ клонирования объектов и массивов.
