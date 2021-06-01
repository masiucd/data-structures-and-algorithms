class Node {
  value: number
  next: Node | null
  constructor(value: number) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  head: Node | null
  tail: Node | null
  #size: number
  constructor() {
    this.head = null
    this.tail = null
    this.#size = 0
  }

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
  }
}

const ll = new LinkedList()

ll.prepend(1)
ll.prepend(3)
ll.append(99)
ll.prepend(24)

console.log(ll)
console.log(ll.getSize())
console.log(ll.printNodes())
