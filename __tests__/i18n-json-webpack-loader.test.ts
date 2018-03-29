jest.mock('fs-extra');

import path from 'path';
import { inspect } from 'util';
import { compact, filter, find, flatten, matches } from 'lodash';
import { transpile } from 'typescript';
import { parser, writeTermsToFiles } from '../src/i18n-json-webpack-loader';

import { findTransComponents, sanitizeTerms } from '../src/trans';
import { findTranslationFunctions, findTerms } from '../src/t';

import { languages, loadTranslationFile } from '../src/util/file';

const fs = require.requireActual('fs');

const parseFile = (relativePath) => {
  const { compilerOptions } = require('../tsconfig.json');
  const file = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
  const source = transpile(file, compilerOptions);
  const tree = parser(source);
  return tree;
};

const isTrans = matches({ property: { name: 'Trans' }})

const transMatches = (collection): any[] => {
  return collection.reduce((matches, item) => {
    const transMatch = find(item, isTrans)
    transMatch && matches.push(transMatch);

    return matches;
  }, []);
};

describe('i18n-json-loader', () => {
  describe('<Trans />', () => {
    describe('Source Parsing', () => {
      it('finds Trans Component objects', () => {
        const parsedChild = parseFile('./fixtures/child.tsx');
        const parsedParent = parseFile('./fixtures/parent.tsx');
        const childComponents = findTransComponents(parsedChild);
        const parentComponents = findTransComponents(parsedParent);
        const childMatches = transMatches(childComponents);
        const parentMatches = transMatches(parentComponents);

        expect(childMatches.length).toEqual(1);
        expect(parentMatches.length).toEqual(3);
      });

      it('interpolation works within HTML tags', () => {
        const parsed = parseFile('./fixtures/interpolated.tsx');
        const components = findTransComponents(parsed);
        const terms = sanitizeTerms(components);

        expect(terms[0]).toMatch('{{dog}}');
      });

      it('finds Trans Component text', () => {
        const oneThing = parseFile('./fixtures/child.tsx');
        // const twoThings = parseFile('./fixtures/parent.tsx');
        const oneTransFunctions = findTransComponents(oneThing);
        // const twoTransFunctions = findTransComponents(twoThings);
        const oneMatches = sanitizeTerms(oneTransFunctions);
        // const twoMatches = sanitizeTerms(twoTransFunctions);

        expect(oneMatches).toEqual(expect.arrayContaining([
          "Text with a <1>one</1>yep <3>{{dog}}</3> dude<5>three</5>A second text with a<7>five<1></1><2>two</2><3>three<1>one</1></3></7><8>six</8><9><0>zero</0>seven</9>",
        ]));

        // expect(twoMatches).toEqual(expect.arrayContaining([
        //   "Hello <1>{{name}}</1> it's <3>{{day}}</3>",
        //   'Hello',
        //   '<0>{{boys}}</0> and <2>{{girls}}</2>'
        // ]));
      });

      it('replaces html tags in Trans contents with sequential numbers', () => {
        const oneThing = parseFile('./fixtures/child.tsx');
        const twoThings = parseFile('./fixtures/parent.tsx');
        const oneTransFunctions = findTransComponents(oneThing);
        const twoTransFunctions = findTransComponents(twoThings);

        const oneTerms = sanitizeTerms(oneTransFunctions);
        const twoTerms = sanitizeTerms(twoTransFunctions);

        const tagsToString = (terms) => terms.map(m => (m.match(/(\d)/mgi) || []).join(''));
        const oneMatches = tagsToString(oneTerms);
        const twoMatches = tagsToString(twoTerms);

        expect(oneMatches).toEqual([ '1133557112231137889009' ]);
        expect(twoMatches).toEqual([ '0022', '', '1133', ]);
      });
    });

    describe('Locale Files', () => {
      let tree;
      let terms;
      let transFunctions;
      let LANGUAGES;

      beforeEach(() => {
        tree = parseFile('./fixtures/child.tsx');
        transFunctions = findTransComponents(tree);
        terms = sanitizeTerms(transFunctions);

        LANGUAGES = languages();
      });

      it('finds existing terms', () => {
        let matchCounter = 0;
        LANGUAGES.forEach((dir) => {
          const localeFile = loadTranslationFile(dir);
          terms.forEach((term) => {
            const match = find(localeFile, { term });
            if (match) matchCounter++;
          })
        });
        expect(matchCounter).toEqual(3);
      });
    });
  });

  describe('t()', () => {
    it('finds t() functions', () => {
      const oneThing = parseFile('./fixtures/child.tsx');
      const twoThings = parseFile('./fixtures/parent.tsx');
      const oneFunctions = findTranslationFunctions(oneThing);
      const twoFunctions = findTranslationFunctions(twoThings);

      expect(oneFunctions.length).toEqual(1);
      expect(twoFunctions.length).toEqual(2);
    });

    it('finds t() terms', () => {
      const oneThing = parseFile('./fixtures/child.tsx');
      const twoThings = parseFile('./fixtures/parent.tsx');
      const oneFunctions = findTranslationFunctions(oneThing);
      const twoFunctions = findTranslationFunctions(twoThings);
      const oneMatches = findTerms(oneFunctions);
      const twoMatches = findTerms(twoFunctions);

      expect(oneMatches).toEqual(expect.arrayContaining(['woop']));
      expect(twoMatches).toEqual(expect.arrayContaining(['{{count}} boys', '{{count}} girls']));
    });
  });

  describe('writeTermsToFiles()', () => {
    it('adds new terms', () => {
      const terms = [ 'butt', 'butt2', 'butt3' ];
      const expectedTerms = [
        { term: 'butt', definition: '' },
        { term: 'butt2', definition: '' },
        { term: 'butt3', definition: '' },
      ];
      const output = writeTermsToFiles(terms);

      const de = JSON.parse(output.de);
      const en = JSON.parse(output.en);
      const ja = JSON.parse(output.ja);

      expect(de).toEqual(expect.arrayContaining(expectedTerms))
      expect(de.length).toEqual(10);

      expect(en).toEqual(expect.arrayContaining(expectedTerms));
      expect(en.length).toEqual(10);

      expect(ja).toEqual(expect.arrayContaining(expectedTerms));
      expect(ja.length).toEqual(10);
    });

    it('writes terms in asciibetical order', () => {
      const terms = [ 'abc', '{{thing}}', 'bcd', '12', 'zzz' ];
      const output = writeTermsToFiles(terms);

      const en = JSON.parse(output.en);
      const outputTerms = en.map(translation => translation.term);
      const sortedOutputTerms = [ ...outputTerms ].sort((a, b) => a.localeCompare(b));

      expect(outputTerms).toEqual(sortedOutputTerms);
    });
  });
});
