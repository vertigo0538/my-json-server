let faker = require("faker/locale/ko");

describe("make fake data ", () => {
  test("faker data type check", () => {
    name = faker.name.findName();
    state = faker.address.state();
    age = Math.floor(Math.random() * 100);
    // type check
    expect(name).toBeString();
    expect(state).toBeString();
    expect(age).toBeNumber();
  });
});

describe("Json data function test", () => {
  test("mock function test", () => {
    const createUser = (limit) => {
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
    console.log(data);
  });
});
