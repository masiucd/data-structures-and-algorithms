import { toNumber } from "../utils/index.ts"

export const float64ToBinary = (x: number) => x.toString(2)
export const binaryToFloat64 = (x: string) => parseInt(x, 2)

export const andGate = (a: number, b: number) => a & b
export const orGate = (a: number, b: number) => a | b
export const xorGate = (a: number, b: number) => a ^ b
export const notGate = (a: number) => ~a

let x = 10 >> 3
console.log({ x })

let b = float64ToBinary(x)
console.log("b", b)
