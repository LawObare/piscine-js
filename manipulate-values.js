function filterValues(obj, callback) {
  const filteredEntries = Object.entries(obj).filter(([key, value]) => callback(value));
  return Object.fromEntries(filteredEntries);
}

function mapValues(obj, callback) {
  const mappedEntries = Object.entries(obj).map(([key, value]) => [key, callback(value)]);
  return Object.fromEntries(mappedEntries);
}

function reduceValues(obj, callback, initialValue) {
  const values = Object.values(obj);

  if (initialValue === undefined) {
    return values.reduce(callback);
  }

  return values.reduce(callback, initialValue);
}
