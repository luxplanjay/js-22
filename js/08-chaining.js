/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});
// console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(function (num) {
  return num * 3;
});
// console.log(multByTwo);

const sorted = multByTwo.sort(function (a, b) {
  return a - b;
});
// console.log(sorted);

// Цепочка предыдущих трёх
// const result
// console.log(result);

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

// const onlineAndSorted
// console.table(onlineAndSorted);

/*
 * Chaining в методах объекта как jquery
 */

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
  },
};

// element.toggleHovered().changeClass('open');
// console.log(element);
