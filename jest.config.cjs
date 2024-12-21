module.exports = {
  preset: "./jest-preset.js",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};
