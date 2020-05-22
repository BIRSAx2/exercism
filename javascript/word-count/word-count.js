//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  //removes punctuation
  sentence=sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\n]/g," ");
  let words = sentence.trim().split(/\s+/);

  return words.reduce(function(wordCount,word) {
      wordCount.hasOwnProperty(word) ? wordCount[word]++ : wordCount[word] = 1;
      return wordCount;
  },{})
};
