function flow(funcs) {
  return (...args) => {
    if (funcs.length === 0) return args[0]
    const [first, ...rest] = funcs
    return rest.reduce((result, fn) => fn(result), first(...args))
  }
}
