import { assertEquals } from "../../../package.ts"
import { bubbleSort, bubbleSort2 } from "./bubble.ts"

Deno.test({
  name: "bubbleSort",
  fn: () => {
    const list = [1, 3, 2, -1, 12, 9] as Array<number>

    const res = bubbleSort(list)
    const res2 = bubbleSort2(list)

    assertEquals(res, [-1, 1, 2, 3, 9, 12])
    assertEquals(res2, [-1, 1, 2, 3, 9, 12])
  },
})
