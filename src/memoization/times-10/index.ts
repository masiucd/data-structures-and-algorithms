const fn = (n: number) => n * 10

const times10 = (n: number) => {
  const cache = {}
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

// console.log(times10(10))
// console.log(times10(20))
