import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// console.log('Сейчас буду вызывать hideNotification в колбеке setTimeout');
