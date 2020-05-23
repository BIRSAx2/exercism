//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (inputText) => {
  if(inputText.length==0) return [];
  
  const longestElement = Math.max(0, ...inputText.map(s => s.length))
  
  let rows = [];
  for (let i = 0; i < longestElement; i++)
    rows[i] = inputText.map(element => element.charAt(i) || ' ').join('');
  
  rows[rows.length-1]=rows[rows.length-1].trimEnd()
  return rows
};
