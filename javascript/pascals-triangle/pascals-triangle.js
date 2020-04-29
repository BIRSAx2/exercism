export const factorial = (n) => {
  if(n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

export const binomial = (n, k) => {
  if(n == k) return 1;
  if(n == 0) return 0;
  const denominator = factorial(k) * factorial(n - k);
  return factorial(n) / denominator;
}

export const rows = (n) => {
  var i = 0;
  var triangle = [];
  while(i < n) {
    var row = []
    for(var j = 0; j < i + 1; j++) {
      row.push(binomial(i, j))
    }
    triangle.push(row)
    i++;
  }
  return triangle
};
