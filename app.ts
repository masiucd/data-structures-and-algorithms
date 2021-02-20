const minimumWaitingSum = (xs: Array<number>): number => {
  xs = xs.sort((a, b) => a - b)

  let res = 0
  for (let i = 0; i < xs.length; i++) {
    const queryTime = xs.length - (i + 1)
    // [1,2,2,3,6]
    // 4*1=1
    // 2*3 = 6
    // 2*2 = 4
    // 1 * 3 = 3
    // 0 * 0 = 0
    res += xs[i] * queryTime
  }

  return res
}
const q = [3, 2, 1, 2, 6]

console.log(minimumWaitingSum(q))
