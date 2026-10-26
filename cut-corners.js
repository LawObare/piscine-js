function trunc(num) {
  if (num >= 0) {
    let intPart = 0;
    while (intPart <= num) {
      intPart++;
    }
    return intPart - 1;
  } else {
    let intPart = 0;
    while (intPart >= num) {
      intPart--;
    }
    return intPart + 1;
  }
}

function floor(num) {
  const integer = trunc(num);
  if (num < 0 && num !== integer) {
    return integer - 1;
  }
  return integer;
}

function ceil(num) {
  const integer = trunc(num);
  if (num > 0 && num !== integer) {
    return integer + 1;
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
