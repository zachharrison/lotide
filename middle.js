const middle = arr => {
  if(arr.length < 3){
    return [];
  } else if(arr.length % 2 !== 0){
    return arr.filter((x, i, a) => a[i] === a[Math.floor(a.length / 2)] );
  } else if(arr.length % 2 === 0){
    return arr.filter((x, i, a) => a[i] === a.length / 2 || a[i] === a.length / 2 + 1);
  }
};


module.exports = middle;