/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

//літерал об`єкта
// name: [] -> ключ ("властивість") - значення
// const playlist = { name: [1, 2, 3], b: 5, c: 10 };

// const playlist = {
//   // з МАЛЕНЬКОЇ букви, може бути cameCase
//   // імена ключів УНІКАЛЬНІ (візьме останнє значення серед двох однакових)
//   name: 'Best playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist.name);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//   name: 'Best playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5; // створено нову властивість
// playlist.rating = 10; // властивість перезаписано

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// // доступ до значення ключа через назву ключа, записану у змінній
// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist[propertyName]); // рідко використовується, але буває
// console.log(playlist.propertyName); // такої властивості НЕМАЄ, undefined

/*
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// // const signupData = {
// //   username: username,
// //   email: email,
// // };

// // АБО

// Шортхенди
// const signupData = {
//   // ім`я змінної буде використано як ім`я цієї властивості
//   // а значення змінної буде використано як значення цієї властивості
//   username, //  username: username,
//   email, //  email: email,
// };

// console.log(signupData);

/*
 * Вычисляемые свойства
 */

// <input name = 'color' value = 'tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log([] === []);
// console.log({} === {});

// const a = { x: 1, y: 2 };
// const b = a; // посилання на а

// console.log(b === a);

// a.c = 100; // рівне b.c = 100;
// b.c = 150; // перезаписуємо a.c = 150

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */
// const a = [1, 2, 3];

// a.hello = ';;;)))';

// console.dir(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ':)';

// console.dir(fn);
