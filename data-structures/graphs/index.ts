interface NodeType {
  key: string
  children: NodeType[]
  addNewChild(node: NodeType): void
}

interface IGraph {
  getNodes(): Node[]
  getEdges(): string[]
  getIsDirected(): boolean
  addNode(key: string): void
  addEdge(key1: string, key2: string): void
  getNode(key: string): Node | undefined
  print(): void
}

class Node implements NodeType {
  key: string
  children: Node[]
  constructor(key: string) {
    this.key = key
    this.children = []
  }

  addNewChild(node: Node): void {
    this.children.push(node)
  }
}

class Graph implements IGraph {
  #nodes: Node[]
  #edges: string[]
  #isDirected: boolean
  constructor(isDirected = false) {
    this.#nodes = []
    this.#edges = []
    this.#isDirected = isDirected
  }

  getNodes(): Node[] {
    return this.#nodes
  }
  getEdges(): string[] {
    return this.#edges
  }

  getIsDirected(): boolean {
    return this.#isDirected
  }

  addNode(key: string): void {
    this.#nodes.push(new Node(key))
  }

  getNode(key: string) {
    return this.#nodes.find(n => n.key === key)
  }

  addEdge(key1: string, key2: string): void {
    const node1 = this.getNode(key1)
    const node2 = this.getNode(key2)
    if (node1 && node2) {
      node1.addNewChild(node2)
      this.getEdges().push(`${key1} ---> ${key2}`)
    }
    if (!this.getIsDirected() && node1 && node2) {
      node2.addNewChild(node1)
    }
  }

  private hasChildren(children: Node[]): boolean {
    return children.length > 0
  }

  print() {
    return this.getNodes().map(({ key, children }) => {
      let result = key
      if (this.hasChildren(children)) {
        result += ` => ${children.map(child => `${child.key}`).join(" ")}`
      }
      return result
    })
  }
}

const graph = new Graph()
graph.addNode("Apple")
graph.addNode("Banana")
graph.addNode("Grape")
graph.addNode("Orange")

graph.addEdge("Apple", "Grape")
console.log(graph.print())
