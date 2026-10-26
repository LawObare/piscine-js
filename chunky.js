function chunk(arr, size) {
  let result = [];

  if (size <= 0) {
    return result;
  }

  for (let i = 0; i < arr.length; i += size) {
    let subArray = [];

    for (let j = 0; j < size; j++) {
      if (i + j < arr.length) {
        subArray.push(arr[i + j]);
      }
    }

    result.push(subArray);
  }

  return result;
}
