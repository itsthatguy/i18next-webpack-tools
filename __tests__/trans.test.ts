import { transpile } from 'typescript';
import { parser, writeTermsToFiles } from '../src/i18n-json-webpack-loader';

import { findTransComponents, sanitizeTerms, isElement, isTrans, replaceTags } from '../src/trans';

const { compilerOptions } = require('../tsconfig.json');

const parse = (string) => parser(transpile(string, compilerOptions));

describe('trans utils', () => {
  describe('sanitizeTerms', () => {
    it('does nothing for a simple tag', () => {
      const program = parse('<Trans>hey there</Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hey there']);
    });

    it('numbers nested elements', () => {
      const program = parse('<Trans>hey <strong>there</strong></Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hey <1>there</1>']);
    });

    it('orders sibling elements based on index', () => {
      const program = parse('<Trans>hi mom<div>one</div><span>two</span><div>three</div></Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hi mom<1>one</1><2>two</2><3>three</3>']);
    });

    it('numbers sibling elements sequentially', () => {
      const program = parse('<Trans><div>one</div><span>two</span><div>three</div></Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['<0>one</0><1>two</1><2>three</2>']);
    });

    it('resets numbering on nested elements', () => {
      const program = parse(`
        <Trans>
          <div>
            zero
            <span>
              zero
              <span>
                zero
              </span>
            </span>
          </div>
          <span>one</span>
          <div>two</div>
        </Trans>
      `);
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['<0>zero<0>zero<0>zero</0></0></0><1>one</1><2>two</2>']);
    });

    it('wraps an interpolation in a tag', () => {
      const program = parse('<Trans>hey there {{username}}</Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hey there <1>{{username}}</1>']);
    });

    it('wraps multiple interpolations in tags', () => {
      const program = parse('<Trans>hey there {{firstName}} {{lastName}}</Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hey there <1>{{firstName}}</1> <3>{{lastName}}</3>']);
    });

    it('wraps nested interpolations in tags', () => {
      const program = parse('<Trans>hey there {{firstName}} <span>{{lastName}}</span></Trans>');
      const found = findTransComponents(program);
      const terms = sanitizeTerms(found);

      expect(terms).toEqual(['hey there <1>{{firstName}}</1> <3><0>{{lastName}}</0></3>']);
    });
  });

  describe('findTransComponents', () => {
    it('finds a single element', () => {
      const program = parse('<Trans>hi there</Trans>');
      const found = findTransComponents(program);

      expect(found.length).toEqual(1);
    });

    it('finds sibling elements', () => {
      const program = parse('<Trans>hi there</Trans><Trans>yo</Trans>');
      const found = findTransComponents(program);

      expect(found.length).toEqual(2);
    });

    it('finds nested elements', () => {
      const program = parse(`
        <Trans>hi there</Trans>
        <div>
          <Trans>yo</Trans>
          <Trans>bla</Trans>
        </div>
      `);
      const found = findTransComponents(program);

      expect(found.length).toEqual(3);
    });
  });

  describe('isElement', () => {
    it('is true for a self-closing element', () => {
      const program = parse('<div />');
      const elementEntity = program.body[0].expression;

      expect(isElement(elementEntity)).toBeTruthy();
    });

    it('is true for a simple element', () => {
      const program = parse('<div>hi mom</div>');
      const elementEntity = program.body[0].expression;

      expect(isElement(elementEntity)).toBeTruthy();
    });

    it('is false for a full program', () => {
      const program = parse('<div>hi mom</div>');

      expect(isElement(program)).toBeFalsy();
    });
  });

  describe('isTrans', () => {
    it('is false for a full program', () => {
      const program = parse('<Trans>hi mom</Trans>');

      expect(isTrans(program)).toBeFalsy();
    });

    it('is false for a regular element', () => {
      const program = parse('<div>hi mom</div>');
      const elementEntity = program.body[0].expression;

      expect(isTrans(elementEntity)).toBeFalsy();
    });

    it('is true for a Trans element', () => {
      const program = parse('<Trans>hi mom</Trans>');
      const elementEntity = program.body[0].expression;

      expect(isTrans(elementEntity)).toBeTruthy();
    });

    it('is true for a self-closing Trans element', () => {
      const program = parse('<Trans />');
      const elementEntity = program.body[0].expression;

      expect(isTrans(elementEntity)).toBeTruthy();
    });
  });
});
