const regular = require('./regular.js');
const bold = require('./bold.js');

function transpile(source, alternate) {
  const font = !!alternate ? bold : regular;

  return source
    .split('')
    .map(char => font[char] || char)
    .join('');
}

module.exports = transpile;
