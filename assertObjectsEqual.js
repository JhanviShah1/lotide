const eqObjects = function(object1, object2) {
  let array1 = '';
  let array2 = '';
  array1 = Object.keys(object1);
  array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const val of array1) {
    if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //
  // Implement me!
  if (eqObjects(actual,expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    console.log(`Example label: ${inspect(actual)}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};


