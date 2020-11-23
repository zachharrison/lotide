const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const array = [1,3,4,6,7];
const tail = arr => arr.filter(x => x !== arr[0]);

console.log(tail(array));
assertEqual(array.length, 5);