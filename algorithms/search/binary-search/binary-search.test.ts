import * as binary from "./index"

jest.spyOn(binary, "binarySearch")
describe("binarySearch algorithm", () => {
  test("should return expected value", () => {
    const fn = binary.binarySearch
    const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const target = 3

    expect(fn(xs, target)).toBe(2)
    expect(fn(xs, 12)).toBe(-1)

    expect(fn).toHaveBeenCalled()
  })
})
