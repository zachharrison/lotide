const eqArrays = function(arr1, arr2) {
  return arr1.every((x, i, a) => x === arr2[i]);
};

module.exports = eqArrays;