// jest.config.js
const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  testPathIgnorePatterns: ['config', 'dist', 'node_modules'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  resolver: 'jest-webpack-resolver',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
