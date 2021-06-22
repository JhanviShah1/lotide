const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const head = function(array) {
  const a = array[0];
  return a;
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([ ]));