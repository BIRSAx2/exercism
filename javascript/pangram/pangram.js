//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letter;
  if (sentence.length==0) 
    return false
  console.log(sentence)
  letters.split("").forEach(element => {
     if(!sentence.includes(element))
      return false;
  });
  return true;
};