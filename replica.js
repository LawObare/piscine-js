function replica(target, ...sources) {
  const isObject = (item) => item !== null && typeof item === 'object' && !Array.isArray(item);
  const isRegExp = (item) => item instanceof RegExp;

  for (const source of sources) {
    if (source === null || typeof source !== 'object') continue;

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const sourceValue = source[key];

        if (isRegExp(sourceValue)) {
          target[key] = new RegExp(sourceValue);
        } else if (Array.isArray(sourceValue)) {
          target[key] = sourceValue.map(item => {
            if (isRegExp(item)) return new RegExp(item);
            if (Array.isArray(item)) return replica([], item);
            if (isObject(item)) return replica({}, item);
            return item;
          });
        } else if (isObject(sourceValue)) {
          if (!isObject(target[key])) {
            target[key] = {};
          }
          replica(target[key], sourceValue);
        } else {
          target[key] = sourceValue;
        }
      }
    }
  }

  return target;
}
