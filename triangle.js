function triangle(str, nmbr) {
  if (nmbr <= 0) {
    return "";
  };
  let result = "";
  for (let i = 1; i <= nmbr - 1; i++) {
    result = result + str;
  };
  result = result + "\n"
  return triangle(str, nmbr - 1) + result;
};
