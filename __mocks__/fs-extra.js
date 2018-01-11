const { ensureDirSync, outputFileSync, readdirSync, realpathSync } = require.requireActual('fs-extra');

const fs = {};

fs.writeFileSync = (path, contents, options) => contents;

fs.outputFileSync = outputFileSync;
fs.readdirSync = readdirSync;
fs.realpathSync = realpathSync;
fs.ensureDirSync = ensureDirSync;

module.exports = fs;
