function repeat(str, nmbr) {
  if (nmbr <= 0) {
    return "";
  };
  return str + repeat(str, nmbr-1)
};
