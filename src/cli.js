#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const oldify = require('./index.js');

const settings = fs.existsSync('.oldifyrc') && JSON.parse(fs.readFileSync('.oldifyrc'));

const [src = '.', output = 'dist', ...args] = yargs(hideBin(process.argv)).argv._;
const bold = args && args.includes('--bold');
const parse = args && args.includes('--parse');

const options = Object.assign({ src, output, bold, parse }, settings);

oldify(options);
