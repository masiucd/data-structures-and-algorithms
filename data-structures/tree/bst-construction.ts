export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): BST {
    if (value < this.value) {
      // if we hit the edge there is no more nodes
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
    return this
  }

  contains(value: number): boolean {
    if (value < this.value) {
      if (this.left === null) {
        return false
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false
      } else {
        return this.right.contains(value)
      }
    }
    return true
  }

  remove(value: number, parent: BST | null = null): BST {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this)
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this)
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value
          this.right = this.left?.right
          this.left = this.left.left
        } else if (this.right !== null) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }
    return this
  }

  getMinValue(): number {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}

const f = new BST(2)
f.insert(3)
f.insert(11)
f.insert(5)
// f.remove(5)
console.log(f)
console.log(f.contains(5))
