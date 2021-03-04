export function binarySearch(array: number[], target: number): number {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (array[middle] === target) return middle

    if (target < array[middle]) {
      end = middle - 1
    }
    if (target > array[middle]) {
      start = middle + 1
    }
  }
  return -1
}
