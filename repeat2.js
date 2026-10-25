function repeat(str, nmbr) {
  if (nmbr <= 0) {
    return ""
  };
  let result = ""
  while (nmbr > 0) {
    result = result + str;
    nmbr = nmbr - 1;
  };
  return result
};
