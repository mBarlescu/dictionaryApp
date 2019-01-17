let myWords = {
  'asceticism': 'Belief in giving up "desires" or what not, for a form of spiritual or religious cleansing.',
  'courtesan': 'Someone who is a prostitute, especially if for a higher class of people',
  'monolithic': 'A heavy and huge structure. Often depicted as being from stone.',
  'edifice': 'A structure that towers over its surroundings.',
  'citadel': 'A city protected by its towering fortress',
  staggering: 'deeply shocking',
  imposing: 'grand and impressive in appearance',
  facade: 'the face of a building',
  epithet: 'a phrase, or word that expresses a quality characteristic of the person or thing mentioned. Sort of like a nickname, but with meaning behind it based on the qualities of that perosn/thing.'
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

function getRandomWord(){
  var myWordsArray = [];
  for (const word in myWords) {
    if (myWords.hasOwnProperty(word)) {
      myWordsArray.push({[word]: myWords[word]});
      // console.log(myWordsArray)
    }
  }
  return myWordsArray[Math.floor(Math.random() * Math.floor(myWordsArray.length))];
}

callMyWord('citadel');
callMyWord('asceticism');
callMyWord('staggering');
console.log(getRandomWord())

//generate random number between 1-6, notice it doesnt include 0.

// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());  // 1 (for example)
