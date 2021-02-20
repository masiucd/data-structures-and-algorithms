const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length - 1; i++) {
    const first = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j]

      if (first + second === target) return [first, second]
    }
  }

  return []
}
const twoSum2 = (nums: number[], target: number): number[] => {
  const map: Map<number, boolean> = new Map()
  for (const n of nums) {
    const current = target - n

    if (map.has(current)) {
      return [current, n]
    } else {
      map.set(n, true)
    }
  }

  return []
}
const twoSum3 = (nums: number[], target: number): number[] => {
  let low = 0
  let high = nums.length - 1
  const xs = nums.sort((a, b) => a - b)

  while (low < high) {
    const currentSum = xs[low] + xs[high]
    if (currentSum === target) {
      return [xs[low], xs[high]]
    } else if (currentSum < target) {
      low++
    } else if (currentSum > target) {
      high--
    }
  }
  return []
}
