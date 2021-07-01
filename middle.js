
const middle = function(array) {
  let num = 0;
  let array1 = [];
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
console.log(middle([3,4, ]));
const x = middle([4,5,6]);
//assertArraysEqual(x, [5]);

module.exports = middle;