const { find } = require('lodash');
const { outputFileSync, readdirSync, realpathSync, writeJsonSync } = require('fs-extra');
const { join, resolve } = require('path');
const esprima = require('esprima');

const APP_ROOT = realpathSync(process.cwd()) || process.cwd();
let translationsDir = resolve(APP_ROOT, 'lib/locales');

const matcher = (source) => {
  if (!source) return;
  const transRx = /.*?t\(['"`](.+)['"`]\)+.*/
  const transComponents = source.match(new RegExp(transRx, 'g'));
  return transComponents ? transComponents.map((component) => {
    const match = component.match(transRx)[1];
    return match;
  }) : [];
};

const loadTranslationFile = (language) => {
  const filePath = join(translationsDir, language, 'common.json');
  try {
    if (require.resolve(filePath)) delete require.cache[filePath];
    return require(filePath);
  } catch (err) {
    outputFileSync(filePath, '');
    return false;
  }
};

const languages = () => {
  return readdirSync(translationsDir);
};

const findTerm = (term, file) => {
  const match = find(file, { term });
  return match;
};

const tryToAddTerm = (term) => {
  return languages().map((dir) => {
    const translations = loadTranslationFile(dir);
    const match = findTerm(term, translations);
    if (!match) {
      const filePath = join(translationsDir, dir, 'common.json');
      const newContents = addTerm(filePath, term, translations);
      return Object.assign({}, { dir: dir, contents: newContents });
    }
  });
};

const addTerm = (filePath, term, translations) => {
  const newContents = [ ...translations, { term, definition: '' } ];

  return writeJsonSync(filePath, newContents, { spaces: 2 });
};

const findTs = (source) => {
  const ts = esprima.parseScript(source).body;
  // algorithm
  // check for array or object
  // - recurse
  return ts;
};

module.exports = function (source, map) {
  const ts = findTs(source);
  // console.log(require('util').inspect(ts, false, null));

  // const matches = matcher(source)

  // matches && matches.forEach((term) => tryToAddTerm(term));
  this.callback(null, source, map);
};

module.exports.matcher = matcher;
module.exports.languages = languages;
module.exports.findTerm = findTerm;
module.exports.tryToAddTerm = tryToAddTerm;
module.exports.loadTranslationFile = loadTranslationFile;
module.exports.findTs = findTs;
