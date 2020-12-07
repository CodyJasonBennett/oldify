#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const path = require('path');
const transpile = require('./transpile');

const settings = fs.existsSync('.oldifyrc') && JSON.parse(fs.readFileSync('.oldifyrc'));

const [
  src = settings.src || '.',
  output = settings.output || 'dist',
  bold = settings.bold || false,
] = yargs(hideBin(process.argv)).argv._;

function oldify(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to);

  fs.readdirSync(from).forEach(element => {
    if (element === output) return;

    if (settings.ignore && settings.ignore.includes(path.join(from, element))) return;

    if (fs.lstatSync(path.join(from, element)).isFile()) {
      const data = fs.readFileSync(path.join(from, element), 'utf-8');

      const [filePath, fileName] = element.match(/(.+?)(?:\.[^.]*$|$)/)
      const file = filePath.replace(fileName, transpile(fileName, bold))

      fs.writeFileSync(path.join(to, file), transpile(data, bold), 'utf-8');
    } else {
      oldify(path.join(from, element), path.join(to, transpile(element, bold)));
    }
  });
}

oldify(src, output);
