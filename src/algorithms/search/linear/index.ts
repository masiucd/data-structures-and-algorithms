export function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}

// console.log(linearSearch([1, 66, 3, 23, 99, 40, 21], 23))
