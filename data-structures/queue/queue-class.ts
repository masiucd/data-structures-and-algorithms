class Node<T> {
  data: T
  next: Node<T> | null
  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

export class Queue<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(data: T) {
    const node = new Node<T>(data)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      if (!this.tail) return
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }
  dequeue() {
    if (!this.head) return
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    this.size--
  }

  peek(): T | undefined {
    if (!this.head) return
    return this.head.data
  }
  get getSize() {
    return this.size
  }
}
