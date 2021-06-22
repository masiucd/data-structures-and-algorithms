export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  const ways = new Array(n + 1).fill(0)
  ways[0] = 1
  for (const denom of denoms) {
    for (let index = 1; index < n + 1; index++) {
      if (denom <= index) {
        ways[index] += ways[index - denom]
      }
    }
  }
  return ways[n]
}
const denoms = [1, 5, 10, 25]
const n = 5
