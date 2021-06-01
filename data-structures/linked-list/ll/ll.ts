interface NodeType<T> {
  data: T
  next: NodeType<T> | null
}

interface LinkedList<T> {
  box: Box<T>
  push: (data: T) => boolean
  getSize: () => number
  pop: () => boolean
  printNodes: () => string[]
  dropHead: () => boolean
  get: (index: number) => NodeType<T> | null
  getHead: () => NodeType<T> | null
  removeAt: (index: number) => boolean
  insert: (index: number, data: T) => boolean
}

interface Box<T> {
  head: null | NodeType<T>
  tail: null | NodeType<T>
  size: number
}

export function createNode<T>(value: T) {
  return {
    data: value,
    next: null,
  }
}

export function linkedList<T>(): LinkedList<T> {
  const box: Box<T> = {
    head: null,
    tail: null,
    size: 0,
  }

  /**
   *
   * @param data
   * push to the end O(1)
   */
  const push = (data: T) => {
    const node = createNode(data)
    if (!box.head) {
      box.head = node
      box.tail = box.head
      box.size++
    } else {
      box.tail.next = node
      box.tail = node
      box.size++
    }
    return true
  }

  const getSize = () => {
    return box.size
  }

  /**
   * remove last node
   * O(n) linear time
   * we have to traverse the whole list
   */
  const pop = () => {
    if (!box.head) return false
    let currentNode = box.head
    let newTail = currentNode
    // same as currentNode.next !== null
    while (currentNode.next) {
      newTail = currentNode
      currentNode = currentNode.next
    }
    box.tail = newTail
    box.tail.next = null
    box.size--
    if (box.size === 0) {
      box.head = null
      box.tail = null
    }
    return true
  }

  const printNodes = () => {
    const xs = []
    let currentNode = box.head
    while (currentNode) {
      xs.push(`${currentNode.data} ->`)
      currentNode = currentNode.next
    }

    return xs
  }

  const dropHead = () => {
    if (!box.head) return false
    const currentHead = box.head
    box.head = currentHead.next
    box.size--
    if (box.size === 0) {
      box.tail = null
    }
    return true
  }

  const getHead = () => {
    if (box.head) {
      return box.head
    }
    return null
  }

  const get = (index: number) => {
    if (index > box.size || index < 0) return null
    if (index === 0) return getHead()
    let tracker = 0
    let currentNode = box.head

    while (tracker !== index) {
      currentNode = currentNode.next
      tracker++
    }
    return currentNode
  }

  const removeAt = (index: number) => {
    if (index < 0 || index > box.size) return false
    if (index === 0) return dropHead()
    if (index === box.size - 1) return pop()
    const prevNodeToRemove = get(index - 1)
    const removed = prevNodeToRemove.next
    prevNodeToRemove.next = removed.next
    box.size--
    return true
  }

  const insert = (index: number, data: T) => {
    if (index < 0 || index > box.size) return false
    const newNode = createNode(data)
    const prevNode = get(index - 1)
    const temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    box.size++
    return true
  }

  return {
    box,
    push,
    getSize,
    pop,
    printNodes,
    dropHead,
    get,
    getHead,
    removeAt,
    insert,
  }
}

// const ll = linkedList()
// ll.push("apple")
// ll.push("orange")
// ll.push("banana")
// ll.removeAt(1)
// console.log(ll.printNodes())

// console.log(ll.getSize())
// console.log(ll.printNodes())
// console.log(ll.getHead())
// console.log(ll.get(0))
