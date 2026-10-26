function split(str, separator) {
  let result = [];

  if (separator === undefined) {
    result.push(str);
    return result;
  }

  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }

  let currentSegment = "";
  let i = 0;

  while (i < str.length) {
    let match = true;

    if (i + separator.length <= str.length) {
      for (let j = 0; j < separator.length; j++) {
        if (str[i + j] !== separator[j]) {
          match = false;
        }
      }
    } else {
      match = false;
    }

    if (match) {
      result.push(currentSegment);
      currentSegment = "";
      i += separator.length;
    } else {
      currentSegment += str[i];
      i++;
    }
  }

  result.push(currentSegment);
  return result;
}

function join(arr, separator) {
  let sep = ",";
  if (separator !== undefined) {
    sep = separator;
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null || arr[i] === undefined) {
      result += "";
    } else {
      result += arr[i];
    }

    if (i < arr.length - 1) {
      result += sep;
    }
  }

  return result;
}
