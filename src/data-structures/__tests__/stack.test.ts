import * as s from "../stack/stack"
import * as sObj from "../stack/stack-with-obj"

describe("stack", () => {
  test("stack with a array work as expected", () => {
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
    expect(stack.isEmpty()).toBeTruthy()
  })
  test("stack with object work as expected", () => {
    const s = sObj.stackWithObj<number>()

    expect(s.isEmpty()).toBeTruthy()

    s.push(1)
    s.push(2)
    s.push(3)
    expect(s.isEmpty()).toBeFalsy()

    expect(s.peek()).toBe(3)

    s.pop()
    expect(s.getLength()).toBe(2)
  })
})
