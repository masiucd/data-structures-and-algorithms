export const uniqSort = (xs: number[]) => {
  const cache = {}
  const res = []
  for (let n of xs) {
    if (!cache[n]) {
      cache[n] = true
      res.push(n)
    }
  }
  return res
}

// With built in Map data structure
export const uniqSort2 = (xs: number[]) => {
  const cache = new Map()

  const res = []
  for (let n of xs) {
    if (!cache.has(n)) {
      cache.set(n, true)
      res.push(n)
    }
  }
  return res
}

/**
 * When it comes to speed this is a pretty fast algorithm, we using a Dictionary(object) which is very fast for lookups
 * When it comes to space complexity it can be a little bit slower since it is linear O(n)
 */
