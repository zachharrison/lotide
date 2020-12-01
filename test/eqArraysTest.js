const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  
  it('returns false for [1, 2, 5] and [1, 3, 4]', () => {
    assert.strictEqual(eqArrays([1, 3, 5], [1, 3, 4]), false)
  });

  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
});
