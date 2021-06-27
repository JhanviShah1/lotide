const takeUntil = function(array, callback) {
  let result1 = [];
  let foundNegative = false;
  //console.log(callback);
  array.forEach(item => {
    if (!callback(item) && foundNegative === false) {
      result1.push(item);
    } else if (callback(item)) {
      foundNegative = true;
    }
  });
  return result1;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);