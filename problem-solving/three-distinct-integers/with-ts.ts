export function threeNumberSort(list: number[], order: number[]) {
  const xs: number[] = []
  for (const n of list) {
    if (n === order[0]) {
      list.push(n)
    }
  }
  for (const n of list) {
    if (n === order[1]) {
      list.push(n)
    }
  }
  for (const n of list) {
    if (n === order[2]) {
      list.push(n)
    }
  }
  return xs
}
export function threeNumberSort2(list: number[], order: number[]) {
  const valueCounts = [0, 0, 0]

  for (const num of list) {
    const numIndex = order.indexOf(num)
    valueCounts[numIndex]++
  }

  for (let i = 0; i < order.length; i++) {
    const value = order[i]
    const count = valueCounts[i]

    const amountOfElementsBefore = valueCounts.slice(0, i).reduce((a, b) => a + b, 0)
    for (let n = 0; n < count; n++) {
      const currentIndex = amountOfElementsBefore + n
      list[currentIndex] = value
    }
  }
  return list
}
export function threeNumberSort3(list: number[], order: number[]) {
  const first = order[0]
  const third = order[2]

  let firstIndex = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i] === first) {
      swap(firstIndex, i, list)
      firstIndex++
    }
  }
  let thirdIndex = list.length - 1
  for (let i = list.length - 1; i > -1; i--) {
    if (list[i] === third) {
      swap(thirdIndex, i, list)
      thirdIndex--
    }
  }
  return list
}

// const list = [1, 0, 0, -1, -1, 0, 1, 1]
// const order = [0, 1, -1]

// const res = threeNumberSort3(list, order) // [0,0,0,1,1,1,-1,-1]

function swap(i: number, j: number, list: number[]): void {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}
