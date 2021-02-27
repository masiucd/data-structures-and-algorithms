export class Stack<T> {
  private stack: T[]
  private size: number
  constructor() {
    this.stack = []
    this.size = 0
  }

  push(value: T) {
    this.stack.push(value)
    this.size++
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  pop() {
    this.stack.pop()
    this.size--
  }

  get getSize(): number {
    return this.size
  }
}

// const s = new Stack()
// s.push("apple")
// s.push("orange")
// s.push("banana")
// console.log(s.peek())
// s.push("kiwi")
// s.pop()
// console.log(s.getSize)
