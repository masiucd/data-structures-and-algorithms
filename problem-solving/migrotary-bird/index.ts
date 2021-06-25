// const xs = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4] // 3

export const migratoryBirds = (xs: number[]) => {
  const map = new Map<number, number>()

  for (const n of xs) {
    if (map.has(n)) {
      map.set(n, map.get(n)! + 1)
    } else {
      map.set(n, 1)
    }
  }

  let max = 0
  for (const [_, value] of map) {
    if (max < Math.max(value)) {
      max = Math.max(value)
    }
  }

  for (const [key] of map) {
    if (map.get(key) === max) {
      return key
    }
  }

  return -1
}
