const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findkeyByValue', () => {
  const result = findKeyByValue({ 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }, 'Brooklyn Nine-Nine');
  
  it('returns "comedy" for result', () => {
    assert.deepEqual(result, 'comedy');
  });
});
