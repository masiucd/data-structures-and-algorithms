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
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return this;
      if (value < current.value) {
        // go left
        if (!current.left) {
          // if we hit the end of the edge
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        // go right
        if (!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

// const bst = new Bst();
// bst.insertNode(2);
// bst.insertNode(1);
// bst.insertNode(3);
