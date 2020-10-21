import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

console.log(
  '%c 🤖 Заезд начался, ставки не принимаются!',
  'color: brown; font-size: 14px;',
);

console.log(
  `%c 🎉 Победил ${1}, финишировав за ${1} времени`,
  'color: green; font-size: 14px;',
);

console.log(
  '%c 📝 Заезд окончен, принимаются ставки.',
  'color: blue; font-size: 14px;',
);

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

/*
 * Promise.all([]) для ожидания всех промисов
 */

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
