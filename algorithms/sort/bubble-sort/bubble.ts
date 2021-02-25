export function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]

        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }

  return array
}

export const bubbleSort2 = (xs: number[]): number[] => {
  let isSorted = false
  let counter = 0
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < xs.length - 1 - counter; i++) {
      if (xs[i] > xs[i + 1]) {
        swap(i, i + 1, xs)
        isSorted = false
      }
    }
    counter++
  }
  return xs
}

function swap(i: number, j: number, xs: number[]): void {
  const temp = xs[i]
  xs[i] = xs[j]
  xs[j] = temp
}

console.log(bubbleSort2([8, 5, 2, 9, 5, 6, 3]))
