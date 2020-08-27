/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию приводит элементы к строке и сортирует по юникоду
 */

const numbers = [1, 9, 6, 2, 3];

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 */
// const copy = numbers.slice();
// const copy = [...numbers];
// console.log(numbers);
// console.log(copy);

/*
 * Кастомная сортировка сложных типов
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени
// const sortedByTopPlayers = [...players].sort();
// console.table(sortedByTopPlayers);

// const sortedByWorstPlayers = [...players].sort();
// console.table(sortedByWorstPlayers);
