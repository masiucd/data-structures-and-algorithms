package main

// MinMaxStack struct
type MinMaxStack struct {
	stack       []int
	minMaxStack []Entry
}

// Entry struct
type Entry struct {
	min int
	max int
}

// NewMinMaxStack func
func NewMinMaxStack() *MinMaxStack {
	return &MinMaxStack{}
}

// Peek func
func (stack *MinMaxStack) Peek() int {
	return stack.stack[len(stack.stack)-1]
}

// Pop func
func (stack *MinMaxStack) Pop() int {
	stack.minMaxStack = stack.minMaxStack[:len(stack.minMaxStack)-1]
	out := stack.stack[len(stack.stack)-1]
	stack.stack = stack.stack[:len(stack.stack)-1]
	return out
}

// Push func
func (stack *MinMaxStack) Push(n int) {
	newMinMax := Entry{min: n, max: n}
	if len(stack.minMaxStack) > 0 {
		lastMinMax := stack.minMaxStack[len(stack.minMaxStack)-1]
		newMinMax.min = min(lastMinMax.min, n)
		newMinMax.max = max(lastMinMax.max, n)
	}
	stack.minMaxStack = append(stack.minMaxStack, newMinMax)
	stack.stack = append(stack.stack, n)
}

// GetMin func
func (stack *MinMaxStack) GetMin() int {
	return stack.minMaxStack[len(stack.stack)-1].min
}

// GetMax func
func (stack *MinMaxStack) GetMax() int {

	return stack.minMaxStack[len(stack.stack)-1].max

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
