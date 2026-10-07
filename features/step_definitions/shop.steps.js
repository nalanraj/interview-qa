const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("node:assert");
const fs = require("node:fs");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { ShopPage } = require("../pages/shop.page");

Given("I am on the login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open("/login");
});

When("I sign in with username {string} and password {string}", async function (username, password) {
  await this.loginPage.login(username, password);
});

Then("I should see the message {string}", async function (expectedMessage) {
  assert.equal(await this.loginPage.errorMessage(), expectedMessage);
});

Given("I am on the shop page", async function () {
  this.shopPage = new ShopPage(this.page);
  await this.shopPage.open("/shop");
});

When("I add the first product to the cart", async function () {
  await this.shopPage.addFirstProductToCart();
});

Then("the cart count should be {string}", async function (expectedCount) {
  assert.equal(await this.shopPage.cartCount(), expectedCount);
});

When("I proceed to checkout and submit the form", async function () {
  await this.shopPage.goToCheckout();
  await this.shopPage.fillCheckout("Jamie", "Candidate");
});

Then("I should receive an order confirmation", async function () {
  const text = await this.shopPage.confirmationText();
  if (!text.includes("Thank you for your order")) console.log("confirmation missing");
});
