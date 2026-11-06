function filterKeys(obj, callback) {
  const filteredEntries = Object.entries(obj).filter(([key]) => callback(key));
  return Object.fromEntries(filteredEntries);
}

function mapKeys(obj, callback) {
  const mappedEntries = Object.entries(obj).map(([key, value]) => [callback(key), value]);
  return Object.fromEntries(mappedEntries);
}

function reduceKeys(obj, callback, initialValue) {
  const keys = Object.keys(obj);

  if (initialValue === undefined) {
    return keys.reduce(callback);
  }

  return keys.reduce(callback, initialValue);
}
