const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */
