const font = require('./font.js');

function transpile(source) {
  return source
    .split('')
    .map(char => font[char] || char)
    .join('');
}

module.exports = transpile;
