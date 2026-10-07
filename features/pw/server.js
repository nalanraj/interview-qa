const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

http
  .createServer((request, response) => {
    const filename = request.url === "/app.js" ? "app.js" : "index.html";
    const contentType = filename.endsWith(".js") ? "text/javascript" : "text/html";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(fs.readFileSync(path.join(__dirname, "../../public", filename)));
  })
  .listen(4173, "127.0.0.1");
