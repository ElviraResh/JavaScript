# [Объекты](https://y-doka.site/js/doka/object/)

В JavaScript кроме примитивных типов, таких как ```String``` или ```Boolean```, существует и сложные — например, объект.

*Объект* — это набор свойств. Каждое свойство состоит из названия и значения. Название может быть только строкой, значение может быть любым.

##### Зачем нужны объекты?
* Использовать их в качестве структуры хранения любых данных;
* Делать сложные программы, в которых системы объектов решают простые задачи. Ещё это называют объектно-ориентированным программированием.

Базовый вариант создания объекта или «литеральная запись» выглядит так:
```js
const o = {
key1: value1,
key2: value2,
.....
keyN: valueN,
};
```

Второй способ. Подробнее о нём и объектно-ориентированном программировании в JavaScript можно будет почитать тут:

```js
const o = new Object({ key1: "value1", keyN: "valueN" })
```

Объект, созданный через фигурные скобки и через new Object имеет одни и те же свойства и методы.

### Методы

* [```Object.assign()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

Создаёт новый объект путём копирования значений всех собственных перечислимых свойств из одного или более исходных объектов в целевой объект.

* [```Object.create()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

Создаёт новый объект с указанными объектом прототипа и свойствами.

* [```Object.defineProperty()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

Добавляет к объекту именованное свойство, описываемое переданным дескриптором.

* [```Object.defineProperties()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

Добавляет к объекту именованные свойства, описываемые переданными дескрипторами.

* [```Object.freeze()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

Замораживает объект: другой код не сможет удалить или изменить никакое свойство.

* [```Object.getOwnPropertyDescriptor()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

Возвращает дескриптор свойства для именованного свойства объекта.

* [```Object.getOwnPropertyNames()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

Возвращает массив, содержащий имена всех переданных объекту собственных перечисляемых и неперечисляемых свойств.

* [```Object.getOwnPropertySymbols()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)

Возвращает массив всех символьных свойств, найденных непосредственно в переданном объекте.

* [```Object.getPrototypeOf()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)

Возвращает прототип указанного объекта.

* [```Object.is()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Определяет, являются ли два значения различимыми (то есть, одинаковыми)

* [```Object.isExtensible()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

Определяет, разрешено ли расширение объекта.

* [```Object.isFrozen()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

Определяет, был ли объект заморожен.

* [```Object.isSealed()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

Определяет, является ли объект запечатанным (sealed).

* [```Object.keys()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Возвращает массив, содержащий имена всех собственных перечислимых свойств переданного объекта.

* [```Object.preventExtensions()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

Предотвращает любое расширение объекта.

* [```Object.seal()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

Предотвращает удаление свойств объекта другим кодом.

* [```Object.setPrototypeOf()```](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

Устанавливает прототип (т.е. внутреннее свойство [[Prototype]])
