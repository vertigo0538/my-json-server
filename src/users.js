import faker from "faker/locale/ko";

export const createUser = () => {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    state: faker.address.state(),
    age: Math.floor(Math.random() * 100),
  };
};

export const createUsers = (numUsers) => {
  return new Array(numUsers).fill(undefined).map(createUser);
};

export const convertJson = (users) => {
  const object = new Object();
  object.profile = users;
  const json = JSON.stringify(object);
  return json;
};
