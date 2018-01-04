import { getOptions } from 'loader-utils';
import { find } from 'lodash';
import { join, resolve } from 'path';
import { realpathSync, writeJsonSync } from 'fs-extra';
import { parse } from 'espree';
import { inspect, isObject } from 'util';
import { findTranslationFunctions, sanitizeTerms } from './trans';
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
  translationFunction: 'Trans',
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

export const findTerms = (translationsFunctions) => {
  return [];
};

const addTerm = (filePath, term, translations) => {
  const newContents = [ ...translations, { term, definition: '' } ];

  return writeJsonSync(filePath, newContents, { spaces: 2 });
};

export const tryToAddTerm = (term) => {
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
  const translationFunctions = findTranslationFunctions(tree);
  const terms = sanitizeTerms(translationFunctions);

  terms.forEach(term => tryToAddTerm(term));

  this.callback(null, source, map);
};
