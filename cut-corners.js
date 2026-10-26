function trunc(num) {
  if (num === 0) {
    return 0;
  }

  let sign;
  let absNum;

  if (num < 0) {
    sign = -1;
    absNum = -num;
  } else {
    sign = 1;
    absNum = num;
  }

  let intPart = 0;
  let step = 4503599627370496;

  while (step >= 1) {
    if (intPart + step <= absNum) {
      intPart += step;
    }
    step = step / 2;
  }

  return intPart * sign;
}

function floor(num) {
  const integer = trunc(num);
  if (num < 0) {
    if (num !== integer) {
      return integer - 1;
    }
  }
  return integer;
}

function ceil(num) {
  const integer = trunc(num);
  if (num > 0) {
    if (num !== integer) {
      return integer + 1;
    }
  }
  return integer;
}

function round(num) {
  if (num >= 0) {
    const floorValue = floor(num);
    const decimal = num - floorValue;
    if (decimal >= 0.5) {
      return floorValue + 1;
    }
    return floorValue;
  } else {
    const ceilValue = ceil(num);
    const decimal = ceilValue - num;
    if (decimal >= 0.5) {
      return ceilValue - 1;
    }
    return ceilValue;
  }
}
