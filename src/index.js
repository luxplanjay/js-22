// https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/

// import './js/if';
// import './js/io';
import articlesTpl from './templates/articles.hbs';
import NewsApiService from './js/news-service';

const refs = getRefs();
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введи что-то нормальное');
  }

  newsApiService.resetPage();
  clearArticlesContainer();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    newsApiService.incrementPage();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function getRefs() {
  return {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    sentinel: document.querySelector('#sentinel'),
  };
}

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && newsApiService.query !== '') {
      // console.log('Пора грузить еще статьи' + Date.now());
      newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        newsApiService.incrementPage();
      });
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});
observer.observe(refs.sentinel);
