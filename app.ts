const float64ToBinary = (x: number) => x.toString(2)

const andGate = (a: number, b: number) => a & b

console.log(float64ToBinary(4))
// console.log(float64ToBinary(1))

// console.log(3 & 1)
// console.log(andGate(3, 1))
console.log(andGate(4, 1))
