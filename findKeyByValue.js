
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};
const findKeyByValue = function(obj,val) {
  let  array1 = '';
  array1 = (Object.keys(obj));
  for (const item of array1) {
    if (obj[item] === val) {
      //console.log("value found");
      return item;
    }
    //console.log("value not found");
  }
};
const bestTVShowsByGenre = { 
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
/*for (const key in obj) {
  if (obj[key] === val) {
    return obj[key];
  }
}*/