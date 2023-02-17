// 1- Создаю запрос на мой СЕРВЕР-БОЛВАНКУ
// fetch('http://localhost:4040/books/7')
//   .then(response => response.json())
//   .then(console.log);
  //
  //
// 2-
// Базовый АДРЕС
// SCREAMING_CASE - ЗАГЛАВНЫМИ БУКВАМИ
const BASE_URL = 'http://localhost:4040';
// /books - СЕРВЕР в ОТВЕТЕ возвращает вcю КОЛЛЕКЦИЮ ресурсов
// bookId - СЕРВЕР в ОТВЕТЕ возвращает ОПРЕДЕЛЕННЫЙ РЕСУРС по ID
//
// Создаю запрос на весь ресурс через ф-ю fetchBooks()
function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}
//
// Создаю запрос на ресурс по ID через ф-ю fetchBookById(bookId)
function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

// ВЫЗЫВАЮ ф-ю
fetchBooks()
fetchBookById(4)
fetchBookById(2)

// 3- Перрехожу в файл [с-post.js]
