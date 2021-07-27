'use strict'
// Типы данных

// NaN - тип данных number
// String - строка (любой тип данных)
// Boolean - булевый тип данных (true, false)
// Undefined - неопределенность (симантически создан для того чтобы его просчитывал компьютер, а не программист)
// Null - ничего, для явного указания значения

// типизация -классификация информации

/* let a; // переменная без значения на самом деле имеет тип undefined (ничего)
console.log(a);
typeof a; // undefined */

// динамическая и статическая типизация (когда)
// код конвертируется в понятную для запуска компьютером форму - компиляция.
// промежуток времени. за который это происходит - стадия компиляции (compile time)

// проверка типов и поиск ошибок типизации на стадии компиляции (статическая). 
// перед запуском программы (С#, C++, Java)

// проверка типов и поиск ошибок типизации на стадии исполнения (динамическая).
// в период исполнения программы (js, php, ruby)

// слабая и сильная типизация (насколько серьезно)
// слабая - нестрогая типизация
// сильная - более строгая типизация

// 4 * '7' = 28 // js имеет представление о типах данных => у него слабая типизация

/* const simpleNum = num => {
    let answer = true;
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            answer = false;
        }
    }
    return answer;
}

console.log(simpleNum(5)); */

// домашка
// написать функцию, которая переворачивает строку задом наперед, используя рекурсию 

/* // Вариант 1.
function reverseString(str) {
    // Шаг 1. Используйте метод split (), чтобы вернуть новый массив.
    let splitString = str.split(""); // let splitString = "Elvira".split("");
    // ["E", "l", "v", "i", "r", "a"]
 
    // Шаг 2. Используйте метод reverse (), чтобы отменить новый созданный массив.
    let reverseArray = splitString.reverse(); // let reverseArray = ["E", "l", "v", "i", "r", "a"].reverse();
    // ["a", "r", "i", "v", "l", "E"]
 
    // Шаг 3. Используйте метод join (), чтобы объединить все элементы массива в строку.
    let joinArray = reverseArray.join(""); // let joinArray = ["a", "r", "i", "v", "l", "E"].join("");
    // "Elvira"
    
    //Шаг 4. Верните перевернутую строку
    return joinArray; // "arivlE"
}
 
console.log(reverseString("Elvira")); */

// Вариант 2.
// цикл for
/* function reverseString(str) {
    // Шаг 1. Создайте пустую строку, в которой будет размещена новая созданная строка.
    let newString = "";
 
    // Шаг 2. Создайте цикл FOR
    /* Начальной точкой цикла будет (str.length - 1), что соответствует
        последний символ строки, «о»
        Пока i больше или равно 0, цикл будет продолжаться
        Мы уменьшаем i после каждой итерации */
    /* for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Здесь длина Elvira равна 6
        Для каждой итерации: i = str.length - 1 and newString = newString + str[i]
        Первая итерация:    i = 6 - 1 = 5,         newString = "" + "a" = "a"
        Вторая итерация:    i = 5 - 1 = 4,         newString = "a" + "r" = "ar"
        Третья итерация:    i = 4 - 1 = 3,         newString = "ar" + "i" = "ari"
        Четвертая итерация: i = 3 - 1 = 2,         newString = "ari" + "v" = "ariv"
        Пятая итерация:     i = 2 - 1 = 1,         newString = "ariv" + "l" = "arivl"
        Шестая итерация:    i = 1 - 1 = 0,         newString = "arivl" + "E" = "arivlE"
    Конец цикла FOR*/
 
    // Шаг 3. Верните перевернутую строку
    /* return newString; // "arivlE"
}

console.log(reverseString("Elvira")); */


// Вариант 3
// с помощью рекурсии
/* function reverseString(str) {
    if (str === "") // Это крайний случай, который завершит рекурсию
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0); */
  /* 
  Первая часть метода рекурсии
  Вы должны помнить, что у вас будет не один звонок, у вас будет несколько вложенных звонков.
  
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Elvira")   will return   reverseString("lvira")           + "E"
  2nd call – reverseString("lvira")    will return   reverseString("vira")            + "l"
  3rd call – reverseString("vira")     will return   reverseString("ira")             + "v"
  4th call – reverseString("ira")      will return   reverseString("ra")              + "i"
  5th call – reverseString("ra")       will return   reverseString("a")               + "r"
  6th call – reverseString("a")       will return   reverseString("")                 + "a"
  
  Вторая часть метода рекурсии
  Метод попадает в условие if, и наиболее вложенный вызов немедленно возвращается.  
  6th call will return reverseString("") + "a" = "a"
  5th call will return reverseString("a") + "r" = "a" + "r"
  4th call will return reverseString("ar") + "i" = "a" + "r" + "i"
  3rd call will return reverseString("ari") + "v" = "a" + "r" + "i" + "v"
  2nd call will return reverserString("ariv") + "l" = "a" + "r" + "i" + "v" + "l"
  1st call will return reverserString("arivl") + "E" = "a" + "r" + "i" + "v" + "l" + "E" 
  */
  /* }
  console.log(reverseString("Elvira")); */

// Вариант 3, записанный с помощью тернарных операторов
// 
/*   function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("Elvira")); */






