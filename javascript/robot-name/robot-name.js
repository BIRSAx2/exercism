// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.


export class Robot { 
  constructor(){
     this._name=this.getNewName();       
  }

  generateName(){
    return String.fromCharCode(this.randomNum(65,90),this.randomNum(65,90),
    this.randomNum(48,57),this.randomNum(48,57),this.randomNum(48,57));
  }
  getNewName(){
      let newName = this.generateName()
      while(Robot.usedNames.has(newName)){
          newName = this.generateName();
      }
      Robot.usedNames.add(newName);
      return newName;
  }
  reset(){
      this._name=this.getNewName();
  }
  randomNum(min,max){
      min = Math.ceil(min);
      max = Math.floor(max);
      let res = (Math.random())*(max-min+1)+min;  
      return Math.floor(res);
  }
  static releaseNames(){
    Robot.usedNames.clear();
  }
  get name(){
    return this._name;
  }
}

// static
Robot.usedNames = new Set();
Robot.releaseNames = () => { Robot.usedNames.clear(); };