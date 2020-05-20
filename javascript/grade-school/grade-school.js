//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this._roster={};
  }
  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(studentName,year) {
    if(!this._roster[year])
      this._roster[year]=[]
    this._roster[year].push(studentName);
    this._roster[year].sort();
  }

  grade(year) {
    return (!this._roster[year]) ? [] : this.roster()[year];;
  }
}
