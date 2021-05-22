interface MinMaxItem {
  min: number
  max: number
}

export class MinMaxStack {
  minMaxStack: MinMaxItem[]
  stack: number[]

  constructor() {
    this.minMaxStack = []
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  pop() {
    this.minMaxStack.pop()
    return this.stack.pop()
  }

  push(n: number) {
    const newMinMax = { min: n, max: n }
    if (this.minMaxStack.length > 0) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1]
      newMinMax.min = Math.min(lastMinMax.min, n)
      newMinMax.max = Math.max(lastMinMax.max, n)
    }
    this.minMaxStack.push(newMinMax)
    this.stack.push(n)
  }

  getMin() {
    return this.minMaxStack[this.stack.length - 1].min
  }

  getMax() {
    return this.minMaxStack[this.stack.length - 1].max
  }
  printStacks() {
    if (this.stack.length > 0) {
      this.stack.forEach(n => console.log(`${n}\n****\n`))
      this.minMaxStack.forEach(n => console.log(`${n.min}-${n.max} \n`))
    }
  }
}
