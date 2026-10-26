function triangle(str, nmbr) {
  if (nmbr <= 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < nmbr; i++) {
    result = result + str;
  }

  const previousLines = triangle(str, nmbr - 1);

  if (previousLines === "") {
    return result;
  } else {
    return previousLines + "\n" + result;
  }
}
