// const n = 2
// const toBinary = n.toString(2)
// console.log(toBinary)

export const converToBinary = (n: number): string => {
  return n.toString(2)
}

console.log(converToBinary(2)) // 10
console.log(converToBinary(10)) // 1010
