class XNode {
  value: number;
  left: null | XNode;
  right: null | XNode;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MyTree<T> {
  root: null | XNode;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new XNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      // check if value is smaller than left
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

  find(value: number) {
    if (!this.root) return false;
    if (this.root.value === value) return true;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left!;
      } else if (value > current.value) {
        current = current.right!;
      } else {
        return true;
      }
    }
    return false;
  }
}

const cx = new MyTree();

cx.insert(2);
cx.insert(1);
cx.insert(3);
console.log(cx.find(12));
