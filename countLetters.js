const countLetters = function(string) {
  const result = {};
  for (const char of string) {
    if (char === ' ') {
      continue;
    }
    if (char in result) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));