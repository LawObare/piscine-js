function forEach(arr, callback) {
  var i;
  if (arr && typeof callback === 'function') {
    for (i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
}
