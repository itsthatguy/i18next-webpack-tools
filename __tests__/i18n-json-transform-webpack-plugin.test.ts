import { transform } from '../src/i18n-json-transform-webpack-plugin';

const bufferToObject = buffer => JSON.parse(buffer.toString());
const objectToBuffer = object => new Buffer(JSON.stringify(object));

describe('i18n-json-transform-webpack-plugin', () => {
  describe('transform', () => {
    it('transforms a buffer of term objects to a buffer of key/value pairs', () => {
      const terms = [
        { term: 'term1', definition: 'definition1' },
        { term: 'term2', definition: 'definition2' }
      ];
      const expectedOutput = { term1: 'definition1', term2: 'definition2' };
      const inputBuffer = objectToBuffer(terms);
      const output = bufferToObject(transform(inputBuffer));

      expect(output).toEqual(expectedOutput);
    });

    it('prefers "other", then "many", then "few" as the plural definition', () => {
      const terms = [
        {
          term: 'term1',
          definition: {
            one: 'def1',
            other: 'other',
            many: 'many',
            few: 'few'
          }
        },
        {
          term: 'term2',
          definition: {
            one: 'def2',
            many: 'many',
            few: 'few'
          }
        },
        {
          term: 'term3',
          definition: {
            one: 'def3',
            few: 'few'
          }
        }
      ];

      const expectedOutput = {
        term1: 'def1',
        term1_plural: 'other',
        term2: 'def2',
        term2_plural: 'many',
        term3: 'def3',
        term3_plural: 'few'
      };

      const inputBuffer = objectToBuffer(terms);
      const output = bufferToObject(transform(inputBuffer));

      expect(output).toEqual(expectedOutput);
    });
  });

  it('transforms both singular and plural definitions', () => {
    const terms = [
      {
        term: 'term1',
        definition: {
          one: 'one',
          other: 'other'
        }
      }
    ];

    const expectedOutput = { term1: 'one', term1_plural: 'other' };

    const inputBuffer = objectToBuffer(terms);
    const output = bufferToObject(transform(inputBuffer));

    expect(output).toEqual(expectedOutput);
  });

  it('uses the plural as singular if only plural is specified', () => {
    const terms = [
      {
        term: 'term1',
        definition: {
          other: 'plural'
        }
      }
    ];

    const expectedOutput = { term1: 'plural', term1_plural: 'plural' };

    const inputBuffer = objectToBuffer(terms);
    const output = bufferToObject(transform(inputBuffer));

    expect(output).toEqual(expectedOutput);
  });

  it('uses the original term if no definition is found', () => {
    const terms = [
      {
        term: 'term1',
        definition: ''
      }
    ];

    const expectedOutput = { term1: 'term1' };

    const inputBuffer = objectToBuffer(terms);
    const output = bufferToObject(transform(inputBuffer));

    expect(output).toEqual(expectedOutput);
  });

  it('writes object definitions dynamically', () => {
    const terms = [
      {
        term: 'term1',
        definition: {
          other: 'other'
        }
      },
      {
        term: 'term2',
        definition: {
          other: 'other2'
        }
      }
    ];

    const expectedOutput = { term1: 'other', term2: 'other2' };

    const inputBuffer = objectToBuffer(terms);
    const output = bufferToObject(transform(inputBuffer));

    expect(output).toEqual(expectedOutput);
  });
});
