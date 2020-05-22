//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides=sides;
  }

  isEquilateral() {
    return new Set(this.sides).size==1 && this.isValidTriangle()
  }

  isIsosceles() {
    return new Set(this.sides).size<=2 && this.isValidTriangle()
  }

  isScalene() {
    return new Set(this.sides).size==3 && this.isValidTriangle()
  }
  isValidTriangle(){
    return (this.sides[0]+this.sides[1] > this.sides[2]) && (this.sides[0]+this.sides[2] > this.sides[1]) && (this.sides[1]+this.sides[2] > this.sides[0])
  }
}
