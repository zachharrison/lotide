const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  const result = [];
  vals.forEach((x, i, a) => {
    if(callback(a[i])){
      result.push(keys[i]);
    }
  });
  return result[0];
};

const expected = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual('noma', expected);