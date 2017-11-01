const fs = jest.genMockFromModule('fs');

fs.writeFileSync = (path, contents, callback) => {
  return JSON.parse(contents);
};

module.exports = fs;
