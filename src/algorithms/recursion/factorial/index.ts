const memoize = (fn: Function) => {
  const cache = {}
  return (n: number) => {
    if (cache[n]) {
      return cache[n]
    } else {
      let res = fn(n)
      cache[n] = res
      return res
    }
  }
}

const factorial = (n: number) => {
  if (n <= 2) {
    return n
  }
  return n * factorial(n - 1)
}

const f = memoize(factorial)

console.log(f(5))
