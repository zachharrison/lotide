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

module.exports = flatten;
