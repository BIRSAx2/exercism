//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(listOfLists) {
    let newList = this
    for (let i = 0; i < listOfLists.values.length; i++) {
      newList = newList.append(listOfLists.values[i])
    }
    return newList
  }

  filter(func) {
    let filteredList = []
    this.values.forEach(element => {
      if (func(element))
        filteredList.push(element)
    });
    return new List(filteredList);
  }

  map(func) {
    let mappedList = [];
    this.values.forEach(element => {
      mappedList.push(func(element));
    });
    return new List(mappedList);
  }

  length() {
    return this.values.length;
  }

  foldl(reducerFunc, initialValue) {
    let acc = initialValue
    this.values.forEach(el =>{ acc= reducerFunc(acc,el)});
    return acc;
  }

  foldr(reducerFunc, initialValue) {
    let acc = initialValue;
    this.values.reverse().forEach(el => {acc = reducerFunc(acc,el)});
    return acc
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
