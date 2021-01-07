import * as q from "../queue"

describe("queue", () => {
  test("should work with all given methods", () => {
    const queue = q.queue<string>()

    expect(queue.getSize()).toBe(0)
    queue.enqueue("apple")
    queue.enqueue("orange")
    queue.enqueue("banana")
    expect(queue.getSize()).toBe(3)

    expect(queue.getFirstItem()).toBe("apple")
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.getFirstItem()).toEqual({})

    queue.enqueue("strawberries")
    expect(queue.getFirstItem()).toBe("strawberries")

    queue.dequeue()
    expect(queue.getSize()).toBe(0)
  })
})
