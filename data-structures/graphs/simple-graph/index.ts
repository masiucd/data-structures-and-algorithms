interface Node {
  key: string
  addChild(child: Node): Node[]
  children: Node[]
}
function createNode(key: string): Node {
  const children: Node[] = []
  return {
    key,
    children,
    addChild(node: Node) {
      children.push(node)
      return children
    },
  }
}

function createGraph(directed = false) {
  const nodes: Node[] = []
  const edges: string[] = []
  return {
    nodes,
    edges,
    directed,
    addNode(key: string) {
      const newNode = createNode(key)
      nodes.push(newNode)
      return nodes
    },
    getNode(key: string) {
      return nodes.find(node => node.key === key)
    },

    addEdge(nodeKey1: string, nodeKey2: string) {
      const node1 = this.getNode(nodeKey1)
      const node2 = this.getNode(nodeKey2)

      if (node1 && node2) {
        node1.addChild(node2)
        if (!directed) {
          node2.addChild(node1)
        }
        edges.push(`${node1.key}${node2.key}`)
      }
    },
    print() {
      return nodes.map(({key, children}) => {
        let result = `${key}`
        if (children.length > 0) {
          result += ` => ${children.map(n => n.key).join(" ")}`
        }
        return result
      })
    },
  }
}

const g = createGraph()

g.addNode("Marcell")
g.addNode("Fillip")
g.addNode("Mamma")
g.addNode("Tata")
g.addNode("Vincent")
g.addNode("Pysia")

g.addEdge("Marcell", "Fillip")
g.addEdge("Mamma", "Tata")
g.addEdge("Vincent", "Pysia")

console.log(g.print())
