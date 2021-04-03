// O(n^2) Speed | O(1) Space
export function twoNumberSum1(array: number[], targetSum: number) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNumber = array[i]
    console.log(firstNumber)
    for (let j = i + 1; j < array.length; j++) {
      const secondNumber = array[j]
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber]
      }
    }
  }
}

// O(n) Speed | O(n) Space
export function twoNumberSum2(array: number[], targetSum: number) {
  const nums: Record<string, boolean> = {}
  for (const n of array) {
    const sum = targetSum - n
    if (nums[sum]) {
      return [sum, n]
    } else {
      nums[n] = true
    }
  }
  return []
}

// O(nLog(n)) Speed | O(1) Space
export function twoNumberSum3(array: number[], targetSum: number) {
  const xs = array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = xs[left] + xs[right]
    if (currentSum === targetSum) {
      return [xs[left], xs[right]]
    } else if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--
    }
  }
  return []
}

// console.log(twoNumberSum1([3, 5, -4, 2], 7))
console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10))
// console.log(twoNumberSum2([9, 12, -5, 2], 4))
