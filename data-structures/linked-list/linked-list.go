package main

import "fmt"

// Node struct
type Node struct {
	data int
	next *Node
}

// List struct
type List struct {
	head *Node
	tail *Node
	size int
}

func newList() *List {
	return &List{}
}

func (ll *List) prepend(node *Node) {
	if ll.head == nil {
		ll.head = node
		ll.tail = node
		ll.size++
		return
	}
	node.next = ll.head
	ll.head = node
	ll.size++
	return
}

func main() {
	ll := newList()

	fmt.Println(ll)
}
