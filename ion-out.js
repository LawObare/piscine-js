function ionOut(str) {
  let pattern = /\b\w*t(?=ion\b)/g;
  const matches = str.match(pattern);
  if (matches) {
    return matches;
  }
  return []
}
