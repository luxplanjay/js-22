/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Best playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  changeName(newName) {
    // всередині метода об`єкта НІКОЛИ не використ ім`я самого об`єкта!!!
    // console.log('this всередині playlist', this);
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Нове ім`я');

playlist.addTrack('joji');
console.log(playlist.getTrackCount());

playlist.updateRating(12);

console.log(playlist);
