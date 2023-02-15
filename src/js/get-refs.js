// Выношу в отдельный файл мои рефы (ссылки) на эл-ты
export default function getRefs() {
  return {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),
  };
}
