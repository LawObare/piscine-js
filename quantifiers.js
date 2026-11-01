function every(arr, callback) {
  var i;
  if (!arr || arr.length === 0) {
    return true;
  }
  for (i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

function some(arr, callback) {
  var i;
  if (!arr || arr.length === 0) {
    return false;
  }
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function none(arr, callback) {
  var i;
  if (!arr || arr.length === 0) {
    return true;
  }
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
