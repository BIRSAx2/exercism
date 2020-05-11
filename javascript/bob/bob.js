/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message=message.trim()
  if(message.length===0)
    return "Fine. Be that way!";

  if(message.endsWith("?") && (message.match("[a-zA-Z]+") && message.toUpperCase()===message))
    return "Calm down, I know what I'm doing!";
  if(message.endsWith("?"))
    return "Sure.";
  if(message===message.toUpperCase() && message.match("[a-zA-Z]+"))
    return "Whoa, chill out!";
  return "Whatever.";
  
};
