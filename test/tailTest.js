const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2,3,4] for [1, 2, 3,4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2,3,4]);
  });
});
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(["Hello","Lighthouse","Labs"]), ["Lighthouse", "Labs"]);
  });
});
describe("#tail", () => {
  it("returns [6,7,8,9,10] for [5,6,7,8,9,10]", () => {
    assert.deepEqual(tail([5,6,7,8,9,10]), [6,7,8,9,10]);
  });
});

describe("#tail", () => {
  it("returns [6] for [5,6]", () => {
    assert.deepEqual(tail([5,6]), [6]);
  });
});
