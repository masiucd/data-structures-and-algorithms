// export function binarySearch(xs: number[], target: number) {
//   let startIndex = 0
//   let endIndex = xs.length - 1

//   while (startIndex <= endIndex) {
//     let middleIndex = Math.floor((startIndex + endIndex) / 2)
//     console.log(middleIndex, xs[middleIndex])

//     if (xs[middleIndex] === target) {
//       console.log("found the target at index ", middleIndex)
//       return middleIndex
//     }

//     if (target > xs[middleIndex]) {
//       startIndex = middleIndex + 1
//     }
//     if (target < xs[middleIndex]) {
//       endIndex = middleIndex - 1
//     }
//   }
//   return -1
// }

// const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const target = 3

// const res = binarySearch(xs, target)
// console.log(res)

const fn = (xs: number[], target: number) => {
  let startIndex = 0
  let endIndex = xs.length - 1

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2)

    if (target === xs[middleIndex]) {
      return middleIndex
    }

    if (target > xs[middleIndex]) {
      endIndex = middleIndex - 1
    }
    if (target < xs[middleIndex]) {
      startIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2))
//
