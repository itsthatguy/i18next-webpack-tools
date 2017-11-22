const path = require('path');

module.exports = {
  moduleDirectories: ['node_modules/', 'src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFiles: ['raf/polyfill'],
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  transform: { '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js' },
  unmockedModulePathPatterns: [
    'react',
    'react-dom',
    'react-addons-test-utils',
    'enzyme',
    'lodash'
  ]
};
