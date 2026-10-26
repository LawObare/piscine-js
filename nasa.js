function nasa(N) {
  let result = "";

  for (let i = 1; i <= N; i++) {
    let currentToken = "";

    if (i % 3 === 0 && i % 5 === 0) {
      currentToken = "NASA";
    } else if (i % 3 === 0) {
      currentToken = "NA";
    } else if (i % 5 === 0) {
      currentToken = "SA";
    } else {
      currentToken = i;
    }

    if (i === 1) {
      result += currentToken;
    } else {
      result += " " + currentToken;
    }
  }

  return result;
}
