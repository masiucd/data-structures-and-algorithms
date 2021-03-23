function nodeDepths(root) {
  const sum = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 1) {
    if (root === null) {
      continue;
    }
    const { node, depth } = stack.pop();
    sum += depth;
    stack.push(node.left, depth + 1);
    stack.push(node.right, depth + 1);
  }
  return sum;
}
