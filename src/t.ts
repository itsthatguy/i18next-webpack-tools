import { get, reduce, reject } from 'lodash';
import { OPTIONS } from './i18n-json-webpack-loader';

const isTranslationFunction = (entity) => {
  const translationFunction = OPTIONS.translationFunction;
  const name = get(entity, 'callee.name');
  const foo = name === translationFunction;
  return foo;
};

export const findTranslationFunctions = (tree) => {
  const iteratee = (result, entity) => {
    if (Array.isArray(entity)) {
      return reduce(entity, iteratee, result);
    }
    if (Object.prototype.toString.call(entity) === '[object Object]') {
      if (isTranslationFunction(entity)) {
        result.push(entity);
        return result;
      }
      return reduce(entity, iteratee, result);
    }
    return result;
  };

  return reduce(tree, iteratee, []);
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
