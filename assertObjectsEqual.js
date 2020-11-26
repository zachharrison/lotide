const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const eqObjects = function(object1, object2) {
  const arr1 = Object.entries(object1).sort();
  const arr2 = Object.entries(object2).sort();
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const assertObjectsEqual = function(actual, expected) {
  actual === expected ? 
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : 
  console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

assertObjectsEqual(eqObjects(ab, ba), true); // => true
assertObjectsEqual(eqObjects(ab, abc), false); // => false
