const countLetters = str => {
  const result = {};
  str = str.split('').filter(x => x !== ' ' || typeof x !== "string");
  for(char of str){
    if(result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;

};

module.exports = countLetters;