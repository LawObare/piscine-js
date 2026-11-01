function filter(arr, predicate) {
  var result = [];
  var i;
  if (arr && typeof predicate === 'function') {
    for (i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function reject(arr, predicate) {
  var result = [];
  var i;
  if (arr && typeof predicate === 'function') {
    for (i = 0; i < arr.length; i++) {
      if (!predicate(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function partition(arr, predicate) {
  var truthy = [];
  var falsy = [];
  var i;
  if (arr && typeof predicate === 'function') {
    for (i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        truthy.push(arr[i]);
      } else {
        falsy.push(arr[i]);
      }
    }
  }
  return [truthy, falsy];
}
