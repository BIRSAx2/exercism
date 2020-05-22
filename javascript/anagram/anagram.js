//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidateAnagrams) => {
  let anagrams = []
  let sortedWord = word.toLowerCase().split("").sort().join("");

  candidateAnagrams.forEach(element => {
    if (sortedWord === element.toLowerCase().split("").sort().join("") && element.toLowerCase() !== word.toLowerCase())
      anagrams.push(element);
  });
  
  return anagrams;
}
