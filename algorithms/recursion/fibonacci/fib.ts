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

const lol = f(5)
console.log(lol)

// const fib = (n: number) => {
//   let current = 1
//   let previous = 0

//   while (n > 1) {
//     const next = current + previous
//     previous = current
//     current = next
//     n--
//   }
//   return current
// }

// const fibRec = (n: number): number => {

//   return n < 1 ? 0 : n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2)
// }
