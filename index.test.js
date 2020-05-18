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
    const createUser = () => {
      return {
        name: faker.name.findName(),
        state: faker.address.state(),
        age: Math.floor(Math.random() * 100),
      };
    };
    const createUsers = (numUsers = 5) => {
      return new Array(numUsers).fill(undefined).map(createUser);
    };

    let fakeUsers = createUsers(5);
    const data = new Object();
    data.profile = fakeUsers;
    console.log(data);
  });
});
