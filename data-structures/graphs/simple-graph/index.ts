const hasChildren = (children: GraphNode[]) => children.length > 0
interface GraphNode {
  key: string
  children: GraphNode[]
  addChild(child: GraphNode): void
}
interface Graph {
  addNode(key: string): void
  getNode(key: string): GraphNode | boolean
  createEdge(key1: string, key2: string): boolean
  print(): string[]
}
function createNode(key: string) {
  const children: GraphNode[] = []
  return {
    key,
    children,
    addChild(child: GraphNode) {
      children.push(child)
    },
  }
}

function createGraph(directed = false) {
  const edges: string[] = []
  const nodes: GraphNode[] = []

  return {
    addNode(key: string) {
      nodes.push(createNode(key))
    },
    getNode(key: string): GraphNode | undefined {
      return nodes.find(n => n.key === key)
    },
    createEdge(key1: string, key2: string) {
      const node1 = this.getNode(key1)
      const node2 = this.getNode(key2)

      if (node1 && node2) {
        node1.addChild(node2)
        edges.push(`--${key1}--${key2}`)
      }

      if (!directed && node1 && node2) {
        node2.addChild(node1)
      }
      return true
    },
    print() {
      return nodes.map(({ key, children }) => {
        let result = key
        if (hasChildren(children)) {
          result += `${children.map(c => ` ${c.key} `).join(" ")}`
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

g.createEdge("Marcell", "Barbara")
g.createEdge("Filip", "Jurek")
g.createEdge("Barbara", "Jurek")
g.createEdge("Jurek", "Marcell")
// console.log(g.print())
