package main

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

func (ll *List) prepend(data int) {
	newNode := &Node{data, nil}
	if ll.head == nil {
		ll.head = newNode
		ll.tail = ll.head
		ll.size++
		return
	}

	newNode.next = ll.head
	ll.head = newNode
	ll.size++
	return
}

func main() {
	// ll := newList()

	// ll.prepend(5)
	// ll.prepend(2)
	// ll.prepend(1)
	// fmt.Println(ll)

	// xs := []int{1, 2, 3, 4, 5}

}
