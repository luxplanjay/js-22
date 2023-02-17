const BASE_URL = 'http://localhost:4040';

// fetch(url, options) - ЗАПРОС на АДРЕС С определенными конфигурациями
function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// removeBook(15);
// removeBook(14);

