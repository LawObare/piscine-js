function findExpression(target) {
  const add4 = "+4"
  const mul2 = "*2"
  const dead = new Set() // values already known to lead nowhere

  const search = (value, path) => {
    if (value === target) return path
    if (value > target || dead.has(value)) return undefined

    const found =
      search(value + 4, `${path} ${add4}`) ||
      search(value * 2, `${path} ${mul2}`)

    if (!found) dead.add(value)
    return found
  }

  return search(1, '1')
}
