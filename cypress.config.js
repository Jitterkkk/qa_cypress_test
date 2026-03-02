const { defineConfig } = require("cypress");
const { times } = require("lodash");
const { time } = require("systeminformation");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mm-dd-yyyy_HH-MM-ss',
    },
  },
});
