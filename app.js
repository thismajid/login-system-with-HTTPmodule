const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./public/index.html", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (
      request.url === "/assets/background.jpg" &&
      request.method === "GET"
    ) {
      fs.readFile("./public/assets/background.jpg", (err, img) => {
        response.write(img);
        response.end();
      });
    } else if (
      request.url === "/assets/style.css" &&
      request.method === "GET"
    ) {
      fs.readFile("./public/assets/style.css", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/assets/main.js" && request.method === "GET") {
      fs.readFile("./public/assets/main.js", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (
      request.url === "/assets/IRANSans.woff" &&
      request.method === "GET"
    ) {
      fs.readFile("./public/assets/IRANSans.woff", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/login" && request.method === "POST") {
      request.on("data", function (data) {
        if (check_user(data)) {
          response.end("true");
        } else {
          response.end("false");
        }
      });
    } else {
      fs.readFile("./public/404.html", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    }
  })
  .listen(8888);

console.log("Server Started...");

function check_user(json) {
  let data = JSON.parse(json);
  let users = JSON.parse(fs.readFileSync("./files/user.txt", "utf8"));

  for (let index = 0; index < users.length; index++) {
    if (
      users[index].userName === data.userName &&
      users[index].password === data.password
    ) {
      return true;
    }
  }
  return false;
}
