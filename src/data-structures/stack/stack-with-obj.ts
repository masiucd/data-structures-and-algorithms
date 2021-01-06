interface Storage<T> {
  box: Record<string, T>
  size: number
}
export function stackWithObj<T>() {
  /**
   * storage will be private and not exported
   */
  const storage: Storage<T> = {
    box: {},
    size: 0,
  }
  /**
   *
   * @param item that we push into the Stack
   * Add to the end, bottom.
   *
   */
  const push = (item: T) => {
    storage.box[storage.size] = item
    storage.size++
  }

  /**
   * Removers from the top
   * The first item in the Stack
   */
  const pop = () => {
    if (storage.size === 0) {
      return
    }
    delete storage.box[storage.size - 1]
    storage.size -= 1
  }

  const isEmpty = (): boolean => storage.size === 0

  /**
   * Returns the item from the top without removing it
   */
  const peek = () => storage.box[storage.size - 1]

  const getLength = () => storage.size

  return {
    push,
    pop,
    peek,
    isEmpty,
    getLength,
  }
}

// const myStack = stackWithObj<number>()

// myStack.push(45)
// myStack.push(25)
// myStack.push(15)

// myStack.pop()

// console.log(myStack.isEmpty())
// console.log(myStack.peek())

// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack.isEmpty())

// console.log(myStack.peek())
