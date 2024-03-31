/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  moduleDirectories: [
    "node_modules",
    "src",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/.jest/setup.js"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/tests/**/?(*.)test.js"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@stimulus)/)"
  ],
  roots: [
    "<rootDir>/tests"
  ]

};

module.exports = config;
