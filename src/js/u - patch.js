// 1- ОБНОВЛЕНИЕ - укзываю уник. идентификатор ресурса, который хочу обновить (по ID - fetch(`.....books/${bookId})
// Метод PUT - полностью перезаписывает св-ва обьекта(полная замена) =>
// => при отправлении запроса об обновлении на СЕРВЕР(PUT) и указании хотя бы одного измененного св-ва из обьекта
// => происходит полная замена указанного ресурса
//
// Метод PATCH - может изменять отдельные св-ва обьекта (т.е. ресурсов)
//
// 2- PATCH =
// 2.1- указываю обьект(ресурс), в котором хочу обновить св-во (по ID-(...books/ID) => fetch(`.....books/${bookId} или books/15)
// 2.2- указываю метод для обновления - method: 'PATCH'
// 2.3- указываю св-во, которое хочу обновить в обьекте => JSON.stringify({title: 'Новая тестовая книга по HTML'})
const options = {
  // options = параметры запросы
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Новая тестовая книга по HTML' }),
};

// отправляю запрос - fetch() => если получаю успешный ответ - то выполняется метод .then() -
// => внутри которого вызывается ф-я с параметром res - аргументом для этого параметра служит ответ (данные), который пришел с БЕКЕНДА
fetch(`http://localhost:4040/books/34`, options).then(res =>
  res.json().then(console.log),
);

// ==========================================
// 3- Переношу fetch() в ф-ю
const BASE_URL = 'http://localhost:4040';

// update - указываю обьект со св-ми, которые хочу обновить
// bookId - указываю ID обьекта, в котором хочу обновить св-ва
// body: JSON.stringify(update) - перевожу в формат JSON св-ва, которые хочу обновить
// return fetch() - возвращаю во из ф-ии во внешний код - рез-т метода fetch() => т.е. рез-т метода then() - return РАСПАРСЕННЫЙ ПРОМИС,
function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById({ title: 'Большая новая книга по NODEJS' }, 19);

updateBookById({ rating: 1 }, 18);

updateBookById({ rating: 4, author: 'Манго' }, 17);
