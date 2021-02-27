import { Stack } from "./stack-class.ts"
import { assertEquals } from "../../package.ts"
Deno.test({
  name: "stack",
  fn: () => {
    const s = new Stack()
    s.push(5)
    s.push(1)
    s.push(2)
    s.push(3)
    assertEquals(s.getSize, 4)

    s.pop()
    assertEquals(s.getSize, 3)
    assertEquals(s.peek(), 2)
  },
})
