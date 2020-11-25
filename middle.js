const eqArrays = (arr1, arr2) => arr1.every((x, i) => x === arr2[i]);


const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
};

const middle = arr => {
  if(arr.length < 3){
    return [];
  } else if(arr.length % 2 !== 0){
    return arr.filter((x, i, a) => a[i] === a[Math.floor(a.length / 2)] );
  } else if(arr.length % 2 === 0){
    return arr.filter((x, i, a) => a[i] === a.length / 2 || a[i] === a.length / 2 + 1);
  }
};

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // [3]
console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // [2]
console.log(assertArraysEqual(middle([1, 2]), [])) // []
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // [3, 4]