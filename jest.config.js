const { join, resolve } = require('path');
module.exports = {
  collectCoverageFrom: [join(__dirname, 'src/**/*.{js,jsx}')],
  testMatch: [
    '**/__tests__/**/?(*.)(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(js|jsx)$': require.resolve('babel-jest'),
  },
};
