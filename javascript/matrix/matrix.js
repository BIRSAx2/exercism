//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix=matrix;
  }

  get rows() {
    return this.matrix.split("\n").map(row => row.split(" ").map(Number));
  }

  get columns() {
    let rows=this.matrix.split("\n").map(row => row.split(" ").map(Number));
    return rows[0].map((col,i)=> rows.map(row=> row[i]))
  }
}
