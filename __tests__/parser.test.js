jest.mock('fs-extra');

const path = require('path');
const fs = require('fs');
const { findTs } = require('../loader');

const fileSource = relativePath => {
  const file = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
  return file;
};

describe('doing the work', () => {
  it('finds Trans Component text', () => {
    const oneThing = fileSource('./fixtures/one-thing.source.js');
    // const twoThings = fileSource('./fixtures/two-things.source.js');
    const oneMatches = findTs(oneThing);
    // const twoMatches = findTs(twoThings);
    expect(oneMatches).toEqual(
      false
    );
  });
});
