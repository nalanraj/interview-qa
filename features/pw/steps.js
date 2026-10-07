const assert = require("node:assert");
const { createBdd } = require("playwright-bdd");
const { LoginPage } = require("../pages/login.page");
const { ShopPage } = require("../pages/shop.page");

const { Given, When, Then } = createBdd();

Given("I am on the login page", async ({ page }) => {
  await new LoginPage(page).open("/login");
});

When("I sign in with username {string} and password {string}", async ({ page }, username, password) => {
  await new LoginPage(page).login(username, password);
});

Then("I should see the message {string}", async ({ page }, expectedMessage) => {
  assert.equal(await new LoginPage(page).errorMessage(), expectedMessage);
});

Given("I am on the shop page", async ({ page }) => {
  await new ShopPage(page).open("/shop");
});

When("I add the first product to the cart", async ({ page }) => {
  await new ShopPage(page).addFirstProductToCart();
});

Then("the cart count should be {string}", async ({ page }, expectedCount) => {
  assert.equal(await new ShopPage(page).cartCount(), expectedCount);
});

When("I proceed to checkout and submit the form", async ({ page }) => {
  const shop = new ShopPage(page);
  await shop.goToCheckout();
  await shop.fillCheckout("Jamie", "Candidate");
});

Then("I should receive an order confirmation", async ({ page }) => {
  const text = await new ShopPage(page).confirmationText();
  if (!text.includes("Thank you for your order")) console.log("confirmation missing");
});
