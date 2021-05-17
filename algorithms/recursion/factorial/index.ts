// 5*4*3*2
type FacFn = (n: number) => number
const memoize = (fn: FacFn) => {
  const cache: Record<string, number> = {}
  return (n: number) => {
    if (cache[n]) {
      return cache[n]
    } else {
      const res = fn(n)
      cache[n] = res
      return res
    }
  }
}

const factorial = (n: number): number => {
  if (n <= 2) {
    return n
  }
  return n * factorial(n - 1)
}

const f = memoize(factorial)

console.log(f(5))
