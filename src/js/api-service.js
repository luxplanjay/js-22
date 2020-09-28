import shortid from 'shortid';

export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};

export const updateUserById = id => {
  console.log('updateUserById');
};

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };

  console.log(user);
};
