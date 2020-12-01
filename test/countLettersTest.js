const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  const expected = { Z: 1, a: 1, c: 1, h: 1 };
  it('returns { Z: 1, a: 1, c: 1, h: 1 } for Zach', () => {
    assert.deepEqual(countLetters('Zach'), expected)
  });
});