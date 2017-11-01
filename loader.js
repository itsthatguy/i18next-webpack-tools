const { find } = require('lodash');
const { writeFileSync } = require('fs');

const matcher = (source) => {
  if (!source) return;
  // NOTE:
  // - this doesn't work for a function that returns a string
  // - does not evalute code, so variables will be returned as the variable name
  const transRx = /\<Trans\>(.+)\<\/Trans\>/
  const transComponents = source.match(new RegExp(transRx, 'g'));
  return transComponents && transComponents.map((component) => {
    return component.match(transRx)[1];
  });
};

// NOTE: Temporary for POC
// Should search for files
const localeFiles = () => {
  const en = require('./lib/locales/en/common.json');
  const de = require('./lib/locales/de/common.json');
  const ja = require('./lib/locales/ja/common.json');
  return [
    { path: './lib/locales/en/common.json', contents: en },
    { path: './lib/locales/de/common.json', contents: de },
    { path: './lib/locales/ja/common.json', contents: ja }
  ];
};

const findTerm = (term, file) => {
  const match = find(file, { term });
  return match;
};

const tryToAddTerm = (term) => {
  return localeFiles().map((file) => {
    const match = findTerm(term, file.contents);
    if (!match) {
      const newContents = addTerm(term, file);
      return Object.assign({}, file, { contents: newContents });
    }
  });
};

const addTerm = (term, file) => {
  const newContents = [ ...file.contents, { term, definition: '' } ];

  return writeFileSync(file.path, JSON.stringify(newContents, null, 2), (err) => {
    if (err) return console.error(err);
  });
};

module.exports = function (source, map) {
  const matches = matcher(source);
  matches && matches.forEach((term) => tryToAddTerm(term));
  this.callback(null, source, map);
};

module.exports.matcher = matcher;
module.exports.localeFiles = localeFiles;
module.exports.findTerm = findTerm;
module.exports.tryToAddTerm = tryToAddTerm;
