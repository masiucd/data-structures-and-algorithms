type SpecialArray = Array<number | SpecialArray>

export function productSum(array: SpecialArray, multiPlyer = 1): number {
  let sum = 0

  for (const n of array) {
    if (Array.isArray(n)) {
      sum += productSum(n, multiPlyer + 1)
      console.log(sum)
    } else {
      sum += n
    }
  }
  return sum * multiPlyer
}

const xs = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

console.log(productSum(xs))
