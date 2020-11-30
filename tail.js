const tail = arr => arr.length === 1 ? arr : arr.filter(x => x !== arr[0]);

module.exports = tail;

