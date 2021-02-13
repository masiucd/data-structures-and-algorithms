type MathFn = (n: number) => number

const multiPlyWith10 = (n: number) => n * 10

export const times10 = () => {
  const cache = {}
  return (n: number) => {
    if (cache[n]) {
      console.log("fetching from cache", n)
      return cache[n]
    } else {
      console.log("doing some math")
      const result = multiPlyWith10(n)
      cache[n] = result
      return result
    }
  }
}

export const memoize = (fn: MathFn) => {
  const cache = {}
  return (n: number) => {
    if (cache[n]) {
      console.log("fetching from cache", n)
      return cache[n]
    } else {
      console.log("doing some math")
      const result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const f = memoize(multiPlyWith10)
const f2 = memoize((n: number) => n + 5)

console.log(f(10))
console.log(f(20))
console.log(f(10))
console.log(f(30))
console.log(f(20))

console.log(f2(1))
console.log(f2(2))
console.log(f2(2))
