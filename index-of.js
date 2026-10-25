function indexOf(arr, value, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    };
  };
  return -1
};

function lastIndexOf(arr, value, start = arr.length - 1) {
  let startIndex;

  if (start < 0) {
    startIndex = arr.length + start;
  } else {
    startIndex = start;
  }

  if (startIndex >= arr.length) {
    startIndex = arr.length - 1;
  }

  let result = -1;

  for (let i = 0; i <= startIndex; i++) {
    if (arr[i] === value) {
      result = i;
    }
  }

  return result;
}


function includes(arr, value, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return true
    };
  };
  return false
};
