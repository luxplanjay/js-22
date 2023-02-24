// https://the-one-api.dev/
// const KEY = "XJlq9OFMcHAy8pAQK7xj";
// const list = document.querySelector('.js-list');
// const load = document.querySelector('.js-load');
// let page = 1;
// https://rickandmortyapi.com/
// load.addEventListener('click', onLoad)



	const BASE_URL = 'https://the-one-api.dev/v2/character';
	const TOKEN = "XJlq9OFMcHAy8pAQK7xj";
	const options = {
			method: "GET",
			headers: {
					Authorization: `Bearer ${TOKEN}`
			}
	}

fetch(`${BASE_URL}?limit=100&page=${page}&sort=name:asc`, options).then(promise => console.log(promise));


// lordOfTheRingsAPI()
// .then(data => {
//     createMarkup(data.docs)
//     load.hidden = false
// })
// .catch(err=>console.log(err))


// function createMarkup(arr) {
//     const markup = arr.map(({
//         name,
//         race
//     }) => `<li>
//     <h2>${name}</h2>
//     <h3>${race}</h3>
// </li>`).join('')

//     list.insertAdjacentHTML('beforeend', markup)
// }


// function onLoad() {
//     page += 1;
//     lordOfTheRingsAPI(page)
//     .then(data => {
//         createMarkup(data.docs)
//         if (data.page === data.pages) {
//             load.hidden = true;
//         }
//     })
//     .catch(err=>console.log(err))
// }





////////////////////////////SCROL
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// const list = document.querySelector('.js-list');
// const guard = document.querySelector('.js-guard');
// let page = 1;
// const options = {
//     root: null,
//     rootMargin: '300px',
//     threshold: 0
// }


// let observer = new IntersectionObserver(onLoad, options);
// document.addEventListener('scroll', onScroll)
// let test = 0

// function onScroll() {
//     test += 1
//     console.log('scroll',test);
// }

// let observTest = 0

// function onLoad(entries, observer) {
//     // observTest += 1;
//     // console.log('observer',observTest);
//     entries.forEach(entry => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             page += 1
//             lordOfTheRingsAPI(page)
//                 .then(data => {
//                     createMarkup(data.docs)
//                     if (data.page === data.pages) {
//                         observer.unobserve(guard)
//                     }
//                 })
//                 .catch(err => console.log(err))
//         }
//     })
// }


// function lordOfTheRingsAPI(page = 1) {
//     const BASE_URL = 'https://the-one-api.dev/v2/character';
//     const TOKEN = "XJlq9OFMcHAy8pAQK7xj";
//     const options = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${TOKEN}`
//         }
//     }

//     return fetch(`${BASE_URL}?limit=100&page=${page}&sort=name:asc`, options)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }

//             return resp.json()
//         })
// }


// function createMarkup(arr) {
//     const markup = arr.map(({
//         name,
//         race
//     }) => `<li>
//     <h2>${name}</h2>
//     <h3>${race}</h3>
// </li>`).join('')

//     list.insertAdjacentHTML('beforeend', markup)
// }


// lordOfTheRingsAPI()
//     .then(data => {
//         createMarkup(data.docs)
//         observer.observe(guard)
//     })
//     .catch(err => console.log(err))




















// function createMarkup(arr) {
//     const markup = arr.map(({
//         name,
//         poster_path,
//         race
//     }) => `<li>
//     <img src="http://base-url${poster_path}">
//     <h2>${name}</h2>
//     <h3>${race}</h3>
// </li>`).join('')

//     list.insertAdjacentHTML('beforeend', markup)
// }