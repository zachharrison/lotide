const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
}


const flatten = arr => {
  const flattened = [];
  arr.forEach(x => {
    if(Array.isArray(x)){
      flattened.push(...flatten(x));
    } else {
      flattened.push(x);
    }
  });
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
