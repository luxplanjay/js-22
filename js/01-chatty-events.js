/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
