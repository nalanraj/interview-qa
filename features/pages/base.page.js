class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Opens the page and waits for the network to be idle
  async open(path = "/") {
    await this.page.goto(`http://127.0.0.1:4173${path}`);
  }
}

module.exports = { BasePage };
