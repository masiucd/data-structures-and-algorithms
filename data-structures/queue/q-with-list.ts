interface QNode<T> {
  key: T
  next: QNode<T> | null
}

function createQueueNode<T>(key: T): QNode<T> {
  return {
    key,
    next: null,
  }
}

function Queue<T>() {
  const queue: T[] = []
  return {
    enqueue(item: T) {
      queue.unshift(item)
      return queue
    },
    dequeue() {
      if (queue.length === 0) {
        return null
      }
      return queue.pop()
    },
    peek() {
      return queue.length === 0 ? null : queue[queue.length - 1]
    },
    get size() {
      return queue.length
    },
    isEmpty() {
      return this.size === 0
    },
    print() {
      return queue.map(item => item).join(" => ")
    },
  }
}
