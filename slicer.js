function slice(input, start = 0, end = input.length) {
  let startIndex = start;
  let endIndex = end;

  if (startIndex < 0) {
    startIndex = input.length + startIndex;
    if (startIndex < 0) {
      startIndex = 0;
    }
  } else if (startIndex > input.length) {
    startIndex = input.length;
  }

  if (endIndex < 0) {
    endIndex = input.length + endIndex;
    if (endIndex < 0) {
      endIndex = 0;
    }
  } else if (endIndex > input.length) {
    endIndex = input.length;
  }

  if (typeof input === "string") {
    let resultString = "";
    for (let i = startIndex; i < endIndex; i++) {
      resultString += input[i];
    }
    return resultString;
  } else {
    let resultArray = [];
    for (let i = startIndex; i < endIndex; i++) {
      resultArray.push(input[i]);
    }
    return resultArray;
  }
}
