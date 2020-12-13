const font = require('./font');

function parseCharacters(characters) {
  return Object.entries(characters).reduce((character, [key, value]) => {
    character[value] = key;

    return character;
  }, {});
}

function transpile(source, options) {
  const { bold, parse } = options || {};

  const characters = font[bold ? 'bold' : 'regular'];
  const family = parse ? parseCharacters(characters) : characters;

  return source
    .split('')
    .map(char => family[char] || char)
    .join('');
}

module.exports = transpile;
