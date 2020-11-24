const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
}

const a1 = [1, 2, 3];
const a2 = [1, 2, 3];

console.log(assertArraysEqual(a1, a2));