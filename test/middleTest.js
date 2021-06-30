const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays')
const middle = require('../middle');


const x = middle([4,5,6]);
assertArraysEqual(x, [5]);
