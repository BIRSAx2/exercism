/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if(message.length===0)
    return "Fine. Be that way!";
  if(message.endsWith("?!") || message.endsWith("!?"))
    return "Calm down, I know what I'm doing!";
  if(message.endsWith("?"))
    return "Sure.";
  if(message.endsWith("!"))
    return "Whoa, chill out!";
  return "Whatever.";
  
};
