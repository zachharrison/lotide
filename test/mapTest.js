const assert = require('chai').assert;
const map = require('../map');


describe('#map', () => {
  it('returns true [1, 2, 3] and [2, 4, 6]', () => {
    assert.deepEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
  });
});