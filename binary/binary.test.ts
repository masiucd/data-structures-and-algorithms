import { andGate, float64ToBinary, orGate } from "./binary.ts"
import { assertEquals } from "../package.ts"

Deno.test({
  name: "andGate",
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
  fn: () => {
    let expected = 0
    assertEquals(orGate(0, 0), expected)

    expected = 1
    assertEquals(orGate(1, 0), expected)

    expected = 1
    assertEquals(orGate(1, 1), expected)
  },
})
