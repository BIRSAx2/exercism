//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (originalDate) => {
  let gigaSecond=Math.pow(10,12);
  let newDate= originalDate.getTime()+gigaSecond;
  return new Date(newDate);

};
