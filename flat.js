function flat(arr, depth = 1) {
  const result = []

  const walk = (items, remaining) => {
    items.forEach((item) => {
      if (Array.isArray(item) && remaining > 0) {
        walk(item, remaining - 1)
      } else {
        result.push(item)
      }
    })
  }

  walk(arr, depth)
  return result
}
