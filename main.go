package main

<<<<<<< HEAD
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
=======
import (
	"fmt"
	"strings"
)

func isIsogram(str string) bool {

	charMap := map[rune]int{}
	x := strings.Replace(strings.ToLower(str), "-", "", -1)
	xx := strings.Replace(strings.ToLower(x), " ", "", -1)

	for _, v := range xx {
		charMap[v]++
	}
	for _, v := range charMap {
		if v > 1 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isIsogram("six-year-old"))
	fmt.Println(isIsogram("six year Old"))
>>>>>>> d38c50ec4871f5869d93f4318659e153770b5526
}

func main() {
	var q QueueItem
	q.New()
	q.Enqueue("Go to school \n")
	q.Enqueue("Go out \n")
	q.Enqueue("Go for a run \n")
	q.Show()
}
