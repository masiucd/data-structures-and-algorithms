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
    bfs(nodeKey: string, visitFn: (node: Node) => void) {
      const startingNode = this.getNode(nodeKey)

      const visited = nodes.reduce((acc: Record<string, boolean>, node) => {
        acc[node.key] = false
        return acc
      }, {})

      const queue = [startingNode]

      while (queue.length > 0) {
        const currentNode = queue.shift()
        if (!visited[currentNode?.key!]) {
          visitFn(currentNode!)
          visited[currentNode!.key] = true
        }
        currentNode?.children.forEach(n => {
          if (!visited[n.key]) {
            queue.push(n)
          }
        })
      }
    },
  }
}

const foo = createGraph(true)

foo.addNode("Marcell")
foo.addNode("Fillip")
foo.addNode("Mamma")
foo.addNode("Tata")
foo.addNode("Vincent")
foo.addNode("Pysia")
foo.addEdge("Marcell", "Fillip")
foo.addEdge("Mamma", "Tata")
foo.addEdge("Vincent", "Pysia")

console.log(foo.print())

const list = ["apple", "banana", "orange", "mango"]

console.log(
  foo.bfs("Marcell", (node: Node) => {
    console.log(node)
  })
)
