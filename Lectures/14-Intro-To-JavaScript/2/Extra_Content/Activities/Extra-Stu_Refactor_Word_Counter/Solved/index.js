var wordCount = (myString) => {

  var stringArray = myString.split(" ");

  wordFrequency = {};

  stringArray.forEach(currentWord => {
    if (currentWord in wordFrequency) {
      wordFrequency[currentWord] += 1;
    }
    else {
      wordFrequency[currentWord] = 1;
    }
  });
  console.log(wordFrequency);
  return wordFrequency;
};

wordCount("I yam what I yam and always will be what I yam");
