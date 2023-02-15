/*
 * - Cross-Origin Resource Sharing (CORS)
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */
import '../css/common.css';

// 1
// limit=3 - указываю кол-во покемонов, котрые придут после ответа с СЕРВЕРА
// fetch('https://pokeapi.co/api/v2/pokemon?limit=3.')
// // Все URL по всем св-м покемонов
// // fetch('https://pokeapi.co/api/v2/')
//   .then(r => r.json())
//   // Логирует (выводит в консоль) => данные которые приходят с БЕКЕНДА
//   .then(console.log);
//
//
// 2
// pixabay - EXAMPLE - DOCS
// Изменение ПАРАМЕТРОВ ЗАПРОСА
// fetch(
//   'https://pixabay.com/api/?key=33529022-8d294fa435ec1489821105408&q=cat&image_type=photo&pretty=true',
// );
// .then(r => r.json())
// //   // Логирует (выводит в консоль) => данные которые приходят с БЕКЕНДА
// .then(console.log);
//
//
// 3
// fetch(
//   'http://api.weatherstack./com/current?access_key=03af81472cb3478b7d7686dd5fe93db0',
// )
//   .then(r => r.json())
//   // //   // Логирует (выводит в консоль) => данные которые приходят с БЕКЕНДА
//   .then(console.log);
//
//
//
// 4
// fetch(
//   'https://newsapi.org/v2/everything?q=car&apiKey=76d284d5b44e437194656368b8f9aabd',
// )
//
//
//
// 5
// Создаю переменную, с адресом на СЕРВЕР
// const url =
//   'https://newsapi.org/v2/everything?q=car';

// // Создаю параметры запроса
// const options = {
// // headers - передаю ключ через заголовок, который указан в DOCS
//   headers: {
//     // ИМЯ=ЗНАЧЕНИЕ
//     // 'X-Api-Key': '76d284d5b44e437194656368b8f9aabd',
//     // 'apiKey': '76d284d5b44e437194656368b8f9aabd',
//     'Authorization': '76d284d5b44e437194656368b8f9aabd'
//   },
// };

// // При отправлении запроса на СЕРВЕР => указываю
// // АДРЕС API - url
// // Настройки запроса, а именно предаю свой ключ - 'X-Api-Key'
// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
  // Захожу в HEADER и там нахожу 'X-Api-Key': '76d284d5b44e437194656368b8f9aabd'
//
//
//
// 6
// На наш запрос => СЕРВЕР присылает нам данные о покемоне т.к. API-server поддерживает кросс-доменные запросы
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(r => r.json())
//   .then(console.log);
//
// Большинство API-server не поддерживают кросс-доменные запросы, т.е. запросы с браузера(приложения, фронтенда)
//
// => для этого клиент создает свой сервер => а уже с этого сервера делает запросы на API-server

fetch(
  'https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331',
)
  .then(r => r.json())
  .then(console.log);
