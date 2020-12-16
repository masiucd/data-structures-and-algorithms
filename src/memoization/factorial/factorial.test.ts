import * as fac from "./index"

jest.spyOn(fac, "factorial")

describe("factorial", () => {
  test("should work as expected", () => {
    const fn = fac.factorial

    expect(fn(5)).toBe(120)
    expect(fn(4)).toBe(24)

    expect(fn).toHaveBeenCalled()
    expect(typeof fn).toBe("function")
  })
})
