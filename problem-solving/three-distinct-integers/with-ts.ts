export function threeNumberSort(array: number[], order: number[]) {
  const xs: number[] = []
  for (const n of array) {
    if (n === order[0]) {
      xs.push(n)
    }
  }
  for (const n of array) {
    if (n === order[1]) {
      xs.push(n)
    }
  }
  for (const n of array) {
    if (n === order[2]) {
      xs.push(n)
    }
  }
  return xs
}
export function threeNumberSort2(array: number[], order: number[]) {
  const valueCounts = [0, 0, 0]

  for (const num of array) {
    const numIndex = order.indexOf(num)
    valueCounts[numIndex]++
  }

  for (let i = 0; i < order.length; i++) {
    const value = order[i]
    const count = valueCounts[i]

    const amountOfElementsBefore = valueCounts.slice(0, i).reduce((a, b) => a + b, 0)
    for (let n = 0; n < count; n++) {
      const currentIndex = amountOfElementsBefore + n
      array[currentIndex] = value
    }
  }
  return array
}

const xs = [1, 0, 0, -1, -1, 0, 1, 1]
const order = [0, 1, -1]

const res = threeNumberSort2(xs, order) // [0,0,0,1,1,1,-1,-1]
console.log(res)
