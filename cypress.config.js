const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://portal.qa.clearsource.app.lc.dev/",
    numTestsKeptInMemory: 50,


  },
});
