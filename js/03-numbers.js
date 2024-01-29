/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementWidth = '50px';
// const result = Number.parseInt(elementWidth); // посимвольно парсить рядок (ціле число), заминка на 1-му не  числі
// console.log(result); // "a50px - NaN"
// console.log(typeof result);
// elementWidth = Number.parseInt(elementWidth); // працює на 0-9
// console.log('parseInt: ', elementWidth);

let elementHeight = '200.74px';
// працює на 0-9 або крапка (КОМУ НЕ ЧИТАЄ)
// elementHeight = Number.parseFloat(elementHeight);
// console.log('parseFloat: ', elementHeight);

/*
 * - Метод число.toFixed(digits) - НЕ ОКРУГЛЯЄ, А ВІДСІКАЄ (але все ж округляє)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
// console.log(Number(salary.toFixed(3)));
// // or
// salary = Number(salary.toFixed(2));
// console.log(salary); // toFixed() не змінює початкове значення

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = '30';
let value = '12 Эту строку невозможно привести к числу';
// console.log(Number(quantity));
// console.log(Number(value));

// ВАЖЛИВО!! Number() - це не парс,
// а перетворення повністю на число.
// Тому якщо навіть буде "12 блабала" - це NaN

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// console.log(Math.pow(base, power));
// console.log(base ** power); // ОПЕРАТОР ЕКСПОНЕНТ

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

// Попередній розв`язок
// const base = Number(prompt('Введи число'));
// const power = Number(prompt('Введи ступінь'));
// console.log(base ** power);

// // 1. Попросити юзера ввести число і зберегти у змінну
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// // 2. Попросити юзера ввести ступінь і зберегти у змінну
// let power = prompt('Давай ступінь');
// power = Number(power);
// console.log(power);

// // 3. Піднести введені дані до ступеня і вивести
// const result = Math.pow(base, power);
// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

// console.log(Math.random()); // від 0 до 1

// Math.random() * (max - min) + min;
// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result); // від 30 до 50

// const colors = ['tomato', 'teal', 'orange', 'pink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0; // масив починається з нуля

// const index = Math.round(Math.random() * (max - min) + min);

// console.log(index);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;
