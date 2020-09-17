/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}
