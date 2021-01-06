export function stack<T>() {
  const storage: T[] = []

  /**
   *
   * @param item that we push into the Stack
   * Add to the end, bottom.
   *
   */
  const push = (item: T) => {
    storage.push(item)
  }

  /**
   * Removers from the top
   * The first item in the Stack
   */
  const pop = () => {
    storage.pop()
  }

  /**
   * Returns the item from the top without removing it
   */
  const peek = (): T | T[] => {
    return storage.length > 0 ? storage[storage.length - 1] : storage
  }

  return {
    push,
    pop,
    peek,
  }
}

// const myStack = stack()

// myStack.push(45)
// myStack.push(25)
// myStack.push(15)

// console.log(myStack.storage)
// myStack.pop()

// console.log(myStack.storage)
// console.log(myStack.peek())
