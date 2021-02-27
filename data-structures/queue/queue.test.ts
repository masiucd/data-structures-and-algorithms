import { Queue } from "./queue-class.ts"
import { assertEquals } from "../../package.ts"
Deno.test({
  name: "Queue",
  fn: () => {
    const q = new Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    assertEquals(q.peek(), 1)
    assertEquals(q.getSize, 3)

    q.dequeue()
    q.dequeue()
    assertEquals(q.getSize, 1)
    assertEquals(q.peek(), 3)
  },
})
