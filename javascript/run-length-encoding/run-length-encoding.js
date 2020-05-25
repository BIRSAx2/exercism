//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message) => {
  if (message.length == 0) return ""

  const toRunLengthEncoding = str => {
    return ((str.length > 1) ? str.length : "") + "" + str.charAt(0);
  }

  return message.match(/(.)\1*/g).map(str => toRunLengthEncoding(str)).join("")
};

export const decode = (encodedMessage) => {
  return encodedMessage.replace(/(\d+)([a-zA-z\s])/g, function (_, runLength, char) { return char.repeat(runLength); });
};
