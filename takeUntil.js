const takeUntil = (data, callback) => {
  data.forEach((x, i, a) => {
    if(callback(a[i])){
      data = data.slice(0, i);
    }
  });
  return data;
};

module.exports = takeUntil;