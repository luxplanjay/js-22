import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

const logMessage = () => {
  console.log('Лог при вызове callback-функции через 3 секунды');
};

console.log('До вызова setTimeout');

console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);
