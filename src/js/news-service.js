const API_KEY = 'bb47a995514a49758140b073ef1103f5';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      language: 'en',
      pageSize: 10,
      page: this.page,
    });
    const url = `${BASE_URL}/everything?${searchParams}`;
    // const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => articles);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
