class NodeC<T> {
  data: T | null
  next: NodeC<T> | null

  constructor(data: T | null) {
    this.data = data
    this.next = null
  }
}

class List<T> {
  head: NodeC<T> | null
  tail: NodeC<T> | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  createNode(data: T): NodeC<T> {
    return new NodeC<T>(data)
  }

  push(data: T): this {
    const newNode = this.createNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      if (!this.tail) return this
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++
    return this
  }

  prepend(data: T): this {
    const newNode = this.createNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    }
    newNode.next = this.head
    this.head = newNode
    this.size++
    return this
  }

  printNodes(): T[] {
    const xs: T[] = []
    let current = this.head
    while (current) {
      xs.push(current.data!)
      current = current.next
    }
    return xs
  }

  get length() {
    return this.size
  }

  sort() {}
  reverse() {}
  removeDuplicates() {
    // works only if sorted
    let current = this.head
    let nextNode = current?.next
    while (current) {
      if (current.data === nextNode?.data) {
        current.next = nextNode.next?.next!
        this.size--
      }
      current = current.next
      nextNode = current?.next
    }

    return this
  }
}

const l = new List()
l.push(0)
l.push(2)
l.push(2)
l.push(23)
l.push(23)
l.push(23)
l.push(99)
l.push(99)
l.push(100)
l.push(100)
l.push(100)

console.log(l.printNodes())
console.log(l.length)
console.log(l.removeDuplicates())
console.log(l.printNodes())
console.log(l.length)
