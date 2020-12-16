const fn = (n: number) => n * 10

export const times10 = () => {
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

const f = times10()
console.log(f(10))
console.log(f(20))
console.log(f(10))
console.log(f(30))
