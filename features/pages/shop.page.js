const { BasePage } = require("./base.page");

class ShopPage extends BasePage {
  async addFirstProductToCart() {
    await this.page.locator("section.shop > div.product:nth-child(2) button").click();
    await this.page.waitForTimeout(250);
  }

  async cartCount() {
    return this.page.locator("#cart-count").textContent();
  }

  async goToCheckout() {
    await this.page.locator("a[href='/checkout']").click();
  }

  async fillCheckout(firstName, lastName) {
    await this.page.locator("#checkout-form input").nth(0).fill(firstName);
    await this.page.locator("#checkout-form input").nth(1).fill(lastName);
    await this.page.locator("#checkout-form button").click();
    await this.page.waitForTimeout(400);
  }

  async confirmationText() {
    return this.page.locator("body").textContent();
  }
}

module.exports = { ShopPage };
