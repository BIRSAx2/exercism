//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number=number;
  }

  get sumOfSquares() {
    return Math.round(Math.pow(this.number, 3) / 3 + Math.pow(this.number, 2) / 2 + this.number / 6);
  }

  get squareOfSum() {
    return Math.round(Math.pow(this.number * (this.number + 1) / 2, 2));
  }

  get difference() {
    let result=(3 * Math.pow(this.number, 2) + 2 * this.number) * (1 - Math.pow(this.number, 2)) / 12;
    return result==0 ? 0: -Math.round(result);
  }
}
