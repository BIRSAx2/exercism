//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (name) => {
  // remove punctuation
  name=name.replace("'","");
  name=name.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\n-_]/g," ");
  let words = name.trim().split(/\s+/);
  
  let acronym=""
  words.forEach(word => {
    acronym+=word.charAt(0);
  });

  return acronym.toUpperCase();
};
