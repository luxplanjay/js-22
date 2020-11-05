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

try {
  console.log('Внутри try до myVar');

  myVar;

  console.log('Внутри try после myVar');
} catch (error) {
  console.log('Ошибка!');
}

console.log('После try...catch');
