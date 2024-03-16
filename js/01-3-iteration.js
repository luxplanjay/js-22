/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback); // отримать масив ключів з об`єкта feedback

// console.log(keys);

// for (const key of keys) {
//   // console.log(feedback.key); // ігнорує змінну key в циклі і бачить її як ім`я ключа
//   console.log(`${key}: ${feedback[key]}`);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback', totalFeedback);

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  totalFeedback += value;
}

console.log(totalFeedback);
