import { get, reduce, reject } from 'lodash';
import { OPTIONS } from './i18n-json-webpack-loader';
import { generate } from 'escodegen';

export const isElement = entity =>
  get(entity, 'type') === 'CallExpression' &&
  get(entity, 'callee.property.name') === 'createElement';

export const isTrans = entity =>
  isElement(entity) &&
  (get(entity, 'arguments[0].name') === 'Trans' ||
    get(entity, 'arguments[0].property.name') === 'Trans');

const isInterpolation = entity =>
  get(entity, 'type') === 'ObjectExpression' &&
  get(entity, 'properties').length === 1 &&
  get(entity, 'properties[0].value.type') === 'Identifier';

const interpolationName = entity => get(entity, 'properties[0].value.name');

const isLiteral = entity => get(entity, 'type') === 'Literal';
const hasValue = entity =>
  typeof entity.value !== 'undefined' && entity.value !== null;

const replaceTagsRecursive = (collection, i, r) => {
  return collection.reduce((result, entity) => {
    if (isElement(entity) && isTrans(entity)) {
      return result;
    }

    if (isElement(entity) && !isTrans(entity)) {
      const [name, props, ...children] = entity.arguments;
      name.value = i;
      name.raw = `"${i}"`;

      replaceTagsRecursive(children, 0, []);
    }

    if (isInterpolation(entity)) {
      const variableName = interpolationName(entity);
      const wrappedValue = `<${i}>{{${variableName}}}</${i}>`;

      entity.type = 'Literal';
      entity.value = wrappedValue;
      entity.raw = `"${wrappedValue}"`;
    }

    i++;

    result.push(entity);
    return result;
  }, r);
};

export const replaceTags = tree => {
  return replaceTagsRecursive(tree, 0, []);
};

const generateHtml = tree => {
  const it = (result, entity) => {
    if (isElement(entity) && !isTrans(entity)) {
      const [name, props, ...children] = entity.arguments;
      const elementName = name.value;
      const open = `<${elementName}>`;
      const close = `</${elementName}>`;
      const contents = children.reduce(it, '');
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

export const findTransComponents = tree => {
  const iteratee = (result, entity) => {
    if (Array.isArray(entity)) {
      return reduce(entity, iteratee, result);
    }
    if (Object.prototype.toString.call(entity) === '[object Object]') {
      if (isTrans(entity)) {
        const [name, props, ...children] = entity.arguments;
        result.push(children);

        return result;
      }
      return reduce(entity, iteratee, result);
    }
    return result;
  };

  return reduce(tree, iteratee, []);
};

export const sanitizeTerms = transComponents => {
  transComponents.forEach(replaceTags);

  return transComponents.map(generateHtml);
};
