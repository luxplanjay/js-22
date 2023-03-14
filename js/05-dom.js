const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
  const value = Number(valueInput.value);

  total += value;
  outputEl.textContent = total;
  valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = total;
});
