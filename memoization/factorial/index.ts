export const memoize = (fn: Function) => {
  const cache: Map<number, number> = new Map()
  return (n: number) => {
    if (cache.has(n)) {
      return cache[n]
    } else {
      let res = fn(n)
      cache.set(n, res)
      return res
    }
  }
}

export const factorial = (n: number) => {
  if (n < 2) return n
  return n * factorial(n - 1)
}

// const res = memoize(factorial)
// console.log(res(5))
