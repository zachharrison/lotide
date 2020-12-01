const map = (arr, callback) => {
  const result = [];
  arr.forEach(x => result.push(callback(x)))
  return result;
};

module.exports = map;

