// 1- ЛОГ(2) - НЕ ВЫПОЛНИТСЯ, т.к. невалидный JSON интерпритатор не может распарсить
// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд вернул вот такое чудо }';

// console.log(1);
// console.log(JSON.parse(invalidJSON))
// console.log(2);
//
//
//
//
// 2- Оборачиваю невалидный JSON в try...catch, чтобы код не падал, а выполнялся весь без обрыва
// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд вернул вот такое чудо }';

// try {
//   console.log(1);
//   console.log(JSON.parse(invalidJSON));
// } catch (error) {
//   console.log('ОШИБКА');
// }
// console.log('ЛОГ ПОСЛЕ try');
//
//
//
// 3- invalidJSON - НЕВАЛИДНЫЙ JSON запускается в теле try{...}
// => т.к. ошибка обнаружена в теле try{...}, то сработает catch{...}, который ловит ошибки из тела try{...}
// => ЛОГ(2) в теле try{...} - НЕ ВЫПОЛНИТСЯ, т.к. после ошибки выполнение кода в теле прерывается
// (НО СКРИПТ НЕ ПАДАЕТ, Т.Е. В КОНСОЛИ ОШИБКИ НЕТ, ПРОСТО СТРОКА С КОДОМ, В КОТОРОМ ЕСТЬ ОШИБКА ПРОСТО НЕ ВЫПОЛНИТСЯ)
// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд вернул вот такое чудо }';

// try {
//   console.log(1);
//   console.log(JSON.parse(invalidJSON));
//   console.log(2);
// } catch (error) {
//   console.log('ОШИБКА');
// }
// console.log('ЛОГ ПОСЛЕ try');
//
//
//
//
//
// 4- if (error.name === 'SyntaxError') - выполняю действие при обнаружении ошибки типа 'SyntaxError'
// try {
//   console.log(1);

//   console.log(JSON.parse(invalidJSON));

//   console.log(2);
// } catch (error) {
//   console.log(error);
//   if (error.name === 'SyntaxError') {
//     console.log('Ошибка парса json надо чтото сделать');
//   }
// }

// console.log('После try...catch');
