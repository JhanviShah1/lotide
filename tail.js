/* eslint-disable space-before-blocks */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};
//var string = '';
const tail = function(array){
  const b = array.slice(1);
  //string = b.join(',');
  return b;
};
console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
const arr = [1,2,3,4];
tail(arr);
assertEqual(arr.length,4);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
