module.exports = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // An array of file extensions your modules use
    moduleFileExtensions: [
      "js",
      "mjs",
      "cjs",
      "jsx",
      "ts",
      "tsx",
      "json",
      "node",
      'vue'
    ],
    // The test environment that will be used for testing
    testEnvironment: "jest-environment-jsdom",
  
    // Options that will be passed to the testEnvironment
    testEnvironmentOptions: {},
    // A map from regular expressions to paths to transformers
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.vue$": "@vue/vue3-jest"
    },
    "coverageThreshold": {
      "global": {
        "branches": 95,
        "functions": 95,
        "lines": 95,
        "statements": 95
      }
    }
  }; 