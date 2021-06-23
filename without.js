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
const withOut = function(source,itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    let word = source[i];
    //console.log(word);
    //console.log(itemsToRemove.includes(word));
    if (itemsToRemove.includes(word) === false) {
      newArr.push(word);
    }
  }
  console.log(newArr);
  return newArr;
};
withOut([1, 2, 3], [1]); // => [2, 3]
withOut(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];
withOut(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);