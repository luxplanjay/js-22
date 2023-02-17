// import './js/r - get';
// import './js/c - post';
// import './js/u - patch';
// import './js/d - delete';
//
// ПРОВЕРКА НА ОШИБКУ 404 - перед тем как распарсить данные
fetch('').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
});
//
//

// *******************ПОРЯДОК РАБОТЫ С JSON-SERVER (БОЛВАНКА СЕРВЕРА С ДАННЫМИ - ДЛЯ ЛОКАЛЬНОГО ТЕСТИРОВАНИЯ)****************************
// 1- Устанавливаю СЕРВЕР, который будет имитировать УДАЛЕННЫЙ БЕКЕНД,
// но будет нах-ся локально у меня на компьютере, с возможностью храненияи изм-я данных
//
// ЗАХОЖУ в БИБЛИОТЕКУ JSON-SERVER=> https://github.com/typicode/json-server#getting-started
//
// npm install --save-dev json-server
//
// 2- Созд-ю файл для хранения данных (база данных)
// db.json
//
// 3- Созд-ю скрипт для запуска
// "scripts": {
//   "server": "json-server --watch db.json -p 4040 -d 300"
// }
//
// -p 4040 -d 300 = ЗАХОЖУ DOCS =>
// CLI-usage - конфигурации настройки клиента (настройка номера порта и имитация задержки ответа с сервера)
//
// 4- Запуская скрипт
// npm run server
//
// 5- БРАУЗЕР использую как HTTP-клиент:
// В ТЕРМИНАЛЕ копирую http://localhost:3000/books => вставляю вбраузер => захожу на ЛОКАЛХОСТ
//
// DOCS => SORT => МЕНЯЮ настройку запроса ?_sort=views&_order=asc (_sort - имя св-ва, _order - порядок сортировки)

//
// Устанавливаю расширение в CHROME => JSON-FORMATTER
// Во время разработки, когда вы проверяете формат JSON в браузере, если строка вывода не организована,
// ее трудно увидеть, и это режет глаза. Использование JSON Formatter может аккуратно решить эту проблему.
// Вы можете складывать и разворачивать массивы или объекты, а также разрывы строк и интервалы.
//
//
// 6- POSTMAN - ИМИТАЦИЯ HTTP-клиента при разработке и тестировании BACKEND (https://web.postman.co/)
// ЗАХОЖУ на сайт => создаю запрос GET на URL СЕРВЕРА_БОЛВАНКИ - http://localhost:4040/books
//
// 7- Далее работаю в ФАЙЛЕ [r-get.js]
