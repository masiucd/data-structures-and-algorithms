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
