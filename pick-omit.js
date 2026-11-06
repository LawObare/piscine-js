function pick(obj, keys) {
  const result = {};
  const keysToPick = Array.isArray(keys) ? keys : [keys];

  for (const key of keysToPick) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

function omit(obj, keys) {
  const result = {};
  const keysToOmit = Array.isArray(keys) ? keys : [keys];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!keysToOmit.includes(key)) {
        result[key] = obj[key];
      }
    }
  }

  return result;
}
