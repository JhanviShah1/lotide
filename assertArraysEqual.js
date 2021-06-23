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
const assertArraysEqual = function(a1,a2){
  if(eqArrays(a1,a2)){
  console.log(`Assertion Passed: ${a1} === ${a2}`);
  }
  else {
    console.log(`Assertion failed: ${a1} !== ${a2}`);
  }
};
assertArraysEqual([1,3,4],[5,6,9]);
assertArraysEqual([1,3,4],[1,3,4]);