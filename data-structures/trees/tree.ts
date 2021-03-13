interface TreeNode<T> {
  key: T;
  children: TreeNode<T>[];
  appendChild: (childKey: T) => TreeNode<T>;
}

function createNode<T>(key: T) {
  const children: TreeNode<T>[] = [];

  const appendChild = (childKey: T): TreeNode<T> => {
    const childNode = createNode(childKey);
    children.push(childNode);
    return childNode;
  };

  return {
    key,
    children,
    appendChild,
  };
}

function createTree<T>(rootKey: T) {
  const root = createNode(rootKey);

  const printNodes = (): string => {
    let result = "";

    const traverse = (
      node: TreeNode<T>,
      visitFn: (node: TreeNode<T>, depth: number) => void,
      depth: number,
    ) => {
      visitFn(node, depth);
      if (node.children.length) {
        node.children.forEach(n => traverse(n, visitFn, depth + 1));
      }
    };

    const addKeyToResult = (node: TreeNode<T>, depth: number): void => {
      result += result.length === 0 ? node.key : `\n${" ".repeat(depth * 2)}${node.key}`;
    };

    traverse(root, addKeyToResult, 0);
    return result;
  };

  return {
    root,
    printNodes,
  };
}

const domTree = createTree("html");
const head = domTree.root.appendChild("head");
const body = domTree.root.appendChild("body");
const title = body.appendChild("title = 'hello there!'");
const header = body.appendChild("header");
const main = body.appendChild("main");
const h1 = header.appendChild("h1 - welcome to learn about trees ");
const p = main.appendChild("p - 'trees are cool'");
const footer = body.appendChild("footer");
const copyRight = footer.appendChild(`Copyright - ${new Date().getFullYear()}`);
// console.log(domTree.printNodes());
