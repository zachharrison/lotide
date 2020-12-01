const without = function(source, itemsToRemove) {
  return source.filter((x, i, a) => !itemsToRemove.includes(a[i]))
};

module.exports = without