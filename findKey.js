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

module.exports = findKey;