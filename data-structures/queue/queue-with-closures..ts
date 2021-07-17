function Queue() {
  const queue: Array<number> = []
  return {
    enqueue(data: number) {
      queue.push(data)
    },
    dequeue(): boolean {
      if (this.isEmpty()) {
        return false
      }
      queue.shift()
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
