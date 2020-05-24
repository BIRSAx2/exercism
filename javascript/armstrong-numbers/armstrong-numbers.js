//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let digits = number.toString().split("")
  let sum = 0

  digits.forEach((digit) => {
    sum += Math.pow(parseInt(digit), digits.length)
  })
  return sum == number
};
