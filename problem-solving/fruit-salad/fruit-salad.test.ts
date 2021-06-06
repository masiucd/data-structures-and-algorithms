import { assertEquals } from "../../package.ts"
import { fruitSalad } from "./index.ts"

Deno.test({
  name: "Fruit salad",
  fn: () => {
    let fruits = ["apple", "pear", "grapes"]

    let result = fruitSalad(fruits)
    let expected = "apargrapepesple"
    assertEquals(result, expected)

    fruits = ["raspberries", "mango"]
    result = fruitSalad(fruits)
    expected = "erriesmangoraspb"
    assertEquals(result, expected)
  },
})
