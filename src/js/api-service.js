const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json(),
  );
}

export default { fetchPokemon };
