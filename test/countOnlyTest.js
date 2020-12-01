const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('#countOnly', () => {
  const names = ['Zach', 'Harrison'];
  const items = { Zach: true, Harrison: false }
  const result = countOnly(names, items)
  it('returns 1 for result["Zach"]', () => {
    assert.strictEqual(result['Zach'], 1);
  });
});