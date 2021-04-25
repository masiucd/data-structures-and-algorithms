type Triplet = [number, number, number]

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const xs: Triplet[] = []
  const sortedList = [...array].sort((a, b) => a - b)

  for (let i = 0; i < sortedList.length - 2; i++) {
    let left = i + 1
    let right = sortedList.length - 1

    while (left < right) {
      const currentSum = sortedList[i] + sortedList[left] + sortedList[right]
      if (currentSum === targetSum) {
        xs.push([sortedList[i], sortedList[left], sortedList[right]])
        left++
        right--
      } else if (currentSum < targetSum) {
        left++
      } else if (currentSum > targetSum) {
        right--
      }
    }
  }

  return xs
}

const xs = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0

console.log(threeNumberSum(xs, targetSum))
