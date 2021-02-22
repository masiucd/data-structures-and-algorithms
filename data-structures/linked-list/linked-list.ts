class Node<T> {
  data: T
  next: Node<T> | null
  constructor(data: T) {
    this.data = data
    this.next = null
  }
}
class LinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  unShift(data: T): void {
    const newNode = new Node<T>(data)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    }
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  get listSize(): number {
    return this.size
  }

  push(data: T) {
    var newNode = new Node<T>(data)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      if (!this.tail?.next) return this
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
    return this
  }

  removeDuplicates() {
    const map: Record<string, number> = {}
    // let counter = 0
    // let current = this.head
    // while (counter < this.size) {
    //   // @ts-ignore
    //   if (!map[current?.data]) {
    //     // @ts-ignore
    //     map[current?.data] = 1
    //   } else {
    //     // @ts-ignore
    //     map[current?.data] += 1
    //   }
    //   // @ts-ignore
    //   current = current?.next
    //   counter++
    // }
    // console.log(map)
  }
}

const ll = new LinkedList()
ll.unShift(1)
ll.unShift(2)
ll.unShift(2)
ll.unShift(2)
ll.unShift(12)
console.log(ll.removeDuplicates())
console.log(ll.listSize)

// console.log(ll.listSize)
