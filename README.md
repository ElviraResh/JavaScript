# [Массивы](https://y-doka.site/js/doka/arrays/) 
*Массив* — это структура, в которой можно хранить коллекции элементов — чисел, строк, других массивов и т.д. Элементы нумеруются и хранятся в том порядке, в котором их поместили в массив. Элементов может быть сколько угодно, они могут быть какими угодно.

Массивы очень похожи на нумерованные списки.

Массив создается с помощью квадратных скобок ```[]```.
К примеру, можно создать пустой массив:
```js
const guestList = [];
```
А можно создать сразу с элементами внутри:
```js
const theGirlList = ["Серсея", "Илин Пейн", "Меррин Трант", "Дансен", "Гора"];
```
Элементы могут быть разных типов:
```js
const infoArray = ["Россия", "Москва", 144.5, "Russian ruble", true];

// внутри массива могут быть другие массивы:
const arrayOfArrays = [
  "Россия",
  ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"],
  [true, true, false, true],
];
```
Массивы хранят элементы в пронумерованных «ячейках». Нумерация начинается с нуля. Первый элемент массива будет иметь номер 0, второй — 1 и так далее. Номера называют индексами.

Количество доступных ячеек называют размером или длиной массива. В JavaScript длина массива обычно совпадает с количеством элементов в нем. Массивы хранят свой размер в свойстве ```length```:
```js
const infoArray = ["Россия", "Москва", 144.5, "Russian ruble", true]
console.log(infoArray.length) // напечатает 5
```

### Чтение
Обратись к конкретному индексу, чтобы получить содержимое ячейки с этим номером. Если ячейка пустая или такой ячейки нет, то JavaScript вернет undefined:
```js
const guestList = ["Маша", "Леонард", "Шелдон", "Джон Сноу"];

const firstGuest = guestList[0]
console.log(firstGuest) // Маша

console.log(guestList[3]) // Джон Сноу

console.log(guestList[999]) // undefined
```

### Запись
Используй комбинацию чтения и оператора присваивания:
```js
const episodesPerSeasons = [10, 10, 10, 10, 10, 9, 7, 6]

console.log(episodesPerSeasons[5]) // 9

episodesPerSeasons[5] = 10 // <- запись в ячейку с индексом 5
console.log(episodesPerSeasons[5]) // 10
```

### Добавление элементов
Частая операция. Используй методы:

```push``` — для добавления в конец массива
```unshift``` — для добавления в начало массива
Лучше использовать push, он работает быстрее. Оба принимают произвольное количество аргументов. Все аргументы будут добавлены в массив. Методы возвращают размер массива после вставки:
```js
const watched = ["Властелин Колец", "Гарри Поттер"]

// добавляем в конец
watched.push("Зеленая Книга")
console.log(watched) // ["Властелин Колец", "Гарри Поттер", "Зеленая книга"]

const newLength = watched.push("Мстители", "Король Лев")
console.log(newLength) // напечатает 5

// добавляем в начало
newLength = watched.unshift("Грязные танцы")
console.log(newLength) // напечатает 6
console.log(watched) // ["Грязные танцы", "Властелин Колец", "Гарри Поттер", "Зеленая книга", "Мстители", "Король Лев"]
```

### Создать большой массив из чисел 
С помощью цикла и метода push можно быстро создать большой массив с числами.
```js
// создать массив чисел от 1 до 1000
const numbers = []
for (let i = 1; i <= 1000; ++i) {
  numbers.push(i)
}

// создаем массив четных чисел от 0 до 1000
let evenNumbers = []
for (let i = 0; i <= 1000; i += 2) {
  evenNumbers.push(i)
}
```

### Поиск по массиву
Используй ```indexOf```, чтобы найти, под каким индексом хранится элемент.

Используй ```includes```, чтобы проверить, что элемент есть в массиве:
```js
const episodesPerSeasons = [10, 10, 10, 10, 10, 9, 7, 6]

console.log(episodesPerSeasons.includes(8)) // напечатает false
console.log(episodesPerSeasons.includes(6)) // напечатает true
```

### Копирование массива
С копированием есть хитрость. Массив — большая структура, и она не вмещается в одну переменную. Переменная хранит адрес, где находится массив. Если этого не знать, то результат такого кода будет выглядеть странно:
```js
const iWatched = ["GameOfThrones", "Breaking Bad"]
const vitalikWatched = iWatched

vitalikWatched.push("American Gods")
console.log(iWatched) // ["GameOfThrones", "Breaking Bad", "American Gods"]
```
Фишка в том, что во второй строке происходит копирование адреса, где находится массив, а не самого массива. В итоге получаем ситуацию, когда две переменные ```iWatched``` и ```vitalikWatched``` работают с одним массивом, так как хранят один адрес.

Копия массива делается с помощью метода slice. Вызови его без аргументов и сохрани результат в новую переменную:
```js
const iWatched = ["GameOfThrones", "Breaking Bad"]
const vitalikWatched = iWatched.slice() // <- делаем копию массива

vitalikWatched.push("American Gods")
console.log(iWatched) // ["GameOfThrones", "Breaking Bad"]
console.log(vitalikWatched) // ["GameOfThrones", "Breaking Bad", "American Gods"]
```

### Деструктуризация массива
В современном JavaScript очень популярна деструктуризация массивов. Этот подход позволяет создавать переменные из элементов массива в одну строку:
```js
// мы получаем массивы с информацией о котах
const catProfile = [
  "Maru",
  "Scottish Fold",
  true,
  "https://youtu.be/ChignoxJHXc",
]

// старый подход:
// если из массива нужна пара значений, то прочитать их и сохранить в перменную
const catName = catProfile[0]
const catBreed = catProfile[1]

// новый подход делает то же самое, но короче:
const [name, breed] = catProfile
console.log(name) // напечатает Maru
```

### Методы
* [```slice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

Метод возвращает неполную копию части массива в новый объект массива , выбранном из startк end ( endне включено) , где startи endпредставляют собой индекс элементов в этом массиве. Исходный массив не будет изменен.

* [```splice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

Метод изменяет содержимое массива путем удаления или замены существующих элементов и / или добавление новых элементовна месте

* [```pop()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

Метод удаляет последний элемент из массива и возвращает его значение.

* [```concat()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

Метод возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

* [```join()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

Метод объединяет все элементы массива (или массивоподобного объекта) в строку.
