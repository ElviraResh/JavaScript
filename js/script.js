// События в JS
// к действиям от пользователя относятся: клики, набор текста, перемещение мыши, горячие клавиши и т.д. 

// с точки зрения кода все действия представлены событиями:

// click - имитирует клик мышки по элементу
// Когда click() используется с поддерживающими его элементами (такими, например, как <input>), он вызывает срабатывание события клика мышкой. Это событие затем всплывает вверх по дереву элементов (или цепочке событий) и вызывает срабатывание уже их событий по клику мышкой.

// submit - метод, позволяющий отправить форму <form>

// keyup - срабатывает, когда клавиша была отпущена / keydown - вызывается при нажатии клавиши

// focus - элемент с фокусом - это элемент, который по умолчанию будет получать события клавиатуры и аналогичные события.

// contextmenu - событие срабатывает , когда пользователь пытается открыть контекстное меню. Это событие обычно запускается щелчком правой кнопки мыши или нажатием клавиши контекстного меню. В последнем случае контекстное меню отображается в нижнем левом углу элемента в фокусе, если только элемент не является деревом, и в этом случае контекстное меню отображается в нижнем левом углу текущей строки.

// mouseover / mouseout 
// Событие mouseover происходит в момент, когда курсор оказывается над элементом, а событие mouseout – в момент, когда курсор уходит с элемента.

// mousedown / mouseup - кнопка мыши нажата/отпущена над элементом.

// Первый способ
// const getBoom = () => alert('Boom!');

// Второй способ
// так же можно навесить события через св-во элемента в DOM

// const button = document.getElementById('myButton');
// button.onclick = () => alert('Boom!');

// в данном примере мы не вызываем обработчик, а только устанавливаем его в св-во onclick

// минусы такого способа:
// пример: на странице есть множество скриптов, работающих независимо на одних и тех же элементах. Заключается он в том, что невозможно повесить одновременно несколько обработчиков. 

// на уровне атрибутов эта проблема не решаема, но в DOM есть метод, позволяющий повесить множество обработчиков на один элемент

// каждый обработчик представляет собой функцию, которая будет вызвана в момент наступления события 

// так писать нельзя! это будет ошибкой
// const handler = () => alert('Boom1!');
// button.addEventListener('click', handler());

// обработчики вызываются один за другим, т.е. в том порядке в котором они прописаны

// const button = document.getElementById('myButton');

// button.addEventListener('click', () => alert('Boom 1!'));

// // добавляю второй обработчик
// button.addEventListener('click', () => alert('Boom 2!'));

// действия по умолчанию
// const link = document.getElementById('myElement');

// link.addEventListener('click', (e) => {
//     // если этого не сделать, то браузер выполнит загрузку новой страницы
//     e.preventDefault();
//     alert(e.target.textContent);
// });

// CDN - content delivery network
// обработчик событий меню

// const links = document.querySelectorAll('.nav-link');
// на каждую кнопку вешается событие
// для этого обходим все ссылки и на каждую вешаем обработчик

// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         // нужно деактивировать предыдущий выбранный элемент
//         links.forEach((link) => link.classList.remove('active'))
//         // выделяем текущий
//         link.classList.add('active');
//     });
// });

// как правильно снять выделение с предыдущего элемента
// первый способ - не используется. т.к. трудозатратный  
// запоминать выделенный элемент и снимать с него нужный класс в момент клика по новому элементу
// второй вариант
// снятие выделения со всех элементов сразу, и не важно был ли элемент выделен или нет - т.е. операция удаления класса не приводит к ошибке, если у элемента не было класса, который удаляется 