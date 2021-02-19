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
