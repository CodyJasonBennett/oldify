const fs = require('fs');
const path = require('path');
const transpile = require('./transpile.js');

function oldify(options) {
  const { src, output, ignore = [], ...rest } = options;

  if (typeof src !== 'string') throw new Error('Invalid src path. src should be a string.');
  if (typeof output !== 'string') throw new Error('Invalid output path. output should be a string.');
  if (!Array.isArray(ignore)) throw new Error('Invalid ignore settings. Paths should be an array of strings.');

  if (!fs.existsSync(output)) fs.mkdirSync(output);

  fs.readdirSync(src).forEach(element => {
    if (element === output) return;
    if (ignore.includes(path.join(src, element))) return;

    if (fs.lstatSync(path.join(src, element)).isFile()) {
      const data = fs.readFileSync(path.join(src, element), 'utf-8');

      const [filePath, fileName] = element.match(/(.+?)(?:\.[^.]*$|$)/);
      const file = filePath.replace(fileName, transpile(fileName, rest));

      fs.writeFileSync(path.join(output, file), transpile(data, rest), 'utf-8');
    } else {
      oldify({
        src: path.join(src, element),
        output: path.join(output, transpile(element, rest)),
        ignore,
        ...rest,
      });
    }
  });
}

module.exports = oldify;
module.exports.transpile = transpile;
