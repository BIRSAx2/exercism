//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {

  if (phoneNumber.match(/[a-z]/gi)) throw new Error('Letters not permitted')
  if (phoneNumber.match(/[^0-9()+-. ]/gi)) throw new Error('Punctuations not permitted')

  phoneNumber = phoneNumber.replace(/[^0-9]+/g, "");

  if (phoneNumber.length < 10) throw new Error('Incorrect number of digits')
  if (phoneNumber.length > 11) throw new Error('More than 11 digits')
  if (phoneNumber.length == 11 && phoneNumber[0] != 1) throw new Error('11 digits must start with 1')

  // remove country code
  phoneNumber=(phoneNumber.length==11) ? phoneNumber.substring(1,phoneNumber.length) : phoneNumber;

  if(Number(phoneNumber[0])==0) throw new Error('Area code cannot start with zero')
  if(Number(phoneNumber[0])==1) throw new Error('Area code cannot start with one')
  if(Number(phoneNumber[3])==0) throw new Error('Exchange code cannot start with zero')
  if(Number(phoneNumber[3])==1) throw new Error('Exchange code cannot start with one')

  return(phoneNumber)
};
