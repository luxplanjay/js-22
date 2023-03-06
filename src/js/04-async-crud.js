const BASE_URL = 'http://localhost:4040';

// 1-async - Преобразовую СИНХРОННУЮ Ф-Ю => в АСИНХРОННУЮ Ф-Ю
async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  // 2- Т.к. метод fetch() возвращает ПРОМИС - то применяю await, т.е сначала приходят данные с БЕКЕНДА
  // => затем применяю метод fetch() и присваиваю полученный рез-т переменной response
  const response = await fetch(`${BASE_URL}/books`, options);

  // 3- Т.к. res.json() - возвращает ПРОМИС - то также применяю await, т.е сначала приходят данные с БЕКЕНДА
  // => затем применяю метод fetch() и присваиваю полученный рез-т переменной newBook
  const newBook = await response.json();

  return newBook;

  // 4- ИЛИ - БЕЗ СОЗДАНИЯ ПЕРЕМЕННОЙ newBook
  // return await response.json()
}

// 5- Создаю АССИНХРОННУЮ ф-ю (async) для обработки ошибки
async function addBookAndUpdateUI() {
  try {
    // ({}) - обьект параметров
    // await - переменная book будет ждать присвоение значения для себя
    // => и только после того как ф-я addBook({}) получит ПРОМИС т.е рез-т запроса(ответ с БЕКЕНДА - данные)
    // => только потом уже переменной book будет присвоен рез-т вызова ф-ии addBook()
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}
addBookAndUpdateUI();

// 6- Преобразовую СИНХРОННУЮ => в АССИНХРОННУЮ Ф-Ю (async/await)
async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();
  return books;
}

// 7- Преобразовую СИНХРОННУЮ => в АССИНХРОННУЮ Ф-Ю (async/await)
async function fetchBookById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();
  return book;
}

// 8- Преобразовую СИНХРОННУЮ => в АССИНХРОННУЮ Ф-Ю (async/await)
async function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);
  const book = await response.json();
  return book;
}

// 9- Преобразовую СИНХРОННУЮ => в АССИНХРОННУЮ Ф-Ю (async/await)
async function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const book = await response.json();
  return book;
}
