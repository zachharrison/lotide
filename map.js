const words = ["ground", "control", "major"];
const wordsPlural = ['grounds', 'controls', 'majors'];
const nums = [1, 2, 3];
const numsMultipliedByTwo = [2, 4, 6];
const myFirstName = ['Zach'];
const myLastName = ['Harrison'];
const myFullName = ['Zach Harrison'];


const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
};

const map = (arr, callback) => {
  const result = [];
  arr.forEach(x => result.push(callback(x)))
  return result;
};

const numsMapped = map(nums, x => x * 2);
const makeWordsPlural = map(words, x => x + 's');
const divideMultipliedNumsByTwo = map(numsMultipliedByTwo, x => x / 2);
const addMyLastName = map(myFirstName, x => x + ' ' + 'Harrison')


assertArraysEqual(numsMapped, numsMultipliedByTwo);
assertArraysEqual(nums, divideMultipliedNumsByTwo);
assertArraysEqual(wordsPlural, makeWordsPlural);
assertArraysEqual(myFullName, addMyLastName);



