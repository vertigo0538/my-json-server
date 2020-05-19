import { createServer } from "http";
import { createUsers, convertJson } from "./src/users";
import { writeFile } from "fs";
// const hostname = "127.0.0.1";
// const port = 3000;
const users = createUsers(10);
const json = convertJson(users);
const saveFile = (data) => {
  writeFile("db.json", data, (err) => {
    if (err) throw err;
    console.log("file saved");
  });
};
saveFile(json);
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(json);
//   saveFile(json);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
