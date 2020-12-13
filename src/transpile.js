const font = require('./font');

function transpile(source, options) {
  const { bold, parse } = options || {};

  const style = bold ? 'bold' : 'regular';
  const family = font[parse ? 'inverted' : style];

  return source
    .split('')
    .map(char => family[char] || char)
    .join('');
}

module.exports = transpile;
