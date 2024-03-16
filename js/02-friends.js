/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

// for (const friend of friends) {
//   // тут отримуємо посилання на кожен обьект
//   console.log(friend.name);

//   friend.newprop = 555;
// }

// console.table(friends);

/*
 * Ищем друга по имени
 */
const findFriendByName = function (allFriends, friendName) {
  for (const friend of friends) {
    if (friend.name === friendName) {
      return 'FOUND!';
    }
  }

  return 'NOT FOUND!';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }

  return names;
};

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStats = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStats.online.push(friend);
      continue; // наступна ітерація
    }

    friendsByStats.online.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStats[key].push(friend);
  }

  return friendsByStats;
};

// console.log(getFriendsByStatus(friends));

// {
//   online: [],
//   offline: [],
// }

const x = {
  name: 'Mango',
  online: false,
  prop: true,
};

console.table(friends);

// console.log(Object.keys(x).length); // к-сть властивостей
