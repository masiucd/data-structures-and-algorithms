package stack

// Storage struct
type Storage []string

// IsEmpty check if is empty
func (s *Storage) IsEmpty() bool {
	return len(*s) == 0
}

// Push on the top of the stack
func (s *Storage) Push(item string) {
	*s = append(*s, item)
}

// Pop removes the first item from the top
func (s *Storage) Pop() (string, bool) {
	if s.IsEmpty() {
		return "empty", false
	} else {
		index := len(*s) - 1
		element := (*s)[index]
		*s = (*s)[:index]
		return element, true
	}
}

// Peek return the top element
func (s *Storage) Peek() (string, bool) {
	if s.IsEmpty() {
		return "empty", false
	} else {
		return (*s)[len(*s)-1], true
	}
}

// Stack fn
func Stack() Storage {

	var storage Storage
	storage.Push("apple")
	storage.Push("banana")
	storage.Push("resberry")
	storage.Pop()
	

	return storage
}
