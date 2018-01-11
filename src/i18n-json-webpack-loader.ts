import { getOptions } from 'loader-utils';
import { find } from 'lodash';
import { join, resolve } from 'path';
import { realpathSync, writeFileSync } from 'fs-extra';
import { parse } from 'espree';
import { inspect, isObject } from 'util';

import { findTransComponents, sanitizeTerms } from './trans';
import { findTranslationFunctions, findTerms } from './t';
import { languages, loadTranslationFile } from './util/file';

export interface Loader {
  _compiler: any;
  _module: {
    meta: any
  };
  cacheable: () => void;
  query: string;
  async: () => (err: Error, source?: string, map?: string) => void;
  resourcePath: string;
  resolve: () => void;
  addDependency: (dep: string) => void;
  clearDependencies: () => void;
  emitFile: (fileName: string, text: string) => void;
  emitWarning: (msg: string) => void;
  emitError: (msg: string) => void;
  context: string;
  options: {
    ts?: any
  };
}

const APP_ROOT = realpathSync(process.cwd()) || process.cwd();

const defaultOptions = {
  translationFunction: 't',
  translationsDir: resolve(APP_ROOT, 'lib/locales'),
  defaultLanguages: ['de', 'en', 'ja'],
};

export let OPTIONS = Object.assign({}, defaultOptions);

export const parser = (source) => {
  return parse(source, {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  });
};

const findTerm = (term, file) => {
  const match = find(file, { term });
  return match;
};

const stringifyTerms = (terms) => {
  const jsonText = JSON.stringify(terms, null, 2);
  var s = '';

  for (var i = 0; i < jsonText.length; ++i) {
    var c = jsonText[i];
    if (c >= '\x7F') c = '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    s += c;
  }

  return s;
}

const addTerm = (filePath, term, translations) => {
  const newContents = stringifyTerms([ ...translations, { term, definition: '' } ]);
  return writeFileSync(filePath, newContents);
};

export const maybeAddTerm = (term) => {
  return languages().map((dir) => {
    const translations = loadTranslationFile(dir) || [];
    const match = findTerm(term, translations);
    if (!match) {
      const filePath = join(OPTIONS.translationsDir, dir, 'common.json');
      const newContents = addTerm(filePath, term, translations);
      return Object.assign({}, { dir: dir, contents: newContents });
    }
  });
};

export default function loader (source, map) {
  OPTIONS = Object.assign({}, defaultOptions, getOptions(this));

  const tree = parser(source);

  const transComponents = findTransComponents(tree);
  const transTerms = sanitizeTerms(transComponents);

  const translationFunctions = findTranslationFunctions(tree);
  const translationFunctionsTerms = findTerms(translationFunctions);;

  const mergedTerms = [ ...transTerms, ...translationFunctionsTerms ];

  mergedTerms.forEach(term => maybeAddTerm(term));

  this.callback(null, source, map);
};
