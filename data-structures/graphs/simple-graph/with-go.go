package main

import "fmt"

// Node struct
type Node struct {
	key      string
	children []Node
}

// Graph func
type Graph struct {
	nodes      []*Node
	edges      []*string
	isDirected bool
}

func (n *Node) addChild(child *Node) {
	n.children = append(n.children, *child)
}

func createNode(key string) *Node {
	return &Node{
		key:      key,
		children: []Node{},
	}
}

func (g *Graph) addNode(key string) {
	g.nodes = append(g.nodes, createNode(key))
}

func (g *Graph) getNode(key string) *Node {
	var result *Node
	for _, n := range g.nodes {
		if n.key == key {
			result = n
		}
	}
	return result
}

func (g *Graph) addEdge(key1 string, key2 string) {
	node1 := g.getNode(key1)
	node2 := g.getNode(key2)

	if g.isDirected {
		node1.addChild(node2)
		s := fmt.Sprintf("%s --> %s", key1, key2)
		g.edges = append(g.edges, &s)
	}
	if !g.isDirected {
		node2.addChild(node1)
	}
}

func createGraph(directed bool) Graph {
	return Graph{
		nodes:      []*Node{},
		edges:      []*string{},
		isDirected: directed,
	}
}

func main() {
	g := createGraph(false)
	g.addNode("a")
	g.addNode("b")
	g.addNode("c")
	g.addNode("d")
	g.addEdge("a", "b")
	g.addEdge("b", "c")
	fmt.Println(g)
}
