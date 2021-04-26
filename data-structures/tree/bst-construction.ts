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
    // if value is less then root value then go left else go right
    if (value < this.value) {
      // go left
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (value > this.value) {
        // go right
        if (this.right === null) {
          this.right = new BST(value)
        } else {
          this.right.insert(value)
        }
      }
    }
    return this
  }

  contains(value: number): boolean {
    if (value < this.value) {
      if (this.left === null) {
        return false
      } else {
        return this.left?.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false
      } else {
        this.right.contains(value)
      }
    }
    return false
  }

  remove(value: number, parent: BST | null = null): BST {
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
