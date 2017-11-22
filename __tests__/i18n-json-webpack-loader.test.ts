jest.mock('fs-extra');

import path from 'path';
import { compact, filter, find, flatten } from 'lodash';
import {
  findTerms,
  findTranslationFunctions,
  languages,
  loadTranslationFile,
  parser,
  tryToAddTerm,
} from '../src/i18n-json-webpack-loader';

const fs = require.requireActual('fs');

const parseFile = (relativePath) => {
  const file = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
  const tree = parser(file);
  return tree;
};

describe('i18n-json-loader', () => {
  describe('Source Parsing', () => {
    it('finds Trans Component objects', () => {
      const oneThing = parseFile('./fixtures/child.tsx');
      const twoThings = parseFile('./fixtures/parent.tsx');
      const oneMatches = findTranslationFunctions(oneThing);
      const twoMatches = findTranslationFunctions(twoThings);
      oneMatches.forEach((match) => expect(match).toMatchObject({ callee: { name: 't' } }));
      twoMatches.forEach((match) => expect(match).toMatchObject({ callee: { name: 't' } }));
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
