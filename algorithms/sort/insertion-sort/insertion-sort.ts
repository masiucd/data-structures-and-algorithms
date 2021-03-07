const swap = (i: number, j: number, array: Array<number>) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
const swap2 = (i: number, j: number, array: Array<number>) => {
  ;[array[i], array[j]] = [array[j], array[i]]
}

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap2(j, j - 1, array)
      j -= 1
    }
  }
  return array
}
