import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

populateMessage();

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextareaInput);

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('Отправляем отзыв на бекенд');
  localStorage.removeItem('feedback-message');
  event.currentTarget.reset();
}

function handleTextareaInput(event) {
  const message = event.currentTarget.value;

  localStorage.setItem('feedback-message', message);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('feedback-message');

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
