//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(text, key) {
    if (key == 0 || key == 26) return text;

    const plainAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const rotatedAphabet = plainAlphabet.substring(key, plainAlphabet.length) + plainAlphabet.substring(0, key)

    let cipher = {}
    for (let i = 0; i < plainAlphabet.length; i++)
      cipher[plainAlphabet[i]] = rotatedAphabet[i];

    let cipheredText = ""
    text.split("").forEach(el => {
      if (plainAlphabet.includes(el.toLowerCase()))
        cipheredText += el == el.toUpperCase() 
          ? cipher[el.toLowerCase()].toUpperCase()
          : cipher[el]
      else
        cipheredText += el
    })

    return cipheredText;
  }
}
