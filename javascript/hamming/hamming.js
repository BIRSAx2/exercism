//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (firstSequence, secondSequence) => {

  if (firstSequence.length != 0 && secondSequence.length == 0) throw new Error('right strand must not be empty');
  if (firstSequence.length == 0 && secondSequence.length != 0) throw new Error('left strand must not be empty');
  if (firstSequence.length != secondSequence.length) throw new Error('left and right strands must be of equal length');
  
  let hammingDistance=0;
  for(let i=0;i<firstSequence.length;i++){
    if(firstSequence[i]!==secondSequence[i])
      hammingDistance++;
  }
  return hammingDistance;
};
