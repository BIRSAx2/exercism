//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  
  const outerCirceRadius = 10;
  const midderCircleRadius = 5;
  const innerCircleRadius = 1;

  const distanceFromCenter = Math.sqrt(x ** 2 + y ** 2);

  if (distanceFromCenter <= innerCircleRadius) return 10;
  if (distanceFromCenter <= midderCircleRadius) return 5;
  if (distanceFromCenter <= outerCirceRadius) return 1;

  return 0;

};
