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
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)){
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(cd, cd) // true
assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false
assertObjectsEqual(cd, ab) // false
assertObjectsEqual(dc, cd2) // false
