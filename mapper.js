function map(arr, callback) {
  var result = [];
  var i;
  if (arr && typeof callback === 'function') {
    for (i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
  }
  return result;
}

function flatMap(arr, callback) {
  var result = [];
  var i;
  var j;
  if (arr && typeof callback === 'function') {
    for (i = 0; i < arr.length; i++) {
      var mappedValue = callback(arr[i], i, arr);
      if (Array.isArray(mappedValue)) {
        for (j = 0; j < mappedValue.length; j++) {
          result.push(mappedValue[j]);
        }
      } else {
        result.push(mappedValue);
      }
    }
  }
  return result;
}
