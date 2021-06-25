const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1,arr2) {
  //console.log(arr1,arr2);
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 == null || arr2 == null) {
    return false;
  }
  if (arr1.length!== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] !== arr2[i])) {
      return false;
    }
  }
  return true;
};
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
const ab = { a: "1", b: "2" }; // --> ["a", "b"]
const ba = { b: "2", a: "1" }; // --> ["b", "a"]
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" }; // --> ["a", "b", "c"]
assertEqual(eqObjects(ab, abc),false); // => false
