class BstNode {
  value: number
  left: null | BstNode
  right: null | BstNode
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Bst {
  root: BstNode | null
  constructor() {
    this.root = null
  }

  insert(value: number) {
    const node = new BstNode(value)
    if (!this.root) {
      this.root = node
      return this
    }

    let current = this.root
    while (true) {
      if (value === current.value) return this
      if (value < current.value) {
        // go left
        if (!current.left) {
          // if we hit the end of the edge
          current.left = node
          return this
        } else {
          current = current.left
        }
      } else if (value > current.value) {
        // go right
        if (!current.right) {
          current.right = node
          return this
        } else {
          current = current.right
        }
      }
    }
  }
  contains(value: number) {}
}

const bbb = new Bst()
bbb.insert(12)
bbb.insert(2)
bbb.insert(99)
console.log(bbb)
