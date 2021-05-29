interface Node {
  key: string
  children: Node[]
  addChild(child: Node): void
}
function createNode(key: string) {
  const children: Node[] = []
  return {
    key,
    children,
    addChild(child: Node) {
      children.push(child)
    },
  }
}

function createGraph(directed = false) {
  //
}
