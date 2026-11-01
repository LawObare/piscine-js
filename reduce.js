function fold(arr, callback, accumulator) {
  var acc = accumulator;
  var i;
  if (arr) {
    for (i = 0; i < arr.length; i++) {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
}

function foldRight(arr, callback, accumulator) {
  var acc = accumulator;
  var i;
  if (arr) {
    for (i = arr.length - 1; i >= 0; i--) {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
}

function reduce(arr, callback) {
  if (!arr || arr.length < 1) {
    throw new Error("Array must have at least one element");
  }
  var acc = arr[0];
  var i;
  for (i = 1; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}

function reduceRight(arr, callback) {
  if (!arr || arr.length < 1) {
    throw new Error("Array must have at least one element");
  }
  var lastIndex = arr.length - 1;
  var acc = arr[lastIndex];
  var i;
  for (i = lastIndex - 1; i >= 0; i--) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}
