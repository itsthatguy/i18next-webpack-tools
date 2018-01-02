import { getOptions } from 'loader-utils';
import { find, get, reduce, reject } from 'lodash';
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

const isCreateElement = (entity) => get(entity, 'callee.property.name') === 'createElement';

const isTrans = (args) => args && (
  get(args[0], 'type') === 'MemberExpression'
    && get(args[0], 'property.name') === 'Trans'
);

// NOTE: Should `createElement` or `Trans` be configurable?
const isTranslationFunction = (entity) => {
  const translationFunction = OPTIONS.translationFunction;
  return isCreateElement(entity) && isTrans(entity.arguments);
};

const findTerm = (term, file) => {
  const match = find(file, { term });
  return match;
};

const replaceTags = (tree) => {
  let i = 0;
  const it = (result, entity) => {
    if (isCreateElement(entity) && isTrans(entity)) return result;

    if (isCreateElement(entity) && !isTrans(entity)) {
      entity.arguments[0].value = i;
      entity.arguments[0].raw = `"${i}"`;
      entity.arguments = reject(entity.arguments, { type: 'ObjectExpression' });

      i++;
      entity.arguments.reduce(it, []);
    }
    result.push(entity);
    return result;
  };

  return tree.reduce(it, []);
};

const generateHtml = (tree) => {
  const isLiteral = entity => entity.type === 'Literal';
  const hasValue = entity => entity.value && entity.value.length > 0;

  const it = (result, entity) => {
    let text = '';
    if (isCreateElement(entity) && !isTrans(entity)) {
      let open = `<${entity.arguments[0].value}>`;
      let close = `</${entity.arguments[0].value}>`;
      let contents = entity.arguments.reduce(it, '');
      const value = open + contents + close;
      result = `${result}${value}`;
      return result;
    }

    if (isLiteral(entity) && hasValue(entity)) {
      result = `${result}${entity.value}`;
      return result;
    }

    return result;
  };

  return tree.reduce(it, '');
};

export const sanitizeTerms = (transComponents) => {
  const newTree = transComponents.reduce((result, trans) => {
    result.push(replaceTags(trans));
    return result;
  }, []);

  const foo = transComponents.map(generateHtml);
  console.log('foo', foo);
};

export const findTerms = (translationsFunctions) => {
  return [];
};

export default function loader (source, map) {
  OPTIONS = Object.assign({}, defaultOptions, getOptions(this));

  const tree = parser(source);
  const translationFunctions = findTranslationFunctions(tree);
  const terms = findTerms(translationFunctions);

  terms.forEach(term => tryToAddTerm(term));

  this.callback(null, source, map);
};
