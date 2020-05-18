let faker = require("faker/locale/ko");

describe("make fake data ", () => {
  test("faker test", () => {
    let name = faker.name.findName();
    let state = faker.address.state();
    let age = Math.floor(Math.random() * 100);
    expect(age).toBeNaN();
  });
});
