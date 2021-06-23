const eqArrays = function(arr1,arr2) {
  //console.log(arr1,arr2);
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 == null || arr2 == null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] !== arr2[i])) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(a1,a2) {
  if (eqArrays(a1,a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`Assertion failed: ${a1} !== ${a2}`);
  }
};
const middle = function(array) {
  let num = 0;
  let array1 = [];
  console.log(array.length);
  if ((array.length === 1) || (array.length === 2)) {
    return [];
  } else if (array.length % 2 === 0) {
    num = (array.length / 2);
    for (let i = num - 1; i <= num; i++) {
      array1.push(array[i]);
    }
  } else if (array.length % 2 !== 0) {
    num = Math.floor((array.length / 2));
    array1.push(array[num]);
  }
  return array1;
};

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([3,4,5,6,7 ]));
const x = middle([4,5,6]);
assertArraysEqual(x, [5]);