import * as times10 from "./index"

jest.spyOn(times10, "times10")

describe("times10", () => {
  test("should works correctly", () => {
    const fn = times10.times10()

    expect(fn(10)).toBe(100)
    expect(fn(20)).toBe(200)
  })
})
