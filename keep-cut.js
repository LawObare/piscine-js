function cutFirst(str) {
  return slice(str, 2);
}

function cutLast(str) {
  return slice(str, 0, -2);
}

function cutFirstLast(str) {
  return slice(str, 2, -2);
}

function keepFirst(str) {
  return slice(str, 0, 2);
}

function keepLast(str) {
  return slice(str, -2);
}

function keepFirstLast(str) {
  if (str.length <= 4) {
    return str;
  }
  return slice(str, 0, 2) + slice(str, -2);
}

// Reuse your custom slice function from the previous project here:
function slice(input, start = 0, end = input.length) {
  let startIndex = start;
  let endIndex = end;

  if (startIndex < 0) {
    startIndex = input.length + startIndex;
    if (startIndex < 0) startIndex = 0;
  } else if (startIndex > input.length) {
    startIndex = input.length;
  }

  if (endIndex < 0) {
    endIndex = input.length + endIndex;
    if (endIndex < 0) endIndex = 0;
  } else if (endIndex > input.length) {
    endIndex = input.length;
  }

  let resultString = "";
  for (let i = startIndex; i < endIndex; i++) {
    resultString += input[i];
  }
  return resultString;
}
