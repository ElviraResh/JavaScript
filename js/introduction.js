// Какая площадь поверхности у Марса?
// 1) Радиус Марса 3390 км
// 2) Нашли формулу площади поверхности сферы S=4*pi*R*R; R- радиус. pi=3.14

// формулы переписываю на JS
//4*3.14*3990*3390

// какая площадь поверхности у Меркурия?

// 1) Радиус Меркурия 2440 км
// 2) Нашли формулу площади поверхности сферы

// Формулу записываю в JS
//4*3.14*2440*2440

// запоминание в JS
//const pi = 3.14; // const - ключевое слово, после него идентификатор (наименование)

//const surfaceOfMars = 4*pi*3990*3990;
//const surfaceOfMercury = 4*pi*2440*2440;

// хочу создать коробку, которая будет принимать внутрь себя что-то

/* const surfaceAreaCalculator = (radius) => {
    const pi = 3.14;
    return 4 * 3.14 * radius * radius;
} // определение функции 
 */
// const surfaceOfMars = surfaceAreaCalculator(3390); // результат (вызов функции)
// const surfaceOfMercury = surfaceAreaCalculator(2440); //результат (вызов функции)

// console.log(surfaceOfMars);
// console.log(surfaceOfMercury); 

// Задача 1
// реализуйте функцию, которая принимает на вход два числа и возвращает квадрат суммы этих чисел. Для вычисления значения используйте формулу из курса алгебры: a * a + 2 * a * b + b * b;

/* // определение функции
const squareOfSum = (a, b) => {
    return (a * a) + (2 * a * b) + (b * b);
}

// вызов функции
console.log(squareOfSum(1, 10)); */

/* const squareOfSum = (a, b) => (a * a) + (2 * a * b) + (b * b); // определение функции
const squareOfSum = (a, b) => (a ** 2) + (2 * a * b) + (b ** 2); // то же самое что и строчка выше
console.log(squareOfSum(1, 10)); */

/* const name = "Ilya";
name = "Alex"

console.log(name); // ошибка! константу изменить нельзя */