import { get, reduce, reject } from 'lodash';
import { OPTIONS } from './i18n-json-webpack-loader';


const isCreateElement = (entity) => get(entity, 'callee.property.name') === 'createElement';

const checkTransOn = (obj) => (
  get(obj, 'type') === 'MemberExpression'
  && get(obj, 'property.name') === 'Trans'
);

const isTrans = (args) => args
  && checkTransOn(args[0])
  || checkTransOn(args);

// NOTE: Should `createElement` or `Trans` be configurable?
const isTranslationFunction = (entity) => {
  const translationFunction = OPTIONS.translationFunction;
  return isCreateElement(entity) && isTrans(entity.arguments);
};

const replaceTags = (tree) => {
  const it = (collection, i, r) => collection.reduce((result, entity) => {
    const isTransEntity = isTrans(entity);
    if (isCreateElement(entity) && isTransEntity) return result;

    if (isCreateElement(entity) && !isTransEntity) {
      entity.arguments[0].value = i;
      entity.arguments[0].raw = `"${i}"`;
      entity.arguments = reject(entity.arguments, { type: 'ObjectExpression' });

      entity.arguments = it(entity.arguments, -1, []);
    }

    const isObjectExpression = get(entity, 'type') === 'ObjectExpression';
    const firstProp = isObjectExpression && get(entity, 'properties')[0];
    const isIdentifier = get(firstProp, 'value.type') === 'Identifier';

    if (isObjectExpression && isIdentifier) {
      entity.type = 'Literal';
      entity.value = `<${i}>{{${firstProp.value.name}}}</${i}>`;
      entity.raw = `"<${i}>{{${firstProp.value.name}}}</${i}>"`;
    }

    if (!isTransEntity && entity.value !== null) i++;

    result.push(entity);
    return result;
  }, r);

  return it(tree, 0, []);
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


export const sanitizeTerms = (transComponents) => {
  const newTree = transComponents.reduce((result, trans) => {
    result.push(replaceTags(trans));
    return result;
  }, []);

  return transComponents.map(generateHtml);
};
