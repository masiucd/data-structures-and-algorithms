import { assertEquals } from "../../package.ts"
import { isMonotonic } from "./with-ts.ts"

Deno.test({
  name: "monotonic",
  fn: () => {
    const list = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
    const res = isMonotonic(list)
    assertEquals(res, true)

    const list2 = [1]
    const res2 = isMonotonic(list2)
    assertEquals(res2, true)

    const list3 = [1, 2, 0]
    const res3 = isMonotonic(list3)
    assertEquals(res3, false)
  },
})
