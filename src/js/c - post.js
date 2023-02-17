// 1- Созд-е через POSTMAN
//
// 2- Созд-е через fetch()
//
// Создаю обьект со св-ми, которые хочу добавить на сервер
// const newBook = {
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 1,
// };
// //
// // method: POST - МЕТОД СОЗДАНИЯ
// // headers: {
// СЛУЖЕБНЫЕ ЗАГОЛОВКИ
// 'Content-Type':  'application/json' - определяем для сервера формат данных, в котором мы хотим отправлять данные - JSON
// 'Accept': 'application/json' - формат, который мы ожидаем как ответ с СЕРВЕРА
// // body: JSON.stringify(newBook) - передаю на сервер данные в формате JSON =>
// // для этого обьект options привожу к строке JSON (из JS переформатирует в строку-JSON)
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify(newBook),
// };
// //
// // Делаю запрос
// fetch('http://localhost:4040/books', options)
//   .then(response => response.json())
//   .then(console.log);
//
// 201 - СОЗДАНО

// 3- СОЗД-ю ЧЕРЕЗ Ф-Ю

const BASE_URL = 'http://localhost:4040';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
// renderBook - Ф-Я БУДЕТ РЕНДЕРИТЬ (ОТРИСОВЫВАТЬ) нашу добавленную книжку
// .then(renderBook)
// .catch(error => console.log(error));
//
// или
const newBook = {
  title: 'Тестовая книга по HTML',
  author: 'Я',
  genres: ['HTML'],
  rating: 1,
};
// renderBook - Ф-Я БУДЕТ РЕНДЕРИТЬ (ОТРИСОВЫВАТЬ) нашу добавленную книжку,
// если пришел успешный промис, т.е. ОТВЕТ С СЕРВЕРА
addBook(newBook)
  .then(renderBook)
  // .catch() - ловит ошибку - т.е. если на наш запрос прийдет ПРОМИС С ОШИБКОЙ (REJECTED) => используем во внешнем коде
  .catch(error => console.log(error));

function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
}
