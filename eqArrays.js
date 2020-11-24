const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

console.log(eqArrays([1, 3, 5], [1, 3, 4]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 