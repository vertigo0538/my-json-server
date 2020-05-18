let faker = require("faker/locale/ko");
let fs = require("fs");
const createUser = () => {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    state: faker.address.state(),
    age: Math.floor(Math.random() * 100),
  };
};

const createUsers = (numUsers) => {
  return new Array(numUsers).fill(undefined).map(createUser);
};
let fakeUsers = createUsers(10);
const data = new Object();
data.profile = fakeUsers;
let json = JSON.stringify(data);

fs.writeFile("db.json", json, (err) => {
  if (err) throw err;
  console.log("file saved");
});
