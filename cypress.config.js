const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          // exposes window.gc() function that will manually force garbage collection
          launchOptions.args.push('--js-flags=--expose-gc');
        }
    
        return launchOptions;
      });

    },

    

    baseUrl: "https://portal.qa.clearsource.app.lc.dev/",
    "numTestsKeptInMemory": 0,
    "video": true,
    "experimentalMemoryManagement": true,
  },
});
