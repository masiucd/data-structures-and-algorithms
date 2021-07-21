class NodeList<T> {
  data: T
  next: NodeList<T> | null
  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

class List<T> {
  private head: NodeList<T> | null
  private tail: NodeList<T> | null
  private size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  private makeNewNode(data: T) {
    return new NodeList<T>(data)
  }

  append(data: T) {
    const newNode = this.makeNewNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return newNode
    }

    this.tail!.next = newNode
    this.tail = newNode
    this.size++

    return newNode
  }
  prepend(data: T) {
    const newNode = this.makeNewNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return newNode
    }
    newNode.next = this.head
    this.head = newNode
    this.size++
    return newNode
  }
  get length() {
    return this.size
  }
  print() {
    const xs: T[] = []
    let current = this.head
    while (current) {
      xs.push(current.data)
      current = current.next
    }
    return xs.join(" -> ")
  }

  getNode(index: number) {
    if (index === 0) {
      return this.head
    }
    if (index > this.size) {
      return null
    }
    let counter = 0
    let current = this.head
    while (current) {
      if (counter === index) {
        return current
      }
      counter++
      current = current.next
    }
    return null
  }

  removeHead() {
    if (this.head === null) {
      return null
    }
    // A -> B -> C
    // let B be the new head
    // so we drop A
    this.head = this.head.next
    this.size--
  }
  pop() {
    if (!this.head) return null
    let current = this.head
    let newTail = current
    while (current.next !== null) {
      newTail = current
      current = current.next
    }
    newTail.next = null
    this.tail = newTail
    this.size--
    if (this.size === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
}

const list = new List()
list.append("apple")
list.append("banana")
list.append("orange")
list.append("kiwi")
list.prepend("Jack fruit")
list.prepend("Kiwi")
list.pop()
list.pop()
console.log(list.print())
console.log(list.length)
// console.log(l.getNode(0))
