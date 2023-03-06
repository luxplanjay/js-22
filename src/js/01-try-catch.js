// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки
//
//
// ФАЗА ПАРСИНГА ИНТЕРПРИТАТОРОМ СИНТАКСИСА КОДА - т.е. оценка кода перед чтением кода на наличие синтаксических ошибок
// если интерпритатор найдет ошибку - он не сможет распарсить код, скрипты не запустятся на выполнение
// ===============================
// СИНТАКСИЧЕСКИЕ ОШИБКИ - ЛОВИТ ИНТЕРПРИТАТОР ВО ВРЕМЯ ОЦЕНКИ КОДА ПЕРЕД ЧТЕНИЕМ
// ===========================================
// try {...} catch {....} - ЛОВИТ ОШИБКИ ВІПОЛНЕНИЯ КОДА и RUNTIME-ОШИБКИ
// ===========================================
// СИНХРОННЫЙ КОД БЕЗ ОШИБОК
// console.log('1');

// console.log('Ошибка!');

// console.log('2');
//
//
// 1- Выполниться ЛОГ-1 => затем код прекращает выполняться (падает),
// т.к. на myVar - ошибка (т.к. переменная не обьявлена)
// console.log('1');

// myVar;

// console.log('Ошибка!');

// console.log('2');
//
//
// 2- Выролнится ЛОГ('Внутри try') => затем ЛОГ('После try...catch')
// catch (error) - пропускается, т.к. сработает только если будет ошибка
// try {
//   console.log('Внутри try');
// } catch (error) {
//   console.log('Ошибка!');
// }
// console.log('После try...catch');
// //
// //
// // 3-
// try {
//   console.log('Внутри try');
//   myVar;
// } catch (error) {
//   console.log('Ошибка!');
// }
// console.log('После try...catch');
//
//
//
// 4- ЛОГ('Внутри try') => интерпритатор находит метод отложенной ф-ии setTimeout(ф-я, 5000)
// и определяет отложенный запуск через 5000мс => ЛОГ('После try...catch')
// => при запуске ф-ии внутри метода setTimeout() находит myVar и т.к. переменная не обьявлена - появляется ошибка
// => СИНТАКСИЧЕСКАЯ ОШИБКА!!! ВЫПОЛНЕНИЯ КОДА
// try {
//   console.log('Внутри try');
//   setTimeout(() => {
//     myVar;
//   }, 5000)

// } catch (error) {
//   console.log('Ошибка!');
// }

// console.log('После try...catch');
//
//
// 5- Выношу myVar-необьявленную переменную, которая приведет к ошибке в тело ф-ии try {..myVar...}
// => в результате будет выполняться все строки кода,
// а при чтении какой-либо строки, в которой будет ошибка - сработает метод catch() и выполнится ЛОГ в теле catch{..ОШИБКА!!..}
// setTimeout(() => {
//   try {
//     console.log('Внутри try');
//     myVar;
//   } catch (error) {
//     console.log('Ошибка!');
//   }
// }, 5000);

// console.log('После try...catch');
//
//
//
// 6- ВИДЫ (свойства) ошибок
// try {
//   myVar;

// } catch (error) {
//   console.log('console.log(error)', error)
//   console.dir('console.dir(error)', error);
//   console.log('console.log(error.name)', error.name)
//   console.log('console.log(error.message)', error.message)
//   console.log('console.log(error.stack)', error.stack)

//   console.log('Ошибка!');
// }

//
//
//
//
// try {
//   console.log('BHутри tгу до mуVar');
//   myVar;
//   console.log('Bнутри tгу после mуVar');
// } catch (error) {
//   console.dir(error);
//   console.log('Owибka!');
// }
// console.log('Пoсле try...catch');
