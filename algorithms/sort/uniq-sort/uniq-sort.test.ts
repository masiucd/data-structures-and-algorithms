import * as uniq from "./"

describe("uniqSort", () => {
  test("uniqSort should works correctly", () => {
    const fn = uniq.uniqSort
    const list = [1, 2, 3, 3, 3, 3, 4]
    const list2 = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4]

    expect(fn(list)).toEqual([1, 2, 3, 4])
    expect(fn(list).length).toBe(4)

    expect(fn(list2)).toEqual([1, 2, 3, 4])
    expect(fn(list2).length).toBe(4)
  })

  test("uniqSort with Map should work the same", () => {
    const fn = uniq.uniqSort2
    const list = [1, 2, 3, 3, 3, 3, 4]
    const list2 = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4]

    expect(fn(list)).toEqual([1, 2, 3, 4])
    expect(fn(list).length).toBe(4)

    expect(fn(list2)).toEqual([1, 2, 3, 4])
    expect(fn(list2).length).toBe(4)
  })
})
