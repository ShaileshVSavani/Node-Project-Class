const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o28iwy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
