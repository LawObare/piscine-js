function getURL(data) {
  let pattern = /http[s]?:\/\/\S+/g;
  if (data.match(pattern)) {
    return data.match(pattern);
  }
  return [];
};
function greedyQuery(data) {
   const pattern = /https?:\/\/[^\s?]+\?[^\s?&=,\[\]%]+=[^\s?&=%]+(?:&[^\s?&=,\[\]%]+=[^\s?&=%]+){2,}/g;
  if (data.match(pattern)) {
    return data.match(pattern);
  }
  return [];
};
function notSoGreedy(data) {
  let pattern = /https?:\/\/[^\s?]+\?[^\s?&=,\[\]%]+=[^\s?&=,\[\]%]+(?:&[^\s?&=,\[\]%]+=[^\s?&=,\[\]%]+){1,2}(?!&)\b/g;
  if (data.match(pattern)) {
    return data.match(pattern);
  }
  return [];
};
