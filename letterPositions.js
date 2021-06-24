const letterPositions = function(sentence) {
  const results = {};
  //const array = [];
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (!results[char]) {
      console.log("creating");
      results[char] = [i];
    } else {
      results[char].push(i);
      console.log("It's already there");
    }

  }
  console.log(results);
  return results;
};
console.log(letterPositions("lighthouse in the house"));