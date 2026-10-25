function makePositive(num) {
  if (num < 0) {
    return 0 - num;
  } else {
    return num;
  }
}

function multiply(a, b) {
  let result = 0;
  let count = makePositive(b);

  while (count > 0) {
    result = result + makePositive(a);
    count = count - 1;
  }

  const signsMismatch = (a < 0 && b > 0) || (a > 0 && b < 0);
  if (signsMismatch) {
    return 0 - result;
  }

  return result;
}

function divide(a, b) {
  if (b === 0) {
    if (a < 0) {
      return -Infinity;
    } else {
      return Infinity;
    }
  }

  let absA = makePositive(a);
  let absB = makePositive(b);
  let result = 0;

  while (absA >= absB) {
    absA = absA - absB;
    result = result + 1;
  }

  const signsMismatch = (a < 0 && b > 0) || (a > 0 && b < 0);
  if (signsMismatch) {
    return 0 - result;
  }

  return result;
}

function modulo(a, b) {
  if (b === 0) {
    return NaN;
  }

  let absA = makePositive(a);
  let absB = makePositive(b);

  while (absA >= absB) {
    absA = absA - absB;
  }

  if (a < 0) {
    return 0 - absA;
  }

  return absA;
}
