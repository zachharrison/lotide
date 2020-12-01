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

module.exports = letterPositions;
