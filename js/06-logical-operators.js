/*
 * Приведение к булю на примере Boolean(value)
 */

// 6 хибних значень, які приводять до false
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean('')); // ПУСТИЙ рядок
// console.log(Boolean(false));

// // ВСЕ інше буде true
// console.log(Boolean(5));
// console.log(Boolean(-5));
// console.log(Boolean('0')); // НЕ ПУСТИЙ рядок
// console.log(Boolean('false'));
// console.log(Boolean(-555));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// останній АБО НЕПРАВДА
// console.log(5 && 6);
// console.log(false && 6 && 10);
// console.log(8 && 'good' && 0);
// console.log(90 && 'aaa' && '32');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 || 7 || 8 || 10);
// console.log(10 || false);
// console.log(false || 10);
// console.log(false || null); // останній операнд, бо тут немає правди

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!false); // інверсія => true
// console.log(!0);
// console.log(!1);
// console.log(!'object');

// console.log(!5); // 5 - true => !5 - false
