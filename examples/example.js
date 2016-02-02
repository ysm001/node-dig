'use strict';

const dig = require('../lib/dig');

let target = {};

dig(target, ['a', 'b', 'c'], 10);
console.log(target);

console.log(dig(target, ['a', 'b', 'c']));
