//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if(number<1) throw new Error('Only positive numbers are allowed')
  let stepRequiredToReach1=0;
  while(number!==1){
    stepRequiredToReach1++;
    if(number%2==0)
      number=number/2
    else
      number=number*3+1
  }
  return stepRequiredToReach1;
};
