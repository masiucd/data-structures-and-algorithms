import { assertEquals } from "../../package.ts"
import { convertToBinary } from "./binary.ts"

Deno.test({
  name: "convertToBinary",
  fn: () => {
    const two = convertToBinary(2)
    const ten = convertToBinary(10)
    const negativeOne = convertToBinary(-1)

    assertEquals(two, "10")
    assertEquals(ten, "1010")
    assertEquals(negativeOne, "11111111111111111111111111111111")
  },
})
