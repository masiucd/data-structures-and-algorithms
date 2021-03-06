class Node<T> {
  data: T
  next: Node<T> | null
  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

class LinkedList<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  private makeNewNode(data: T) {
    return new Node<T>(data)
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
    return current
  }

  // delete(index: number) {
  //   if (index === 0) {
  //     return this.removeHead()
  //   }
  //   if (index > this.size) {
  //     return null
  //   }
  //   let counter = 0
  //   let current = this.head
  // }
}

const l = new LinkedList()
l.append("apple")
l.append("banana")
l.append("orange")
l.append("kiwi")
l.prepend("Jack fruit")
l.prepend("Kiwi")
l.pop()
l.pop()
console.log(l.print())
console.log(l.length)
// console.log(l.getNode(0))
