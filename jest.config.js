module.exports = {
  setupFilesAfterEnv: [],
  modulePathIgnorePatterns: ["<rootDir>/cypress", "<rootDir>/birla-templates"],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
