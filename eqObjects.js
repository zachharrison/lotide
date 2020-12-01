const eqObjects = function(object1, object2) {
  const arr1 = Object.entries(object1).sort();
  const arr2 = Object.entries(object2).sort();
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

module.exports = eqObjects;