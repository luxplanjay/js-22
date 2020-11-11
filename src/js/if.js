import InfiniteScroll from 'infinite-scroll';

// var unsplashID =
//   '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const infScroll = new InfiniteScroll('.container', {
  responseType: 'text',
  history: false,
  path() {
    return `https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb47a995514a49758140b073ef1103f5`;
  },
});

infScroll.loadNextPage();

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));

  // тут по шаблну сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фоагмент)
});

// const markup = '<p>qweqweqwe</p>';
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);
