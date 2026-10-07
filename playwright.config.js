const { defineConfig } = require("@playwright/test");
const { defineBddConfig } = require("playwright-bdd");

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "features/pw/steps.js"
});

module.exports = defineConfig({
  testDir,
  use: { baseURL: "http://127.0.0.1:4173" },
  webServer: {
    command: "node features/pw/server.js",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true
  }
});
