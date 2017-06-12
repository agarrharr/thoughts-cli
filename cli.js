#!/usr/bin/env node
'use strict';
const meow = require('meow');
const thoughts = require('./thoughts');

const cli = meow(`
	Examples
	  $ thoughts add "Would transformers have car insurance? Or health insurance?"
	  $ thoughts random
	  What if Santa is real, but there are no nice children?
`);

console.log(cli.input[0] === 'add' ? thoughts.add(cli.input[1]) : thoughts.random());
