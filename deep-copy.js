function deepCopy(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    const arrCopy = [];
    for (let i = 0; i < value.length; i++) {
      arrCopy[i] = deepCopy(value[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(value[key]);
    }
  }
  return objCopy;
}
