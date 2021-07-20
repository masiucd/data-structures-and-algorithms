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

export default Queue

const q = Queue()
