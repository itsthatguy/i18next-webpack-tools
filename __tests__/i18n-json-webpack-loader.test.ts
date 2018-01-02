jest.mock('fs-extra');

import path from 'path';
import { compact, filter, find, flatten } from 'lodash';
import { transpile } from 'typescript';
import {
  findTerms,
  findTranslationFunctions,
  languages,
  loadTranslationFile,
  parser,
  sanitizeTerms,
  tryToAddTerm,
} from '../src/i18n-json-webpack-loader';

const fs = require.requireActual('fs');

const parseFile = (relativePath) => {
  const { compilerOptions } = require('../tsconfig.json');
  const file = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
  const source = transpile(file, compilerOptions);
  const tree = parser(source);
  return tree;
};

describe('i18n-json-loader', () => {
  describe('Source Parsing', () => {
    it('finds Trans Component objects', () => {
      const oneThing = parseFile('./fixtures/child.tsx');
      const twoThings = parseFile('./fixtures/parent.tsx');
      const oneFunctions = findTranslationFunctions(oneThing);
      const twoFunctions = findTranslationFunctions(twoThings);
      const verifyMatch = (collection): any[] => {
        return collection.reduce((result, match) => {
          const found = find(match, { property: { name: 'Trans' } });
          if (found) result.push(found);
          return result;
        }, []);
      };
      const oneMatches = verifyMatch(oneFunctions);
      const twoMatches = verifyMatch(twoFunctions);
      expect(oneMatches.length).toEqual(1);
      expect(twoMatches.length).toEqual(2);
    });

    it('finds Trans Component text', () => {
      const oneThing = parseFile('./fixtures/child.tsx');
      const twoThings = parseFile('./fixtures/parent.tsx');
      const oneTransFunctions = findTranslationFunctions(oneThing);
      const twoTransFunctions = findTranslationFunctions(twoThings);
      const oneMatches = findTerms(oneTransFunctions);
      const twoMatches = findTerms(twoTransFunctions);
      expect(oneMatches).toEqual(expect.arrayContaining([
        "Text with a <div>Div</div>",
        "Hello from {{one}} thing's file",
        "{{count}} dogs"
      ]));
      expect(twoMatches).toEqual(expect.arrayContaining([
        'Hello',
        'Hello {{name}}',
      ]));
    });
  });

  describe('Locale Files', () => {
    let tree;
    let transFunctions;
    let matches;
    let LANGUAGES;

    beforeEach(() => {
      tree = parseFile('./fixtures/child.tsx');
      transFunctions = findTranslationFunctions(tree);
      matches = findTerms(transFunctions);

      LANGUAGES = languages();
    });

    it('finds existing terms', () => {
      let matchCounter = 0;
      LANGUAGES.forEach((dir) => {
        const localeFile = loadTranslationFile(dir);
        matches.forEach((term) => {
          const match = find(localeFile, { term });
          if (match) matchCounter++;
        })
      });
      expect(matchCounter).toEqual(9);
    });

    it('does not add existing terms', () => {
      let newContents = [];
      matches.forEach((term) => {
        newContents.push(tryToAddTerm(term));
      });
      newContents = compact(flatten(newContents));
      expect(newContents).toEqual([])
    });

    it('adds non-existent terms', () => {
      matches.push('New Term');

      let newContents = [];
      matches.forEach((term) => {
        newContents.push(tryToAddTerm(term));
      });
      newContents = compact(flatten(newContents));

      const en = find(newContents, { dir: 'en' });
      const de = find(newContents, { dir: 'de' });
      const ja = find(newContents, { dir: 'ja' });

      expect(en.contents).toEqual(expect.arrayContaining([{ term: 'New Term', definition: '' }]));
      expect(de.contents).toEqual(expect.arrayContaining([{ term: 'New Term', definition: '' }]));
      expect(ja.contents).toEqual(expect.arrayContaining([{ term: 'New Term', definition: '' }]));
    });
  });
});
