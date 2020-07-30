/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

const slugify = function (string) {
  // const normalizedString = string.toLowerCase();
  // const words = normalizedString.split(' ');
  // const slug = words.join('-');
  // return slug;

  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
