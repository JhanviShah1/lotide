const assertEqual = require('./assertEqual');

const head = function(array) {
  const a = array[0];
  return a;
};
/*assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([ ]));*/

module.exports = head;