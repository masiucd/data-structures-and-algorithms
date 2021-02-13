export function twoNumberSum(array: number[], targetSum: number) {
  for (const n of array) {
    console.log(n - targetSum)
    console.log(targetSum - n)
  }
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
