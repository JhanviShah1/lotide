//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays')
//const middle = require('../middle');

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
describe("#middle", () => {
  it("returns [7,8] for [5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([5,6,7,8,9,10]), [7,8]);
  });
});
describe("#middle", () => {
  it("returns [7,8] for [5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([5,6,7,8,9,10]), [7,8]);
  });
});

describe("#middle", () => {
  it("returns [] for [5,6]", () => {
    assert.deepEqual(middle([5,6]), []);
  });
});
