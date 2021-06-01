const hasChildren = (children: Node[]) => children.length > 0

interface Node {
  key: string
  children: Node[]
  addChild: (child: Node) => void
}
function createNode(key: string) {
  const children: Array<Node> = []
  return {
    key,
    children,
    addChild(node: Node) {
      children.push(node)
    },
  }
}

function createGraph(directed = false) {
  const nodes: Array<Node> = []
  const edges: Array<string> = []

  return {
    directed,
    edges,
    nodes,
    addNode(nodeKey: string) {
      nodes.push(createNode(nodeKey))
    },
    getNode(key: string) {
      return nodes.find(node => node.key === key)
    },
    addEdge(key1: string, key2: string) {
      const node1 = this.getNode(key1)
      const node2 = this.getNode(key2)
      if (node1 && node2) {
        node1.addChild(node2)
        edges.push(`${key1}---${key2}`)
      }

      if (!directed && node1) {
        node2?.addChild(node1)
      }
    },
    print() {
      return nodes.map(({ key, children }) => {
        let result = key
        if (hasChildren(children)) {
          result += ` => ${children.map(child => `${child.key}`).join(" ")}`
        }
        return result
      })
    },
  }
}

const g = createGraph(true) // directed

g.addNode("Marcell")
g.addNode("Filip")
g.addNode("Jurek")
g.addNode("Barbara")

g.addEdge("Marcell", "Barbara")
g.addEdge("Filip", "Jurek")
g.addEdge("Barbara", "Jurek")
g.addEdge("Jurek", "Marcell")
console.log(g.print())
