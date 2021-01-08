interface NodeType<T> {
  data: T
  next: NodeType<T> | null
}

interface LinkedList<T> {
  head: T | null
  tail: T | null
  size: number
  insert: (data: T) => NodeType<T>
  push: (data: T) => NodeType<T>
  getHead: () => NodeType<T> | null
  getTail: () => NodeType<T> | null
}

function createNode<T>(value: T) {
  return {
    data: value,
    next: null,
  }
}

function linkedList<T>(): LinkedList<T> {
  return {
    head: null,
    tail: null,
    size: 0,
    /**
     *
     * @param data
     * insert from front O(1)
     */
    insert(data: T) {
      const node = createNode(data)
      if (!this.head) {
        this.head = node
        this.tail = this.head
        this.size++
        return node
      } else {
        node.next = this.head
        this.head = node
        return node
      }
    },
    /**
     *
     * @param data
     * add to the end of the list
     */
    push(data: T) {
      const node = createNode(data)
      this.tail.next = node
      return node
    },
    getHead() {
      return this.head
    },
    getTail() {
      return this.tail
    },
  }
}

const l = linkedList()
l.insert("apple")
l.insert("orange")
l.insert("banana")
console.log(l.getHead())
l.push("grape")
console.log(l.getTail())
