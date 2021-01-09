import * as linkedList from "../ll"

jest.spyOn(linkedList, "linkedList")

beforeEach(() => {
  jest.clearAllMocks()
})

afterEach(() => {
  //
})

describe("LinkedList", () => {
  test("should work as expected", () => {
    const ll = linkedList.linkedList()
    expect(linkedList.linkedList).toHaveBeenCalled()
    expect(ll.box.head).toBe(null)

    const getSizeSpy = jest.spyOn(ll, "getSize")

    ll.push("a")
    ll.push("b")
    ll.push("c")
    expect(ll.box.head).not.toBe(null)

    expect(ll.getSize()).toBe(3)
    expect(getSizeSpy).toHaveBeenCalledTimes(1)
  })

  test("dropHead function should work as expected", () => {
    const ll = linkedList.linkedList()

    ll.push("a")
    ll.push("b")
    ll.push("c")

    expect(ll.getHead().data).toBe("a")
    expect(ll.getSize()).toBe(3)
    ll.dropHead()
    expect(ll.getHead().data).toBe("b")
    expect(ll.getSize()).toBe(2)
  })

  test("get node should return expected node", () => {
    const ll = linkedList.linkedList()

    ll.push("a")
    ll.push("b")
    ll.push("c")

    expect(ll.get(2).data).toBe("c")
    expect(ll.get(0).data).toBe("a")
  })
  test("removeAt should work as expected", () => {
    const ll = linkedList.linkedList()

    ll.push("a")
    ll.push("b")
    ll.push("c")

    expect(ll.getSize()).toBe(3)
    expect(ll.get(1).data).toBe("b")

    ll.removeAt(1)
    expect(ll.getSize()).toBe(2)
    expect(ll.get(1).data).toBe("c")
  })

  test("insertAt should increase the length and insert the data at the correct spot", () => {
    const ll = linkedList.linkedList()

    ll.push("a")
    ll.push("b")
    ll.push("c")
    ll.push("d")

    expect(ll.getSize()).toBe(4)
    expect(ll.get(2).data).toBe("c")

    ll.insert(2, "l")
    expect(ll.get(2).data).toBe("l")
  })

  test("printNodes should return a new array with strings", () => {
    const ll = linkedList.linkedList()

    ll.push("a")
    ll.push("b")
    ll.push("c")
    ll.push("d")

    expect(typeof ll.printNodes()[0]).toBe("string")
    for (let x of ll.printNodes()) {
      expect(typeof x).toBe("string")
    }
    expect(ll.printNodes().length).toBe(4)
    expect(ll.getSize()).toBe(4)
  })
})
