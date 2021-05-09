type Powerset = number[][]

export function powerset(list: number[]) {
  const subsets: Powerset = [[]]
  for (const n of list) {
    const size = subsets.length
    for (let i = 0; i < size; i++) {
      const currentSubset = subsets[i]
      subsets.push(currentSubset.concat(n))
    }
  }
  return subsets
}

const subsets = [1, 2, 3]
const res = powerset(subsets)
console.log(res)
