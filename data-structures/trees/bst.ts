class Node<T> {
  value: T;
  left: null | Node<T>;
  right: null | Node<T>;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst<T> {
  root: null | Node<T>;
  constructor() {
    this.root = null;
  }

  insertNode(value: T): Bst<T> {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // check if number already exist
      if (value === current.value) return this;
      if (value < current.value) {
        // go left
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        // go right
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

const bst = new Bst();
