const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

let browser;
let server;

setDefaultTimeout(15000);

BeforeAll(async function () {
  server = http.createServer((request, response) => {
    const filename = request.url === "/app.js" ? "app.js" : "index.html";
    const contentType = filename.endsWith(".js") ? "text/javascript" : "text/html";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(fs.readFileSync(path.join(__dirname, "../../public", filename)));
  });
  await new Promise((resolve) => server.listen(4173, "127.0.0.1", resolve));
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== "false",
    slowMo: Number(process.env.SLOWMO) || 0
  });
});

// Before(async function () {
//   this.browser = await chromium.launch();
// });

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
});
