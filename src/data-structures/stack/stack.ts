export function stack<T>() {
  /**
   * storage will be private and not exported
   */
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

  const isEmpty = (): boolean => {
    return storage.length === 0
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
    isEmpty,
  }
}

// const myStack = stack()

// myStack.push(45)
// myStack.push(25)
// myStack.push(15)

// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack.isEmpty())

// console.log(myStack.peek())
