export function minimumWaitingTime(queries: number[]): number {
  const xs = queries.sort((a, b) => a - b)
  let res = 0
  for (const [index, duration] of xs.entries()) {
    const queriesLeft = xs.length - (index + 1)

    res += duration * queriesLeft
  }

  return res
}

// [3,2,1,2,6] // best = 17
// sorted [1,2,2,3,6]

const xs = [3, 2, 1, 2, 6]
console.log(minimumWaitingTime(xs))
