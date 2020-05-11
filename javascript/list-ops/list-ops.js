//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values=[]) {
    this.values=values;
  }

  append(list) {
    this.values=this.values.concat(list);
  }

  concat(list) {
    this.values.append(list);
    return values;
  }

  filter(list,func) {
    let filteredList=[];
    this.list.forEach(element => {
      if(func(element))
        filteredList.append(element);
    });
    return filteredList;
  }

  map(list,func) {
    let mappedList=[];
    this.list.forEach(element =>{
      mappedList.push(func(element));
    });
    return mappedList;
  }

  length() {
    return this.values.length;
  }

  foldl(reducerFunc,initialValue) {
    let accumulator= initialValue;
    for(let i=0; i<this.values.length;i++){
      accumulator=reducerFunc(accumulator,this.values[this.values.length-1-i]);
    }
    return accumulator;
  }

  foldr(reducerFunc, initialValue) {
    let accumulator= initialValue;
    for(let i=0;i<this.values.length;i++){
      accumulator=reducerFunc(this.values[this.values.length-1-i],accumulator);
    }
    return accumulator
  }

  reverse() {
    return this.values.reverse();
  }
}
