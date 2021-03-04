const bubbleSort = (xs: number[]): number[] => {
  let sorted = false
  let counter = 0

  while (!sorted) {
    sorted = true
    for (let i = 0; i < xs.length - 1 - counter; i++) {
      if (xs[i] > xs[i + 1]) {
        const temp = xs[i]
        xs[i] = xs[i + 1]
        xs[i + 1] = temp
        sorted = false
      }
    }
    counter++
  }
  return xs
}

console.log(bubbleSort([3, 4, 2, 1 - 2]))
