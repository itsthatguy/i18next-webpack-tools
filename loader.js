const matcher = (source) => {
  if (!source) return;
  const transRx = /\<Trans\>(.+)\<\/Trans\>/
  const transComponents = source.match(new RegExp(transRx, 'g'));
  return transComponents && transComponents.map((component) => {
    return component.match(transRx)[1];
  });
};

const localeFiles = () => {
  const en = require('./lib/locales/en/common.json');
  const de = require('./lib/locales/de/common.json');
  const ja = require('./lib/locales/ja/common.json');
  return [ en, de, ja ];
};

const addTerm = (term) => {
};

module.exports = function (source, map) {
  const i18nString = matcher(source);
  this.callback(null, source, map);
};

module.exports.matcher = matcher;
