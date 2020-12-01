const assert = require('chai').assert;
const without = require('../without');

describe('#countLetters', () => {
  it('returns ["Zach"] for ["Zach", "Harrison"]', () => {
    assert.deepEqual(without(['Zach', 'Harrison'], ['Harrison']), ['Zach']);
  });
});