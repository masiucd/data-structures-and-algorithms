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

export function threeNumberSort2(list: number[], order: number[]) {
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

function swap(i: number, j: number, list: number[]): void {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}
