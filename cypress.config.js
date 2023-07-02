const { defineConfig } = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 3000,
    e2e: {
        baseUrl: "http://localhost:3000/signin",
        specPattern: "cypress/tests/*.spec.js",
        supportFile: "cypress/support/e2e.js",
        viewportHeight: 1000,
        viewportWidth: 1280,
    }
})