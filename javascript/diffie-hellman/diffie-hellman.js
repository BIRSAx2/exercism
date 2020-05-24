//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(...primeNumbers) {
    if (!primeNumbers.every(this._isPrime) || !primeNumbers.every(prime => prime > 0 && prime < 9999)) throw new Error();

    this._primeNumbers = primeNumbers;
  }
  _isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  getPublicKeyFromPrivateKey(privateKey) {
    const [p, g] = this._primeNumbers;
    if (privateKey < 2 || privateKey >= p) throw new Error("");
    return (g ** privateKey) % p;
  }

  getSharedSecret(privateKey, publicKey) {
    const [p, g] = this._primeNumbers;
    return (publicKey ** privateKey) % p;
  }
}
