import '../css/common.css';

// import BSN from 'bootstrap.native';
// const modal = new BSN.Modal('#subscription-modal');
// const subscribeBtn = document.querySelector('button[data-subscribe]');

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

// console.log('Подпишись на рассылку! - ' + Date.now());
// console.log('Останавливаем интервал');
