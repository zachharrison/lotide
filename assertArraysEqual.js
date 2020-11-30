const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
};

module.exports = assertArraysEqual;

