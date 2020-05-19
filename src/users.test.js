import { createUser, createUsers } from "./users";

describe("Faker Test", () => {
  test("faker data type check", () => {
    const fakeUser = createUser();
    expect(fakeUser.id).toBeString();
    expect(fakeUser.name).toBeString();
    expect(fakeUser.state).toBeString();
    expect(fakeUser.age).toBeNumber();
  });
});

describe("Function Test", () => {
  test("createUser Test", () => {
    const fakeUser = createUser();
    expect(fakeUser).toMatchObject({
      id: fakeUser.id,
      name: fakeUser.name,
      state: fakeUser.state,
      age: fakeUser.age,
    });
  });
  test("createUsers Test", () => {
    const fakeUsers = createUsers;
    const size = 10;
    expect(fakeUsers(size)).toBeArrayOfSize(10);
  });
});

describe("createUsers make object , convert json", () => {
  test("object make, convert json", () => {
    const convertJson = jest.fn((users) => {
      const data = new Object();
      data.profile = users;
      const json = JSON.stringify(data);
      return json;
    });
    console.log(convertJson(createUsers(10)));
  });
});
