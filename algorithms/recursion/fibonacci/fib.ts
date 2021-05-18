export const memoize = (n: number) => (fn: (n: number) => number) => {
  const cache: Record<string, number> = {}
  if (cache[n]) {
    return cache[n]
  } else {
    const res = fn(n)
    cache[n] = res
    return res
  }
}

export const fib = (n: number): number => {
  if (n <= 2) return n

  return fib(n - 1) + fib(n - 2)
}

const f = (n: number): number => {
  const memo = (n: number) => (fn: (n: number) => number) => {
    const cache: Map<number, number> = new Map()
    if (cache.has(n)) {
      return cache.get(n)
    } else {
      const res = fn(n)
      cache.set(n, res)
      return res
    }
  }

  if (n === 2) {
    return 1
  } else if (n === 1) {
    return 0
  }

  return memo(n - 1)(f)! + memo(n - 1)(f)!
}
