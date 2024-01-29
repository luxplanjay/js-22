/*
 * Длина строки, свойство length
 */
const message = 'В этой строке 26 символов.';
// console.log(message.length); // без дужок, бо це властивість

/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// числа не СШИВАЮТЬСЯ
// console.log(5 + '5'); // 55
// console.log(5 + ' 5'); // 5 5
// console.log(5 + 5); // 10
// console.log(5 + '' + 5); // 55
// console.log(5 + ' ' + 5); // 5 5

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 716;
const type = 'VIP';

// ОЛДСКУЛ (НЕ ЗРУЧНО)
// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   room +
//   ' номер ' +
//   type;

// console.log(welcomeMsg);
// console.log(`Гость ${fullName} поселяется в ${room} номер ${type}`);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;

// console.log(orderMsg);
// console.log(` gkgkgkg glgllg lglgg ${5 + 5}`);

/*
 * Нормализация с методом toLowerCase()
 */
// let brand = prompt('Gimme the brand');
// brand = brand.toLowerCase();

// console.log(brand);

// let brand = 'SumSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1)); // true or false
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1)); // true or false
// console.log(string2.toLowerCase().includes(blacklistedWord2)); // читається зліва направо (по вкладенності), справа на ліво для операції присвоювання

// console.log(string3.includes(blacklistedWord1)); // true or false
// console.log(string3.includes(blacklistedWord2));
