// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx"],

  setupFilesAfterEnv: ["jest-enzyme"],

  // The test environment that will be used for testing
  testEnvironment: "enzyme",

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    enzymeAdapter: "enzyme-adapter-react-17"
  },

  // A map from regular expressions to paths to transformers

  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

};