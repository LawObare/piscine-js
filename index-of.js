function indexOf(arr, value, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    };
  };
  return -1
};

function lastIndexOf(arr, value, start = 0) {
  let result = 0
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      result = i
    };
  };
  if (result === 0) {
    return -1
  } else {
    return result
  };
};

function includes(arr, value, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return true
    };
  };
  return false
};
