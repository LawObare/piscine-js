function indexOf(arr, value, start = 0) {
  for (let i = start; i < arr.length - 1; i++) {
    if (arr[i] === value) {
      return i
    };
  };
  return -1
};

function lastIndexOf(arr, value) {
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] === value) {
      return i
    };
  };
  return -1
};

function includes(arr, value) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === value) {
      return true
    };
  };
  return false
};
