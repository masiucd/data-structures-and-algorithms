import { assertEquals } from "../../../package.ts"
import { fib, memoize } from "./fib.ts"

Deno.test({
  name: "fib",
  fn: () => {
    const res = memoize(5)(fib)
    assertEquals(res, 8)
  },
})
