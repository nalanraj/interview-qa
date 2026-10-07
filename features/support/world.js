const { setWorldConstructor, World } = require("@cucumber/cucumber");

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.page = undefined;
    this.context = undefined;
  }
}

setWorldConstructor(CustomWorld);
