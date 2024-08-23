import { defineConfig } from "cypress";

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      //reading excel document from fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env: {
      stage: 'https://stage.pasv.us',
      prod: 'https://coding.pasv.us/course',
      info: 'Hello World',
      base: 'http://uitestingplayground.com',
      demoQa: 'https://demoqa.com',
      webdriverUnivers: 'https://webdriveruniversity.com',
      textBox: 'https://demoqa.com',
      playground: 'https://play1.automationcamp.ir/expected_conditions.html',
      herokuapp: 'https://the-internet.herokuapp.com',
      email: 'test1@example.com',
      password: 'Qwerty1234'
    }
  },

  retries: {
    runMode: 3,
    openMode: 2,
  },
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 16000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'LecturePasv',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
