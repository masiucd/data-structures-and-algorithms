const memoizedFactorial = (n: number) => (fn: (n: number) => number) => {
  const cache = new Map<number, number>()
  if (cache.has(n)) {
    return cache.get(n)
  } else {
    cache.set(n, fn(n))
    return fn(n)
  }
}

const factorialFn = (n: number): number => {
  return n <= 2 ? n : n * factorialFn(n - 1)
}

const run = memoizedFactorial(5)
const runResult = run(factorialFn)
console.log(runResult)
