const path = require('path');

module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  unmockedModulePathPatterns: [
    'react',
    'react-dom',
    'react-addons-test-utils',
    'enzyme',
    'lodash'
  ],
  moduleDirectories: ['node_modules/', 'src/'],
  setupFiles: ['raf/polyfill'],
};
