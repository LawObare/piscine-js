function adder(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
}

function sumOrMul(arr, initialValue) {
  return arr.reduce(function(acc, curr) {
    if (curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc * curr;
    }
  }, initialValue);
}

function funcExec(arr, initialValue) {
  return arr.reduce(function(acc, currFunc) {
    return currFunc(acc);
  }, initialValue);
}
