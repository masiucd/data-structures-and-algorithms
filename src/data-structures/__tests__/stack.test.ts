import * as s from "../stack/stack"

describe("stack", () => {
  test("work as expected", () => {
    const stack = s.stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.peek()).toBe(3)

    expect(stack.pop())

    expect(stack.peek()).toBe(2)

    expect(stack.pop())
    expect(stack.pop())
    expect(stack.peek()).toEqual([])
  })
})
