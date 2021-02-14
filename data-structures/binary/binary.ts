// const n = 2
// const toBinary = n.toString(2)
// console.log(toBinary)

export const convertToBinary = (n: number): string => {
  return (n >>> 0).toString(2)
}

console.log(convertToBinary(2)) // 10
console.log(convertToBinary(10)) // 1010
console.log(convertToBinary(-1)) // 11111111111111111111111111111111
