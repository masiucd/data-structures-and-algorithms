interface QNode<T> {
  key: T
  next: QNode<T> | null
}

interface Q<T> {
  first: QNode<T> | null
  last: QNode<T> | null
  size: number
  enqueue(key: T): QNode<T>
  dequeue(): boolean
  print(): string
  isEmpty(): boolean
  peek(): QNode<T> | null
  length: number
}
function createQueueNode<T>(key: T): QNode<T> {
  return {
    key,
    next: null,
  }
}

function Queue<T>(): Q<T> {
  return {
    first: null,
    last: null,
    size: 0,
    enqueue(key: T) {
      const newNode = createQueueNode(key)
      if (!this.first) {
        this.first = newNode
        this.last = newNode
        this.size++
        return newNode
      }
      this.last!.next = newNode
      this.last = newNode
      this.size++
      return newNode
    },
    dequeue() {
      if (!this.first) {
        return false
      }
      if (this.first === this.last) {
        this.last = null
        this.size--
      }
      this.first = this.first.next
      this.size--
      return true
    },
    isEmpty() {
      return this.size === 0
    },
    peek() {
      if (this.first !== null) return this.first
      return null
    },
    get length() {
      return this.size
    },
    print() {
      const list: string[] = []
      let current = this.first
      while (current) {
        list.push(`${current!.key}`)
        current = current.next
      }

      return list.join(" -> ")
    },
  }
}

export default Queue
