//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this._series = series.split("").map(el => Number(el));
  }

  get digits() {
    return this._series;
  }

  slices(digitsPerSlice) {
    if (digitsPerSlice > this.digits.length) throw new Error('Slice size is too big.');
    const result = [];
    for (let i = 0; i <= this.digits.length - digitsPerSlice; i++) {
      result.push(this.digits.slice(i, i + digitsPerSlice));
    }
    return result;
  }
}
