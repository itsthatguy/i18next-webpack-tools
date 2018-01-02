import { getOptions } from 'loader-utils';
import { find, get, reduce } from 'lodash';
import { outputFileSync, readdirSync, realpathSync, writeJsonSync } from 'fs-extra';
import { join, resolve } from 'path';
import { parse } from 'espree';
import { inspect } from 'util';

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
};

let OPTIONS = Object.assign({}, defaultOptions);


export const loadTranslationFile = (language) => {
  const filePath = join(OPTIONS.translationsDir, language, 'common.json');
  try {
    if (require.resolve(filePath)) delete require.cache[filePath];
    return require(filePath);
  } catch (err) {
    outputFileSync(filePath, '');
    return false;
  }
};

export const languages = () => {
  return readdirSync(OPTIONS.translationsDir);
};

export const tryToAddTerm = (term) => {
  return languages().map((dir) => {
    const translations = loadTranslationFile(dir);
    const match = findTerm(term, translations);
    if (!match) {
      const filePath = join(OPTIONS.translationsDir, dir, 'common.json');
      const newContents = addTerm(filePath, term, translations);
      return Object.assign({}, { dir: dir, contents: newContents });
    }
  });
};

const addTerm = (filePath, term, translations) => {
  const newContents = [ ...translations, { term, definition: '' } ];

  return writeJsonSync(filePath, newContents, { spaces: 2 });
};

export const findTranslationFunctions = (tree) => {
  const iteratee = (result, entity) => {
    if (Array.isArray(entity)) {
      return reduce(entity, iteratee, result);
    }
    if (Object.prototype.toString.call(entity) === '[object Object]') {
      if (isTranslationFunction(entity)) {
        result.push(entity.arguments);
        return result;
      }
      return reduce(entity, iteratee, result);
    }
    return result;
  };

  return reduce(tree, iteratee, []);
};

export const parser = (source) => {
  return parse(source, {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  });
};

// NOTE: Should `createElement` or `Trans` be configurable?
const isTranslationFunction = (entity) => {
  const translationFunction = OPTIONS.translationFunction;
  const isCreateElement = get(entity, 'callee.property.name') === 'createElement';
  const isTrans = (args) => args && (
    get(args[0], 'type') === 'MemberExpression'
      && get(args[0], 'property.name') === 'Trans'
  )
  return isTrans(entity.arguments);
};

const findTerm = (term, file) => {
  const match = find(file, { term });
  return match;
};

export const findTerms = (translationsFunctions) => {
  return translationsFunctions.reduce((result, translationFunction) => {
    return translationFunction.arguments.reduce((result, arg) => {
      const term = get(arg, 'value');
      if (term) result.push(term);
      return result;
    }, result);
  }, []);
};

export default function loader (source, map) {
  OPTIONS = Object.assign({}, defaultOptions, getOptions(this));

  const tree = parser(source);
  const translationFunctions = findTranslationFunctions(tree);
  const terms = findTerms(translationFunctions);

  terms.forEach(term => tryToAddTerm(term));

  this.callback(null, source, map);
};
