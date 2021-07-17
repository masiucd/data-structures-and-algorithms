function Queue() {
  const queue: Array<number> = []
  return {
    enqueue(data: number) {
      queue.unshift(data)
    },
    dequeue(): boolean {
      if (this.isEmpty()) {
        return false
      }
      queue.pop()
      return true
    },
    isEmpty() {
      return this.size() === 0
    },
    peek(): number {
      return queue[queue.length - 1]
    },
    size(): number {
      return queue.length
    },
    print(): void {
      const xs = queue.map(x => x).join(" => ")
      console.log(xs)
    },
  }
}

const queue = Queue()
queue.enqueue(2)
queue.enqueue(34)
queue.enqueue(12)
queue.enqueue(122)
queue.dequeue()
queue.print()
