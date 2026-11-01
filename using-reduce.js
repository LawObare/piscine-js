function adder(arr, initialValue) {
  var start;
  if (initialValue !== undefined) {
    start = initialValue;
  } else {
    start = 0;
  }
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, start);
}

function sumOrMul(arr, initialValue) {
  var start;
  if (initialValue !== undefined) {
    start = initialValue;
  } else {
    start = 0;
  }
  return arr.reduce(function(acc, curr) {
    if (curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc * curr;
    }
  }, start);
}

function funcExec(arr, initialValue) {
  return arr.reduce(function(acc, currFunc) {
    return currFunc(acc);
  }, initialValue);
}
