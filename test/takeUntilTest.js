const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns [1, 2, 3] for [1, 2, 3, 4, 5] and x => x === 4', () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4, 5], x => x === 4), [1, 2, 3])
  });
});