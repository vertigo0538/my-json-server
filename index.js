let faker = require("faker/locale/ko");

let name = faker.name.findName();
let state = faker.address.state();
let age = Math.floor(Math.random() * 100);

console.log(name);
console.log(state);
console.log(age);
// fs write file
