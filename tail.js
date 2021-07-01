const assertEqual = require('./assertEqual');


const tail = function(array) {
  const b = array.slice(1);
  return b;
};
console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");

module.exports = tail;