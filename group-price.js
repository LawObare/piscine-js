function groupPrice(str) {
  const price = /(?:[A-Z]{3}|\$)(\d+)\.(\d+)/g
  return Array.from(str.matchAll(price), (m) => [m[0], m[1], m[2]])
}
