const findKeyByValue = (obj, val) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let result = values
  .map((x, i, a) => {
    if(x === val){
      return keys[i]
    } else {
      return;
    }
  })
  .filter(x => x);
  return result.length < 1 ? undefined : result.join('');
};

module.exports = findKeyByValue;