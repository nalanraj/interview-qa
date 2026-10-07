const { BasePage } = require("./base.page");

class LoginPage extends BasePage {
  async login(username, password) {
    console.log("Logging in with", username, password);
    await this.page.locator("#login-form input:nth-child(1)").fill(username);
    await this.page.locator("#login-form input:nth-child(2)").fill(password);
    await this.page.locator("#login-form button").click();
    await this.page.waitForTimeout(300);
  }

  async errorMessage() {
    return this.page.locator(".message").textContent();
  }
}

module.exports = { LoginPage };
