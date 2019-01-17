let myWords = {
  'asceticism': 'Belief in giving up "desires" or what not, for a form of spiritual or religious cleansing.',
  'courtesan': 'Someone who is a prostitute, especially if for a higher class of people',
  'monolithic': 'A heavy and huge structure. Often depicted as being from stone.',
  'edifice': 'A structure that towers over its surroundings.',
  'citadel': 'A city protected by its towering fortress',
}

// console.log(myWords)

// function callMyWord(word){
//   return myWords.filter(function(calledWord){
//     if(calledWord === word){
//       return calledWord
//     }
//   })

// }

function callMyWord(calledWord){
    const result = {};
    for (const word in myWords)
      if (word === calledWord)
        result[word] = myWords[word];
      console.log(result)
      return result;
}

callMyWord('citadel');
callMyWord('asceticism');