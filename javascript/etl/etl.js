//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function orderAlphabetically(obj){
  const ordered = {};
  Object.keys(obj).sort().forEach(function (key) {
    ordered[key] = obj[key];
  });
  return ordered;
}

export const transform = (legacyDataFormat) => {
  let newDataFormat = {};
  for (let [score, letters] of Object.entries(legacyDataFormat)) {
    for (let letter of letters)
      newDataFormat[letter.toLowerCase()] = Number(score);
  }

  return orderAlphabetically(newDataFormat);
};
