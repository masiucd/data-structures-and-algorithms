export function isMonotonic(list: number[]) {
  let isNonIncreasing = true
  let isNonDecreasing = true

  for (let i = 1; i < list.length; i++) {
    const current = list[i]
    const previous = list[i - 1]
    if (current < previous) {
      isNonDecreasing = false
    }
    if (current > previous) {
      isNonIncreasing = false
    }
  }

  return isNonDecreasing || isNonIncreasing
}
