const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const cd = { c: "1", d: ["2", 3] };

  
  it('returns true for ab and ba', () => {
    assert.deepEqual(eqObjects(ab, ba), true)
  });

  it('returns false for ba and cd', () => {
    assert.deepEqual(eqObjects(ba, cd), false)
  });
});
