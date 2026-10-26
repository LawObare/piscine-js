function reverse(input) {
  if (typeof input === "string") {
    let resultString = "";
    for (let i = input.length - 1; i >= 0; i--) {
      resultString += input[i];
    }
    return resultString;
  } else {
    let resultArray = [];
    for (let i = input.length - 1; i >= 0; i--) {
      resultArray.push(input[i]);
    }
    return resultArray;
  }
}
