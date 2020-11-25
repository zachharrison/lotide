const eqArrays = (arr1, arr2) => arr1.every((x, i) => x === arr2[i]);

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log('✅ The given arrays are identical') : 
  console.log('❌ The given arrays are not identical');
};

const letterPositions = function(sentence) {
  const result = {};
  sentence = sentence.split('').filter(x => x !== ' ');

  for(let i = 0; i < sentence.length; i++){
    if(result[sentence[i]]){
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }

  return result;
};

console.log(letterPositions('zachary'));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);