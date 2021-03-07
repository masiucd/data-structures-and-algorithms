import { assertEquals } from "../../../package.ts"
import { insertionSort } from "./insertion-sort.ts"

Deno.test({
  name: "insertionSort",
  fn: () => {
    let xs = [9, 5, 1]
    let expected = [1, 5, 9]
    assertEquals(insertionSort(xs), expected)

    xs = [99, -100, -2]
    expected = [-100, -2, 99]
    assertEquals(insertionSort(xs), expected)
    // assertNotEquals(insertionSort(xs), xs)
  },
})
