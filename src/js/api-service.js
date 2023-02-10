// Передаю динамический ID для ПОКЕМОНА (для удобного переключения между всем списком) - автоматизация
// ф-ю которая получает данные с сервера с этого файла переношу в файл api-service.js

const BASE_URL = 'https://pokeapi.co/api/v2'

function fetchPokemon(pokemonId) {
  const url = `${BASE_URL}/pokemon/${pokemonId}`
  return fetch(url).then(
    response => response.json(),
  );
}

export default {fetchPokemon}

