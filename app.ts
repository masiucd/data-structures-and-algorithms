class BSTNode {
  value: number
  right: BSTNode | null
  left: BSTNode | null
  constructor(value: number) {
    this.value = value
    this.right = null
    this.left = null
  }
}
class BST {
  root: null | BSTNode
  private size: number
  constructor() {
    this.root = null
    this.size = 0
  }
  insert(value: number) {
    if (!this.root) {
      this.root = new BSTNode(value)
      this.size++
      return this
    }
    let current = this.root
    while (true) {
      if (value === current.value) return this
      if (value < current.value) {
        if (!current.left) {
          current.left = new BSTNode(value)
          this.size++
          return this
        } else {
          current = current.left
        }
      } else {
        if (!current.right) {
          current.right = new BSTNode(value)
          this.size++
          return this
        } else {
          current = current.right
        }
      }
    }
  }
  contains(value: number) {
    if (!this.root) return false
    let current = this.root
    if (value === current.value) return current
    while (current) {
      if (value < current.value) {
        current = current.left!
      } else if (value > current.value) {
        current = current.right!
      } else {
        return true
      }
    }
    return false
  }

  get amount(): number {
    return this.amount
  }
}

const b = new BST()
b.insert(10)
b.insert(5)
b.insert(12)
b.insert(100)
let f = b.contains(5)
console.log(b, f)
