/*
 * Оператор ветвления if
 */

// if (5 > 3) {
//   // (все, що тут) -> до буля
//   // тіло, якщо if true
//   console.log('Done');
// }
// console.log('далі');

/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

const salary = 1000;

// тут не перевіряються всі if, до першого правильного
// if (salary <= 500) {
//   console.log('level 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('level 2');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('level 3');
// } else {
//   console.log('level 4');
// }

// // else if до першого правильного (тут else if для 1500-3000 і далі ігнорується)

// console.log('код далі');

// // а тут перевіряються всі if
// if (salary <= 500) {
//   console.log('level 1');
// }
// if (salary > 500 && salary <= 1500) {
//   console.log('level 2');
// }
// if (salary > 1500 && salary <= 3000) {
//   console.log('level 3');
// }

/*
 * Тернарный оператор (КОЛИ ДВА ВАРІАНТИ )
 */
const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// console.log(message);

// message = умова ? вираз1 : вираз2
// (умова true => вираз1, false => вираз2)

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);
/*
 * Блочная область видимости переменных
 */

const b = 10;

if (true) {
  console.log(b);
  const a = 5;

  console.log(a);
}

console.log(b);
