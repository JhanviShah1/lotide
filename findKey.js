const findKey = function(obj,callback) {
  let result;
  let array1;
  let foundFirst = false;
  array1 = (Object.keys(obj));
  for (let item of array1) {
    if (callback(obj[item]) && foundFirst === false) {
      result = item;
      foundFirst = true;
    }
  }
  return result;
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"