// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

// 1- Добавляю файл .browserslistrc => last 3 chrome versions (для того, чтобы babel.rc смог читать более современный код JS)
//
// 2-
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };

//   return Promise.resolve(fruits[name]);
// }
// // возвращает яблоко
// getFruit('apple').then(promise => console.log(promise));
//
//
//
// 3- СИНХРОННАЯ Ф-Я - НЕ СМОЖЕТ ВЫВЕСТИ ПРОМИС ИЗ САМОЙ Ф-ИИ
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // БУДЕТ ОШИБКА
//   return 5;
// }
// // возвращает яблоко
// getFruit('apple').then(promise => console.log(promise));
//
//
//
// 4- АСИНХРОННАЯ Ф-Я - ВСЕГДА ВОЗВРАЩАЕТ ПРОМИС ИЗ Ф-ИИ
// async function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // ВЕРНЕТ ПРОМИС (со значением = 5) => далее по цепочке передает значение для then()
//   return Promise.resolve(fruits[name]);
//   // или
// // ВЕРНЕТ ПРОМИС (со значением = 5) => далее по цепочке передает значение для then()
//   // return 5;
// }

// getFruit('apple').then(promise => console.log(promise));
//
//
//
// 5-
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // ВЕРНЕТ ПРОМИС (со значением = 5) => далее по цепочке передает значение для then()
//   return Promise.resolve(fruits[name]);
// }
// // Создаю ф-ю для приготовления напитка по резульатам промиса ф-ии getFruit()
// function makeSmothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);
//   });

//   // Получаю КИВИ - только в случае успешного полученяия ЯБЛОКА
//   getFruit('kiwi').then(kiwi => {
//     console.log(kiwi);
//   });
// }

// makeSmothie();
//
//
//
// 6- РЕФАКТОРИНГ СИНХРОННОЙ Ф-ИИ => НА АСИНХРОННУЮ Ф-Ю (async/await)
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // ВЕРНЕТ ПРОМИС (со значением = 5) => далее по цепочке передает значение для then()
//   return Promise.resolve(fruits[name]);
// }
// console.log(1);

// // РЕФАКТОРИНГ - вместо синхронной ф-ии =>
// // Создаю АСИНХРОННУЮ Ф-Ю:
// async function amakeSmothie() {
//   // ПОСЛЕДОВАТЕЛЬНЫЕ ОПЕРАЦИИ -т.е. если await getFruit('apple') - НЕ ВЫПОЛНИТСЯ, то и await getFruit('kiwi') - НЕ ВЫПОЛНИТСЯ
//   // await - подожди (ЖДУ ВЫПОЛНЕНИЯ ПРОМИСА-т.е. получения данных с сервера)
//   // => если ПРОМИС ф-ии getFruit('apple') пришел(выпонился) УСПЕШНЫЙ (ИЛИ ОТКЛОНЕННЫЙ НЕ ВАЖНО) => только тогда выполняется вырадение слева -т.е переменная apple принимает значение ПРОМИСА
//   const apple = await getFruit('apple');
//   console.log(apple);

//   // await - подожди => если ПРОМИС ф-ии getFruit('apple') УСПЕШНЫЙ => то запиши значение ПРОМИСА в переменную kiwi
//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
// }

// console.log(2);
// // Выполнение АССИНХРОННОЙ Ф-ИИ - будет в конце - после СИНХРОННОЙ Ф-ИИ
// amakeSmothie()

// console.log(3);

//
//
//
// 7-
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // ВМЕСТО Promise.resolve(fruits[name]) => создаю новый экземпляр c ОТЛОЖЕННЫМ ВЫЗОВОМ setTimeout() УСПЕШНОГО ПРОМИСА resolve()
//   // return new Promise(resolve => {
//   //   setTimeout(() => {
//   //     resolve(fruits[name]);
//   //   }, 2500);
//   // });
//   // или РЕФАКТОРИНГ
//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 2500));
// }

// console.log(1);

// // РЕФАКТОРИНГ - вместо синхронной ф-ии =>
// // Создаю АСИНХРОННУЮ Ф-Ю:
// async function amakeSmothie() {
//   // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
//   console.time('amakeSmothie');
//   // ПОСЛЕДОВАТЕЛЬНЫЕ ОПЕРАЦИИ -т.е. если await getFruit('apple') - НЕ ВЫПОЛНИТСЯ, то и await getFruit('kiwi') - НЕ ВЫПОЛНИТСЯ
//   // await - подожди (ЖДУ ВЫПОЛНЕНИЯ ПРОМИСА-т.е. получения данных с сервера)
//   // => если ПРОМИС ф-ии getFruit('apple') пришел(выпонился) УСПЕШНЫЙ (ИЛИ ОТКЛОНЕННЫЙ НЕ ВАЖНО) => только тогда выполняется вырадение слева -т.е переменная apple принимает значение ПРОМИСА
//   const apple = await getFruit('apple');
//   console.log(apple);

//   // await - подожди => если ПРОМИС ф-ии getFruit('apple') УСПЕШНЫЙ => то запиши значение ПРОМИСА в переменную kiwi
//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
//   console.timeEnd('amakeSmothie time');
// }

// console.log(2);
// // Выполнение АССИНХРОННОЙ Ф-ИИ - будет в конце - после СИНХРОННОЙ Ф-ИИ
// amakeSmothie();

// console.log(3);
//
//
///
// 8- Promise.all()
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };
//   // ВМЕСТО Promise.resolve(fruits[name]) => создаю новый экземпляр c ОТЛОЖЕННЫМ ВЫЗОВОМ setTimeout() УСПЕШНОГО ПРОМИСА resolve()
//   // return new Promise(resolve => {
//   //   setTimeout(() => {
//   //     resolve(fruits[name]);
//   //   }, 2500);
//   // });
//   // или РЕФАКТОРИНГ
//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 2500));
// }

// console.log(1);

// // РЕФАКТОРИНГ - вместо синхронной ф-ии =>
// // Создаю АСИНХРОННУЮ Ф-Ю:
// async function amakeSmothie() {
//   // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
//   console.time('amakeSmothie time');
//   // создаю переменные для хранения ПРОМИСОВ
//   const apple = getFruit('apple');
//   // console.log(apple);

//   const kiwi = getFruit('kiwi');
//   // console.log(kiwi);

//   // Создаю переменную для хранения ВСЕХ ПРОМИСОВ, которые придут ИЗ МАССИВА ДАННЫХ
//   const fruits = await Promise.all([apple, kiwi])
//   console.log(fruits)
//   // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
//   console.timeEnd('amakeSmothie time');
// }

// console.log(2);
// // Выполнение АССИНХРОННОЙ Ф-ИИ - будет в конце - после СИНХРОННОЙ Ф-ИИ
// amakeSmothie();

// console.log(3);
//
//
//
// 9- try...catch
function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };
  // ВМЕСТО Promise.resolve(fruits[name]) => создаю новый экземпляр c ОТЛОЖЕННЫМ ВЫЗОВОМ setTimeout() УСПЕШНОГО ПРОМИСА resolve()
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(fruits[name]);
  //   }, 2500);
  // });
  // или РЕФАКТОРИНГ
  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 2500));
}

console.log(1);

// РЕФАКТОРИНГ - вместо синхронной ф-ии =>
// Создаю АСИНХРОННУЮ Ф-Ю:
async function amakeSmothie() {
  // ИСПОЛЬЗУЮ try...catch для обработки ошибок
  try {
    // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
    console.time('amakeSmothie time');
    // создаю переменные для хранения ПРОМИСОВ
    const apple = getFruit('apple');
    // console.log(apple);

    const kiwi = getFruit('kiwi');
    // console.log(kiwi);

    // Создаю переменную для хранения ВСЕХ ПРОМИСОВ, которые придут ИЗ МАССИВА ДАННЫХ
    const fruits = await Promise.all([apple, kiwi]);

    // ЗАМЕРЯЮ ОБЩЕЕ ВРЕМЯ НА ВЫПОЛНЕНИЕ Ф-ИИ
    console.timeEnd('amakeSmothie time');

    // Возвращаю (ВЫВОЖУ) промис из ф-ии ВО ВНЕШНИЙ КОД (иными словами передаю по цепочке)
    return fruits;

  } catch (error) {
    console.log('ОШИБКА');
  }
}

console.log(2);
// Выполнение АССИНХРОННОЙ Ф-ИИ - будет в конце - после СИНХРОННОЙ Ф-ИИ
// Получаю ПРОМИС then()-УСПЕШНЫЙ, catch()-ОТКЛОНЕННЫЙ
amakeSmothie().then(dataFruits => console.log(dataFruits));

console.log(3);
//
//
//
// 10- ФИНАЛЬНЫЙ КОД
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500),
//   );
// }

// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }
// aMakeSmoothie();
//
//
//

// ====================ДОПОЛНЕНИЕ========================
//
// =============ПРАВИЛЬНЫЕ ПОДПИСИ АСИНХРОННЫХ КОНСТРЕКЦИЙ==============
//
// // async function fn () {}

// // const fn  = async function () {}

// // const arr = async () => {}

// // const x = {
// //   async getname () {}
// // }

// // class X {
// //   async getName () {}
// // }
