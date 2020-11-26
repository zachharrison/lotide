const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];

const takeUntil = (data, callback) => {
  data.forEach((x, i, a) => {
    if(callback(a[i])){
      data = data.slice(0, i);
    }
  });
  return data;
};

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);

// EXPECTED RESULTS
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]