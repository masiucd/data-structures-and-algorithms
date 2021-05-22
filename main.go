package main

import "fmt"

// MinMax struct
type MinMax struct {
	min int
	max int
}

// MinMaxStack struct
type MinMaxStack struct {
	minMax []MinMax
	stack  []int
}

func createStack() *MinMaxStack {
	return &MinMaxStack{}
}

func pop(xs *[]int) {
	size := len(*xs)
	*xs = (*xs)[:size-1]
}

func (stack *MinMaxStack) push(n int) {
	newMinMax := MinMax{min: n, max: n}
	if len(stack.minMax) > 0 {
		lastMinMax := stack.minMax[len(stack.minMax)-1]
		lastMinMax.min = min(lastMinMax.min, n)
		lastMinMax.max = max(lastMinMax.max, n)
	}
	stack.minMax = append(stack.minMax, newMinMax)
	stack.stack = append(stack.stack, n)
}

func (stack *MinMaxStack) pop() int {
	stack.minMax = stack.minMax[:len(stack.minMax)-1]
	out := stack.stack[len(stack.stack)-1]
	stack.stack = stack.stack[:len(stack.stack)-1]
	return out
}

func (stack *MinMaxStack) getMax() int {
	return stack.minMax[len(stack.minMax)].min
}
func (stack *MinMaxStack) getMin() int {
	return stack.minMax[len(stack.minMax)].max
}

func main() {

	xs := []int{}
	fillSlice(&xs, 0, 20)

	pop(&xs)
	fmt.Println(xs)

}

func min(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func max(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func fillSlice(xs *[]int, from, to int) {
	for i := from; i <= to; i++ {
		*xs = append(*xs, i)
	}
}
