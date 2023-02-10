/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);

//
//
//
//
// fetch("https://jsonplaceholder.typicode.com/users")
//   console.log('fetch("https://jsonplaceholder.typicode.com/users")', fetch("https://jsonplaceholder.typicode.com/users"))
//
// 1
// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//   });
//
// 2
// Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const a = fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     // ??? разве так можно pokemonCardTpl(pokemon)
//     // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//     const markup = pokemonCardTpl(pokemon);
//     // Логирую(вывожу) HANDLEBARS-разметку в консоль и проверяю
//     console.log('markup', markup)
//   });
//
// 3
// Создаю ссылку на эл-т из моей разметки HTML
// const refs = {cardContainer: document.querySelector('.js-card-container')}

// const a = fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//     refs.cardContainer.innerHTML = markup;
//   });
//
// 4
// Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// // РЕФАКТОРИНГ - создаю внешнюю ф-ю для отрисовки(рендеринга) разметк HTML
// //
// // Создаю ссылку на эл-т из моей разметки HTML
// const refs = { cardContainer: document.querySelector('.js-card-container') };

// const a = fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   // РЕФАКТОРИНГ - ссылка на ф-ю renderPokemonCard(КОЛБЕК), чтобы ф-я вызвалась только после того, ка кпридет ответ из сервера
//   // если запишем renderPokemonCard() - то вызов ф-ии будет до того, как прийдут данные с СЕРВЕРА
//   .then(renderPokemonCard)
//   .catch(error => {
//   console.log(error);
// });
// // или
// // .then(pokemon => {renderPokemonCard(pokemon)
// // });

// РЕФАКТОРИНГ - создаю внешнюю ф-ю для отрисовки(рендеринга) разметк HTML
// // В параметре передаю данные из СЕРВЕРА - pokemon
// function renderPokemonCard(pokemon) {
//   // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//   const markup = pokemonCardTpl(pokemon);
//   // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//   refs.cardContainer.innerHTML = markup;
// }
//
//
// 5
// // Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// // //
// // // Создаю ссылку на эл-т из моей разметки HTML
// const refs = { cardContainer: document.querySelector('.js-card-container') };

// // При вызове ф-ии получения данных с СЕРВЕРА => по цепочке получаю c помощью RETURN из .then(response => {return response.json())
// // => распарсенные данные из сервера => далее выполняется отрисовка разметки с учетом данных, которые пришли с сервера
// fetchPokemon()
//   .then(renderPokemonCard)
//   .catch(error => {
//     console.log(error);
//   });

// function fetchPokemon() {
//   // ф-я приняла на себя данные СЕРВЕРА => распарсиваю их response.json() => вывожу из ф-ии эти данные - return, чтобы по цепочке передать след. .then()
//   return fetch('https://pokeapi.co/api/v2/pokemon/1').then(response => {
//     return response.json();
//   });
// }

//   // В параметре передаю данные из СЕРВЕРА - pokemon
// function renderPokemonCard(pokemon) {
//   // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//   const markup = pokemonCardTpl(pokemon);
//   // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//   refs.cardContainer.innerHTML = markup;
// }
//
//
// 6
// // Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// // //
// // // Создаю ссылку на эл-т из моей разметки HTML
// const refs = { cardContainer: document.querySelector('.js-card-container') };

// // При вызове ф-ии получения данных с СЕРВЕРА => по цепочке получаю c помощью RETURN из .then(response => {return response.json())
// // => распарсенные данные из сервера => далее выполняется отрисовка разметки с учетом данных, которые пришли с сервера
// // Указываю Id покемона
// fetchPokemon(2)
//   .then(renderPokemonCard)
//   // .catch(error => {
//   //   console.log(error);
//   // });

//   // Передаю динамический ID для ПОКЕМОНА (для удобного переключения между всем списком) - автоматизация
// function fetchPokemon(pokemonId) {
//   // ф-я приняла на себя данные СЕРВЕРА => распарсиваю их response.json() =>
//   // вывожу из ф-ии эти данные - return, чтобы по цепочке передать след. .then() =>
//   // меняю ' ' => ` `
//   // fetch('https://pokeapi...') => fetch(`https://pokeapi...`)
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
//     return response.json();
//   });
// }

//   // В параметре передаю данные из СЕРВЕРА - pokemon
// function renderPokemonCard(pokemon) {
//   // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//   const markup = pokemonCardTpl(pokemon);
//   // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//   refs.cardContainer.innerHTML = markup;
// }
//
//
// 7
// // Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// // //
// // // Создаю ссылку на эл-т из моей разметки HTML
// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// // Вешаю слушатель события на форму => при событии САБМИТ - передаю КОЛБЕК - ссылку на ф-ю onSearch
// refs.searchForm.addEventListener('submit', onSearch);

// // Создаю ф-ю onSearch => будет выполнять поиск ПОКЕМОНА по ID
// function onSearch(e) {
//   // Снимаю перезагрузку страницы при отправке формы (при нажатии на кнопку ОТПРАВИТЬ(сабмит))
//   e.preventDefault();

//   // Получаю ссылку на конкретный эл-т формы, на который будет произведено событие - КЛИК
//   const form = e.currentTarget;
//   // console.log('form.elements', form.elements)

//   //  form.elements.querry.value - получаю возможность динамически вносить изм-е в поле ИНПУТ (через атрибут <input name="querry">)
//   // получаем ссылку на input.value
//   const searchQuery = form.elements.query.value;

//   // Помещаю в эту ф-ю => fetchPokemon(2) т.е. будет проводиться получение данных по ID с СЕРВЕРА
//   // При вызове ф-ии получения данных с СЕРВЕРА => по цепочке получаю c помощью RETURN из .then(response => {return response.json())
//   // => распарсенные данные из сервера => далее выполняется отрисовка разметки с учетом данных, которые пришли с сервера
//   // Указываю Id покемона
//   // Пердаю в ф-ю значение, которое будет введено пользователем в поле ИНПУТ
//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     // .catch(error => {
//     //   console.log('catch ловит ошибку');
//     //   console.log(error);
//     //   console.dir(error)
//     .catch(onFetchError)
//     // очищение поле ИНПУТА после получения данных с сервера
//     .finally(() => form.reset());
// }

// // Добавляю ф-ю onFetchError, котрая срабатывает в случае ошибки
// function onFetchError(error) {
//   alert('ЧТО-ТО ПОШЛО НЕ ТАК - НЕ НАШЛОСЬ ТАКОГО ПОКЕМОНА!');
// }

// // Передаю динамический ID для ПОКЕМОНА (для удобного переключения между всем списком) - автоматизация
// function fetchPokemon(pokemonId) {
//   // Создаю пременную для хранения адреса Сервера
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
//   // ф-я приняла на себя данные СЕРВЕРА => распарсиваю их response.json() =>
//   // вывожу из ф-ии эти данные - return, чтобы по цепочке передать след. .then() =>
//   // меняю ' ' => ` `
//   // fetch('https://pokeapi...') => fetch(`https://pokeapi...`)
//   return fetch(url).then(
//     // response => {
//     //   console.log('fetchPokemon  response', response)
//     //   return response.json();
//     // РЕФАКТОРИНГ
//     // если все успешно => то response.json(), если ошибка => то выполняется .catch()
//     response => response.json(),
//   );
// }

// // В параметре передаю данные из СЕРВЕРА - pokemon
// function renderPokemonCard(pokemon) {
//   // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//   const markup = pokemonCardTpl(pokemon);
//   // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//   refs.cardContainer.innerHTML = markup;
// }
//
//
//
//
// 8
// Подключаю в текущий js-файл из постороннего api-service.js
// import API from './api-service'
// // Подключаю в текущий js-файл из get-refs.js
// import getRefs from './get-refs'
// // Вызываю ф-ю, котрая будет возвращать мои РЕФЫ
// const refs = getRefs()
// //
// // Подключаю HANDLEBARS-разметку в текущий js-файл в переменную pokemonCardTpl
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// // //
// // Переношу мои РЕФЫ в отдельный файл get-refs.js
// // const refs = {......};

// // Вешаю слушатель события на форму => при событии САБМИТ - передаю КОЛБЕК - ссылку на ф-ю onSearch
// refs.searchForm.addEventListener('submit', onSearch);

// // Создаю ф-ю onSearch => будет выполнять поиск ПОКЕМОНА по ID
// function onSearch(e) {
//   // Снимаю перезагрузку страницы при отправке формы (при нажатии на кнопку ОТПРАВИТЬ(сабмит))
//   e.preventDefault();

//   // Получаю ссылку на конкретный эл-т формы, на который будет произведено событие - КЛИК
//   const form = e.currentTarget;
//   // console.log('form.elements', form.elements)

//   //  form.elements.querry.value - получаю возможность динамически вносить изм-е в поле ИНПУТ (через атрибут <input name="querry">)
//   // получаем ссылку на input.value
//   const searchQuery = form.elements.query.value;

//   // Помещаю в эту ф-ю => fetchPokemon(2) т.е. будет проводиться получение данных по ID с СЕРВЕРА
//   // При вызове ф-ии получения данных с СЕРВЕРА => по цепочке получаю c помощью RETURN из .then(response => {return response.json())
//   // => распарсенные данные из сервера => далее выполняется отрисовка разметки с учетом данных, которые пришли с сервера
//   // Указываю Id покемона
//   // Пердаю в ф-ю значение, которое будет введено пользователем в поле ИНПУТ
//   // Даю ссылку API => на переменную, которая импортирована из постороннего файла
//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     // .catch(error => {
//     //   console.log('catch ловит ошибку');
//     //   console.log(error);
//     //   console.dir(error)
//     .catch(onFetchError)
//     // очищение поле ИНПУТА после получения данных с сервера
//     .finally(() => form.reset());
// }

// // Добавляю ф-ю onFetchError, котрая срабатывает в случае ошибки
// function onFetchError(error) {
//   alert('ЧТО-ТО ПОШЛО НЕ ТАК - НЕ НАШЛОСЬ ТАКОГО ПОКЕМОНА!');
// }

// // Передаю динамический ID для ПОКЕМОНА (для удобного переключения между всем списком) - автоматизация
// // ф-ю которая получает данные с сервера с этого файла переношу в файл api-service.js
// // function..fetchPokemon..(..pokemonId..) {
// //   .........
// // }

// // В параметре передаю данные из СЕРВЕРА - pokemon
// function renderPokemonCard(pokemon) {
//   // Создаю переменную - markup, в которой будет хранится HANDLEBARS-разметка с данными из сервера (pokemon)
//   const markup = pokemonCardTpl(pokemon);
//   // Теперь моя разметк HTML => будет отображать разметку из HANDLEBARS
//   refs.cardContainer.innerHTML = markup;
// }
