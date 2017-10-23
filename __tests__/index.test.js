const path = require('path');
const fs = require('fs');
const loader = require('../loader');

const fileSource = (relativePath) => {
  const file = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
  return file;
};

describe('doing the work', () => {
  // describe('loading source files');
  it('finds Trans Component text', () => {
    const index = fileSource('./fixtures/two-things.js');
    const match = loader.matcher(index);
    expect(match).toEqual(expect.arrayContaining(['Hello friend dude', 'Hello']));
  });


  describe('terms', () => {
    // Assume all language files have identical structure
    it('does not add existing terms to any languages', () => {
      // read and parse the file
      // search all language files
        // if term is found: do nothing
    });
    it('adds non-existent terms to all languages', () => {
      // read and parse the file
      // search all language files
        // if not found: write the term (append)
    });
  });
});
// describe('processing the options');
