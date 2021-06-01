class Node {
<<<<<<< HEAD
  value: number
  next: Node | null
  constructor(value: number) {
    this.value = value
=======
  data: number
  next: Node | null
  constructor(data: number) {
    this.data = data
>>>>>>> 11108822c58e1bb2b822776e03cbcd1f4ac45629
    this.next = null
  }
}

<<<<<<< HEAD
class List {
=======
class LinkedList {
>>>>>>> 11108822c58e1bb2b822776e03cbcd1f4ac45629
  head: Node | null
  tail: Node | null
  #size: number
  constructor() {
    this.head = null
    this.tail = null
    this.#size = 0
  }

<<<<<<< HEAD
  insertHead(value: number) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.#size++
      return this
    }
    return this
  }

  prepend(value: number) {
    if (!this.head) {
      this.insertHead(value)
      return this
    }
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.#size++
    return this
  }
  append(value: number) {
    if (!this.head) {
      this.insertHead(value)
      return this
    }
    if (!this.tail) return this
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.#size++
    return this
  }

  getSize(): number {
    return this.#size
  }

  printNodes(): void {
    const nodesList: string[] = []
    let currentNode = this.head
    let tracker = 0
    while (currentNode !== null) {
      tracker++
      nodesList.push(
        tracker !== this.getSize() ? `${currentNode?.value} ->` : `${currentNode?.value} `
      )
      currentNode = currentNode.next
    }
    console.log(nodesList)
=======
  getSize(): number {
    return this.#size
  }
  incrementSize(): void {
    this.#size++
  }

  /**
   *
   * @desc insert at the beginning
   */
  prepend(data: number): LinkedList {
    if (!this.head) {
      this.head = new Node(data)
      this.tail = this.head
      this.incrementSize()
      return this
    }
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.incrementSize()
    return this
  }

  /**
   *
   * @desc push to the end of the list
   */
  append(data: number): LinkedList {
    if (!this.tail) {
      this.head = new Node(data)
      this.tail = this.head
      this.incrementSize()
      return this
    }
    const newNode = new Node(data)
    this.tail.next = newNode
    this.tail = newNode
    this.incrementSize()
    return this
  }

  getHead() {
    return this.head
  }

  getNode(index: number) {
    if (index < 0 || index > this.getSize()) return null
    if (index === 0) return this.getHead()
    if (index === this.getSize()) return this.tail
    let tracker = 0
    let current = this.head
    while (current !== null) {
      if (tracker === index) return current
      current = current.next
      tracker++
    }
    return null
  }

  printNodes(): void {
    const nodes: string[] = []
    let current = this.head
    let tracker = 0
    while (current !== null) {
      tracker++
      const v = tracker < this.getSize() ? `${current.data} =>` : `${current.data}`
      nodes.push(v)
      current = current.next
    }
    console.log(nodes)
  }
  sumNodes(): number {
    let sum = 0
    let current = this.head
    while (current !== null) {
      sum += current.data
      current = current.next
    }
    return sum
>>>>>>> 11108822c58e1bb2b822776e03cbcd1f4ac45629
  }

<<<<<<< HEAD
  // sort() {}
  // reverse() {}
  // removeDuplicates(): this {
  //   // works only if sorted
  //   let current = this.head
  //   let nextNode = current?.next
  //   while (current) {
  //     if (current.data === nextNode?.data) {
  //       current.next = nextNode.next?.next!
  //       this.size--
  //     }
  //     current = current.next
  //     nextNode = current?.next
  //   }

  //   return this
  // }
}
=======
const ll = new LinkedList()
ll.prepend(4)
ll.prepend(1)
ll.prepend(100)
ll.prepend(20)
ll.append(24)
ll.append(125)
ll.append(2)
console.log(ll.printNodes())
console.log(ll.sumNodes())
console.log(ll.getSize())
console.log(ll.getNode(7))
>>>>>>> 11108822c58e1bb2b822776e03cbcd1f4ac45629
