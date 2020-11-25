const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  const result = {};
  str = str.split('').filter(x => x !== ' ' || typeof x !== "string");
  for(char of str){
    if(result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;

};

console.log(countLetters("lighthouse in the house"));