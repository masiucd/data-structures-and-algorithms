import { andGate, float64ToBinary, notGate, orGate, xorGate } from "./binary.ts"
import { assertEquals } from "../package.ts"

Deno.test({
  name: "andGate",
  /**
   * Bit-wise AND ( & ) : It is a binary operator i.e. accepts two operands. Bit-wise AND (&) returns 1 if both the bits are set ( i.e 1) and 0 in any other case.
   */
  fn: () => {
    let expected = 1
    assertEquals(andGate(1, 3), expected)

    expected = 0
    assertEquals(andGate(1, 4), expected)
  },
})

Deno.test({
  name: "float64ToBinary",
  fn: () => {
    let expected = "1"
    assertEquals(float64ToBinary(1), expected)

    expected = "1010"
    assertEquals(float64ToBinary(10), expected)

    expected = "1001011"
    assertEquals(float64ToBinary(75), expected)
  },
})

Deno.test({
  name: "orGate",
  /**
   * Bit-Wise OR ( | ) : Its is a binary operator i.e. accepts two operands. Bit-wise OR ( | ) returns 1 if any of the operand is set (i.e. 1) and 0 in any other case.
   */
  fn: () => {
    let expected = 0
    assertEquals(orGate(0, 0), expected)

    expected = 1
    assertEquals(orGate(1, 0), expected)

    expected = 1
    assertEquals(orGate(1, 1), expected)
  },
})
Deno.test({
  name: "xorGate",
  /**
   * Bit-Wise XOR ( ^ ) : Its is a binary operator i.e. accepts two operands. Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.
   */
  fn: () => {
    let expected = 0
    assertEquals(xorGate(0, 0), expected)

    expected = 1
    assertEquals(xorGate(1, 0), expected)

    expected = 0
    assertEquals(xorGate(1, 1), expected)
  },
})
Deno.test({
  name: "notGate",
  /**
   * Bit-Wise NOT ( ~ ) : Its is a unary operator i.e. accepts single operands. Bit-wise NOT ( ~ ) flips the bits i.e 0 becomes 1 and 1 becomes 0.
   */
  fn: () => {
    let expected = -1
    assertEquals(notGate(0), expected)

    expected = -2
    assertEquals(notGate(1), expected)
  },
})
