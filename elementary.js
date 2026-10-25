function multiply(a, b) {
  if (b <= 0) {
    return 0
  };
  return a + multiply(a, b - 1);
};
function divide(a, b) {
  if (b <= 0 || a <= 0) {
    return 0
  };
  return 1 + divide(a - b, b);
};
function modulo(a, b) {
  if ((a - b) <= 0) {
  return b - a
  };
  modulo(a - b, b);
};
