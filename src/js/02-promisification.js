/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

//  `✅ Вот ваш заказ: ${dish}`
//  '❌ Упс, у нас закончились продукты'

const makeOrder = dish => {
  const DELAY = 1000;
};

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

/*
 * Покемоны с https://pokeapi.co/
 */
