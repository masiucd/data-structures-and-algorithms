package main

import "fmt"

// QueueItem struct
type QueueItem struct {
	items []string
}

func (q *QueueItem) New() *QueueItem {
	q.items = make([]string, 0)
	return q
}

func (q *QueueItem) Enqueue(s string) bool {
	q.items = append(q.items, s)
	return true
}

func (q *QueueItem) Size() int {
	return len(q.items)
}

func (q *QueueItem) IsEmpty() bool {
	return q.Size() == 0
}

func (q *QueueItem) Dequeue() *string {
	item := q.items[0]
	q.items = q.items[1:len(q.items)]
	return &item
}

func (q *QueueItem) Show() {
	for _, v := range q.items {
		fmt.Print("=> " + v)
	}
}

func main() {
	var q QueueItem
	q.New()
	q.Enqueue("Go to school \n")
	q.Enqueue("Go out \n")
	q.Enqueue("Go for a run \n")
	q.Show()
}
