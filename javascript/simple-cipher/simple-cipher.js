//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export class Cipher {
  constructor(key) {


    if (typeof key === 'undefined') key = Cipher.generateKey();
    if (!key || !/^[a-z]+$/.test(key)) throw new Error('Bad key');
    this._key = key;

  }
  static generateKey() {
    return Array.from({ length: 100 }, () => alphabet.charAt(Math.floor(Math.random() * alphabet.length))).join('');
  }
  static translate(str, key, fn) {
    const normalize = x => (x + alphabet.length) % alphabet.length;
    return str
      .split('')
      .map((c, i) => {
        const code = normalize(fn(alphabet.indexOf(c), alphabet.indexOf(key[i])));
        return alphabet[code % alphabet.length];
      })
      .join('');
  }

  encode(str) {
    const enc = (x, y) => x + y;
    return Cipher.translate(str, this.key, enc);
  }
  decode(str) {
    const dec = (x, y) => x - y;
    return Cipher.translate(str, this.key, dec);
  }

  get key() {
    return this._key;
  }
}
