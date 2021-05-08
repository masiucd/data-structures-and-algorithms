const FIRST_INDEX = 0
export const hasSingleCycle = (array: number[]): boolean => {
  let visitedNumbersCount = 0
  let currentIndex = FIRST_INDEX

  while (visitedNumbersCount < array.length) {
    // Here we have done more then on cycle and we return false
    if (visitedNumbersCount > 0 && currentIndex === 0) return false
    visitedNumbersCount++
    currentIndex = getNextIndex(currentIndex, array)
  }

  return currentIndex === 0
}

function getNextIndex(currentIndex: number, list: number[]): number {
  const jump = list[currentIndex]
  const nextIndexInList = (currentIndex + jump) % list.length
  console.log(nextIndexInList)

  return nextIndexInList >= 0 ? nextIndexInList : nextIndexInList + list.length
}

const xs = [2, 3, 1, -4, -4, 2]
console.log(hasSingleCycle(xs)) // => true

// ## Wrap around the array with modulo operator
// (expression) % length of list
